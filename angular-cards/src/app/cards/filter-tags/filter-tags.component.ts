import { Component, OnInit, Output, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Vorlesung } from "src/app/models/Vorlesung";
import { LecturesService } from "src/app/services/lectures.service";

import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { ElementRef, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";

import { map, startWith, share } from "rxjs/operators";

import { Store } from "@ngrx/store";
import {
  setTypingMode,
  applyFilter,
  resetFilter,
  removeTag,
} from "src/app/store/actions/actions";
import { selectDrawerState, selectTags } from "src/app/store/selector";

@Component({
  selector: "app-filter-tags",
  templateUrl: "./filter-tags.component.html",
  styleUrls: ["./filter-tags.component.scss"],
})
export class FilterTagsComponent implements OnInit, OnDestroy {
  private data$: Observable<any> = this.store
    .select(
      //holds cards data from store
      "cardsData"
    )
    .pipe(share());

  public lecture$: Observable<Vorlesung> = this.data$.pipe(
    map((data) => data.currLecture)
  );
  selected = []; //active tags
  subs: Subscription[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl();
  tags: string[] = [];
  filteredTags: Observable<string[]>;
  selectedChanged: boolean = false;

  @ViewChild("Input") input: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    let sub = this.data$.pipe(map(selectTags)).subscribe((tags) => {
      this.selected = tags;
    });
    this.subs.push(sub);
    sub = this.lecture$.subscribe((lect) => {
      this.tags = lect.tagList;
    });

    this.filteredTags = this.formCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        return tag ? this._filter(tag) : this.tags.slice();
      })
    );
  }

  applyFilter() {
    if (this.selected.length === 0) {
      this.store.dispatch(resetFilter());
    } else {
      this.store.dispatch(applyFilter({ tags: [...this.selected] }));
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if (this.tags.includes(value)) {
      // Add our fruit

      if ((value || "").trim()) {
        this.store.dispatch(applyFilter({ tags: [value] }));
      }

      // Reset the input value
      if (input) {
        input.value = "";
      }

      this.formCtrl.setValue(null);
    }
  }

  remove(tag: string): void {
    this.store.dispatch(removeTag({ tag: tag }));
  }

  selected1(event: MatAutocompleteSelectedEvent): void {
    this.store.dispatch(applyFilter({ tags: [event.option.viewValue] }));
    this.input.nativeElement.value = "";
    this.formCtrl.setValue(null);
  }
  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  resetNav() {
    this.store.dispatch(setTypingMode({ typing: false }));
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tags.filter(
      (item) => item.toLowerCase().indexOf(filterValue) === 0
    );
  }
  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
