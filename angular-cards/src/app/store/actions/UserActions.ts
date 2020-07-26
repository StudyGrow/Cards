import { createAction, props } from "@ngrx/store";
import { UserInfo } from "src/app/models/UserInfo";

enum ActionTypes {
  FETCH_USER_DATA = "[User] Fetch from server",
  FETCH_USER_DATA_SUCCESS = "[User] Load success",
}

export const fetchUserData = createAction(ActionTypes.FETCH_USER_DATA);

export const fetchUserDataSuccess = createAction(
  ActionTypes.FETCH_USER_DATA_SUCCESS,
  props<UserInfo>()
);
