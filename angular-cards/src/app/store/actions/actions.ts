import { createAction, props } from "@ngrx/store";

enum ActionTypes {
  SET_FORM_MODE = "[Form] set display mode of form (edit, add, none, reset)",
  SET_TYPING_MODE = "[Typing] true if user is currently in a typing field",
  SET_SUGGESTIONS_VISIBILITY_MODE = "[Suggestions] show or hide search results",
  TOGGLE_DRAWER = "[Drawer] toggle drawer",
  INCREMENT_LOADING = "[Loading] increment the loading state",
  DECREMENT_LOADING = "[Loading] decrement the loading state",
  APPLY_FILTER = "[Filter] change the current cards filter for carousel cards",
  RESET_FILTER = "[Filter] reset the filter to show all cards",
  REMOVE_TAG = "[Filter] remove tag from the filter",
  ADD_TAG = "[Filter] add tag to the filter",
  CHANGE_TAB = "[Tab] change the tab on cards view",
  CHABGE_THEME = "[Theme] change theme",
  ADJUST_INDECES = "[startInex,endIndex] adjust the start and end indeces",
}

export const adustIndeces = createAction(
  ActionTypes.ADJUST_INDECES,
  props<{ totalCardCount: number; newIndex: number }>() //number of total cards for lecture
);

export const changeTab = createAction(
  ActionTypes.CHANGE_TAB,
  props<{ tab: number }>()
);
export const applyFilter = createAction(
  ActionTypes.APPLY_FILTER,
  props<{ tags: string[] }>()
);
export const changeTheme = createAction(
  ActionTypes.CHABGE_THEME,
  props<{ theme: string }>()
);
export const addTag = createAction(
  ActionTypes.ADD_TAG,
  props<{ tag: string }>()
);

export const removeTag = createAction(
  ActionTypes.REMOVE_TAG,
  props<{ tag: string }>()
);

export const resetFilter = createAction(ActionTypes.RESET_FILTER);

export const setFormMode = createAction(
  ActionTypes.SET_FORM_MODE,
  props<{ mode: string }>()
);

export const setTypingMode = createAction(
  ActionTypes.SET_TYPING_MODE,
  props<{ typing: boolean }>()
);

export const setSuggestionsMode = createAction(
  ActionTypes.SET_SUGGESTIONS_VISIBILITY_MODE,
  props<{ hide: boolean }>()
);

export const toggleDrawerState = createAction(ActionTypes.TOGGLE_DRAWER);

export const incrementLoading = createAction(ActionTypes.INCREMENT_LOADING);

export const decrementLoading = createAction(ActionTypes.DECREMENT_LOADING);
