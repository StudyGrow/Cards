import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActionsComponent } from './card-actions.component';

describe('VoteComponent', () => {
  let component: CardActionsComponent;
  let fixture: ComponentFixture<CardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardActionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggle vote once should increase vote count by one', () => {
    let currentVoteCount = component.voteCount;
    let newVoteCount = component.toggleVote();
    expect(newVoteCount).toBe(currentVoteCount + 1);
  });
});
