import { createAction, props } from "@ngrx/store";

enum ActionTypes {
  SET_FORM_MODE = "[Form] set display mode of form (edit, add, none, reset)",
  SET_TYPING_MODE = "[Typing] true if user is currently in a typing field",
}

export const setFormMode = createAction(
  ActionTypes.SET_FORM_MODE,
  props<{ mode: string }>()
);

export const setTypingMode = createAction(
  ActionTypes.SET_TYPING_MODE,
  props<{ typing: boolean }>()
);
