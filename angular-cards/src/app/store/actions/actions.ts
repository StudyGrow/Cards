import { createAction, props } from "@ngrx/store";

enum ActionTypes {
  SET_FORM_MODE = "[Form] set display mode of form (edit, add or hide)",
}

export const setFormMode = createAction(
  ActionTypes.SET_FORM_MODE,
  props<{ mode: string }>()
);
