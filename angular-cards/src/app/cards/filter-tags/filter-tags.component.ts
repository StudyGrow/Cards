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

import { map, startWith, share, filter } from "rxjs/operators";

import { Store } from "@ngrx/store";
import {
  setTypingMode,
  resetFilter,
  removeTag,
  addTag,
} from "src/app/store/actions/actions";
import {
  selectDrawerState,
  selectTags,
  selectAllTags,
  selectTagOptions,
} from "src/app/store/selector";

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
    map((state) => state.currLecture)
  );
  selected = []; //active tags
  subs: Subscription[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl();
  options: string[] = [];
  filteredTags$: Observable<string[]>;
  selectedChanged: boolean = false;

  @ViewChild("Input") input: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    let sub = this.data$.pipe(map(selectTags)).subscribe((tags) => {
      if (tags != this.selected) {
        this.selected = tags; //currently selected tags in the filter
      }
    });
    this.subs.push(sub);
    sub = this.data$.pipe(map(selectTagOptions)).subscribe((tags) => {
      if (tags != this.options) {
        console.log(tags);
        this.options = tags; //get all available tags
      }
    });
    this.filteredTags$ = this.formCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        return tag ? this._filter(tag) : this.options.slice();
      })
    );
  }

  remove(tag: string): void {
    //remove tag from the filters
    this.store.dispatch(removeTag({ tag: tag }));
  }

  add(event: MatAutocompleteSelectedEvent): void {
    //add tag to the filters
    let newTag = event.option.value;
    if (!this.selected.includes(newTag)) {
      this.store.dispatch(addTag({ tag: newTag }));
    }
    this.input.nativeElement.value = "";
  }
  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  resetNav() {
    this.store.dispatch(setTypingMode({ typing: false }));
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      (item) => item.toLowerCase().indexOf(filterValue) === 0
    );
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
