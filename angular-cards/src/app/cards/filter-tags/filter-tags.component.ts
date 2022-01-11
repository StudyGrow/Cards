import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Vorlesung } from 'src/app/models/Vorlesung';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { map, startWith, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setTypingMode, removeTag, addTag } from 'src/app/store/actions/StateActions';
import { ACTIVE_TAGS, SELECTED_LECTURE, TAG_OPTIONS } from 'src/app/store/selector';
import { AppState } from 'src/app/models/state';

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss'],
})
export class FilterTagsComponent implements OnInit {
  lecture$: Observable<Vorlesung> = this.store.select(SELECTED_LECTURE);
  selected$: Observable<string[]>; //actively selected tags
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl('');
  options: string[] = [];
  filteredTags$: Observable<string[]>; //tags filtered by userinput

  @ViewChild('Input') input: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.selected$ = this.store.select(ACTIVE_TAGS);
    this.filteredTags$ = combineLatest([
      this.formCtrl.valueChanges.pipe(startWith('')),
      this.store.select(TAG_OPTIONS),
    ]).pipe(
      map(([input, tags]: [string, string[]]) => {
        return input?.length > 0 ? this._filter(input, tags) : tags;
      }),
      map((list) => list.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())))
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
