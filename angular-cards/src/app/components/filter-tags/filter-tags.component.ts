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
import { StatesService } from "src/app/services/states.service";

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
  selectedChanged: boolean = false;

  lecture: Vorlesung;
  @ViewChild("Input") input: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(
    private lectureService: LecturesService,
    private cardService: CardsService,
    private states: StatesService
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
        return tag ? this._filter(tag) : this.tags.slice();
      })
    );
    this.states.toggle().subscribe((val) => {
      if (val === false) {
        if (this.selected.length === 0 && this.selectedChanged) {
          this.selectedChanged = false;
          this.cardService.resetFilter();
        } else {
          this.applyFilter();
        }
      }
    });
  }
  applyFilter() {
    if (this.selected.length > 0) {
      this.selectedChanged = true;
      this.cardService.applyFilter(this.selected);
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

  remove(fruit: string): void {
    const index = this.selected.indexOf(fruit);

    if (index >= 0) {
      this.selected.splice(index, 1);
    }
  }

  selected1(event: MatAutocompleteSelectedEvent): void {
    this.selected.push(event.option.viewValue);
    this.input.nativeElement.value = "";
    this.formCtrl.setValue(null);
  }
  inField() {
    this.states.setTyping(true);
  }
  resetNav() {
    this.states.setTyping(false);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tags.filter(
      (fruit) => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
