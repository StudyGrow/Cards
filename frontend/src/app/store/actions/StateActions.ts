import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/models/Card';
import { SortType } from 'src/app/models/SortType';
import { CarouselInfo } from 'src/app/models/CarouselInfo';
import { CardFormMode } from 'src/app/models/state';

enum ActionTypes {
  SET_FORM_MODE = '[Form] set display mode of form (edit, add, none, reset)',
  SET_TYPING_MODE = '[Typing] true if user is currently in a typing field',
  SET_SUGGESTIONS_VISIBILITY_MODE = '[Suggestions] show or hide search results',
  TOGGLE_DRAWER = '[Drawer] toggle drawer',
  INCREMENT_LOADING = '[Loading] increment the loading state',
  DECREMENT_LOADING = '[Loading] decrement the loading state',
  APPLY_FILTER = '[Filter] change the current cards filter for carousel cards',
  RESET_FILTER = '[Filter] reset the filter to show all cards',
  REMOVE_TAG = '[Filter] remove tag from the filter',
  ADD_TAG = '[Filter] add tag to the filter',
  CHANGE_TAB = '[Tab] change the tab on cards view',
  CHABGE_THEME = '[Theme] change theme',
  UPDATE_CAROUSEL_INFO = '[CarouselInfo] update the carousel information in store. (This action should only be called by the carousel itself!)',
  SHOW_CARD = '[Card] set a  card which should be shown',
  SHOW_CARD_SUCCESS = '[Card] card can successfully be switched',
  NAVIGATE_TO_CARD = '[Card] navigate to card on lecture route',
  GO_NEXT = '[Cards] Go to the next slide ',
  GO_PREV = '[Cards] Go to the prev. slide ',
  CHANGE_SORTING = '[SortType] change the sortType applied to the cards',
  RESET_CARDSDATA = '[CardsData] reset the cardsdata which are specific to the cards route',
  FAIL = 'Action failed',
}

export const updateCarouselInfo = createAction(ActionTypes.UPDATE_CAROUSEL_INFO, props<{ info: CarouselInfo }>());
export const showNewCard = createAction(ActionTypes.SHOW_CARD, props<{ card?: Card }>());
export const showNewCardSuccess = createAction(ActionTypes.SHOW_CARD_SUCCESS, props<{ card: Card }>());

export const resetCardsState = createAction(ActionTypes.RESET_CARDSDATA);
export const fail = createAction(ActionTypes.FAIL, props<{ reason: string }>());
export const changeTab = createAction(ActionTypes.CHANGE_TAB, props<{ tab: number }>());
export const changeSorting = createAction(ActionTypes.CHANGE_SORTING, props<{ sortType: SortType }>());
export const applyFilter = createAction(ActionTypes.APPLY_FILTER, props<{ tags: string[] }>());
export const addTag = createAction(ActionTypes.ADD_TAG, props<{ tag: string }>());
export const removeTag = createAction(ActionTypes.REMOVE_TAG, props<{ tag: string }>());
export const resetFilter = createAction(ActionTypes.RESET_FILTER);
export const setFormMode = createAction(ActionTypes.SET_FORM_MODE, props<{ mode: CardFormMode }>());
export const setTypingMode = createAction(ActionTypes.SET_TYPING_MODE, props<{ typing: boolean }>());
export const setSuggestionsMode = createAction(ActionTypes.SET_SUGGESTIONS_VISIBILITY_MODE, props<{ hide: boolean }>());

// export const setActiveCardIndex = createAction(ActionTypes.SET_ACITVE_CARD_INDEX, props<{ index: number }>());

export const navigateToCard = createAction(ActionTypes.NAVIGATE_TO_CARD, props<{ card: Card }>());

// export const setActiveCardSuccess = createAction(ActionTypes.SET_ACITVE_CARD_SUCCESS, props<{ card: Card }>());

export const toggleDrawerState = createAction(ActionTypes.TOGGLE_DRAWER);

export const incrementLoading = createAction(ActionTypes.INCREMENT_LOADING);

export const decrementLoading = createAction(ActionTypes.DECREMENT_LOADING);
