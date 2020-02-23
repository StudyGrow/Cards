import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSuggestionsComponent } from './search-suggestions.component';

describe('SearchSuggestionsComponent', () => {
  let component: SearchSuggestionsComponent;
  let fixture: ComponentFixture<SearchSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
