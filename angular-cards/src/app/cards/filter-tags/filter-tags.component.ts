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

import {
  map,
  startWith,
  share,
  filter,
  tap,
  withLatestFrom,
} from "rxjs/operators";

import { Store } from "@ngrx/store";
import {
  setTypingMode,
  resetFilter,
  removeTag,
  addTag,
} from "src/app/store/actions/actions";
import {
  selectDrawerState,
  selectActiveTags,
  selectAllTags,
  selectTagOptions,
  selectCurrentLecture,
} from "src/app/store/selector";

@Component({
  selector: "app-filter-tags",
  templateUrl: "./filter-tags.component.html",
  styleUrls: ["./filter-tags.component.scss"],
})
export class FilterTagsComponent implements OnInit {
  private data$: Observable<any> = this.store.select(
    //holds cards data from store
    "cardsData"
  );

  lecture$: Observable<Vorlesung> = this.data$.pipe(map(selectCurrentLecture));
  selected$: Observable<string[]>; //actively selected tags
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl("");
  options: string[] = [];
  filteredTags$: Observable<string[]>; //tags filtered by userinput

  @ViewChild("Input") input: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.selected$ = this.data$.pipe(map(selectActiveTags));
    this.filteredTags$ = this.formCtrl.valueChanges.pipe(
      //autocomplete
      startWith(""),
      withLatestFrom(this.data$.pipe(map(selectTagOptions))), //get all available tags
      map(([input, tags]: [string, string[]]) => {
        return input?.length > 0 ? this._filter(input, tags) : tags;
      }),
      map((list) => list.sort())
    );
  }

  remove(tag: string): void {
    //remove tag from the filters
    this.store.dispatch(removeTag({ tag: tag }));
    this.formCtrl.reset({ ...this.formCtrl.value });
  }

  select(event: MatAutocompleteSelectedEvent): void {
    let tag = event.option.viewValue;

    this.store.dispatch(addTag({ tag: tag }));
    this.formCtrl.setValue(null);
  }
  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  resetNav() {
    this.store.dispatch(setTypingMode({ typing: false }));
  }
  private _filter(value: string, tags: string[]): string[] {
    const filterValue = value.toLowerCase();

    return tags.filter((item) => item.toLowerCase().indexOf(filterValue) === 0);
  }
}
