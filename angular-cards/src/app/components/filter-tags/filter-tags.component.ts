import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Vorlesung } from "src/app/models/Vorlesung";
import { LecturesService } from "src/app/services/lectures.service";
import { CardsService } from "src/app/services/cards.service";

import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { ElementRef, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";

import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-filter-tags",
  templateUrl: "./filter-tags.component.html",
  styleUrls: ["./filter-tags.component.css"],
})
export class FilterTagsComponent implements OnInit {
  lecture$: Observable<Vorlesung>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl();
  tags: string[] = [];
  filteredTags: Observable<string[]>;

  lecture: Vorlesung;
  @ViewChild("Input") input: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(
    private lectureService: LecturesService,
    private cardService: CardsService
  ) {}
  selected = [];
  ngOnInit(): void {
    this.lecture$ = this.lectureService.getCurrentLecture();
    this.lecture$.subscribe((lect) => {
      this.lecture = lect;
      this.tags = this.lecture.tagList;
    });
    this.filteredTags = this.formCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        this.applyFilter();
        return tag ? this._filter(tag) : this.tags.slice();
      })
    );
  }
  applyFilter() {
    this.cardService.applyFilter(this.selected);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

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

  remove(fruit: string): void {
    const index = this.selected.indexOf(fruit);

    if (index >= 0) {
      this.selected.splice(index, 1);
    }
    if (this.selected.length === 0) {
      this.cardService.resetFilter();
    }
  }

  selected1(event: MatAutocompleteSelectedEvent): void {
    this.selected.push(event.option.viewValue);
    this.input.nativeElement.value = "";
    this.formCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tags.filter(
      (fruit) => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
