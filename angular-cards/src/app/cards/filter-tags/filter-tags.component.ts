import { Component, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
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
import { selectDrawerState } from "src/app/store/selector";

@Component({
  selector: "app-filter-tags",
  templateUrl: "./filter-tags.component.html",
  styleUrls: ["./filter-tags.component.css"],
})
export class FilterTagsComponent implements OnInit {
  private data$: Observable<any> = this.store
    .select(
      //holds cards data from store
      "cardsData"
    )
    .pipe(share());

  public lecture$: Observable<Vorlesung> = this.data$.pipe(
    map((data) => data.currLecture)
  );

  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl();
  tags: string[] = [];
  filteredTags: Observable<string[]>;
  selectedChanged: boolean = false;

  lecture: Vorlesung;
  @ViewChild("Input") input: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(private store: Store<any>) {}
  selected = [];
  ngOnInit(): void {
    let sub = this.lecture$.subscribe((lect) => {
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
    if (this.selected.length > 0) {
      this.selectedChanged = true;
      console.log("hi");
      this.store.dispatch(applyFilter({ tags: [...this.selected] }));
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if (this.tags.includes(value)) {
      // Add our fruit

      if ((value || "").trim()) {
        this.selected.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = "";
      }

      this.formCtrl.setValue(null);
    }
  }

  remove(tag: string): void {
    const index = this.selected.indexOf(tag);

    if (index >= 0) {
      this.selected.splice(index, 1);
    }
    this.store.dispatch(removeTag({ tag: tag }));
  }

  selected1(event: MatAutocompleteSelectedEvent): void {
    this.selected.push(event.option.viewValue);
    this.input.nativeElement.value = "";
    this.formCtrl.setValue(null);
  }
  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  resetNav() {
    this.applyFilter();
    this.store.dispatch(setTypingMode({ typing: false }));
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tags.filter(
      (item) => item.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
