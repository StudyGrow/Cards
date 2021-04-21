import { createAction, props } from '@ngrx/store';
import { UserInfo } from 'src/app/models/UserInfo';
import { User } from 'src/app/models/User';

enum ActionTypes {
  FETCH_USER_DATA = '[User] Fetch from server',
  FETCH_USER_DATA_SUCCESS = '[User] Load success',
  UPDATE_USER_DATA = '[User] Update user info',
  UPDATE_USER_DATA_SUCCESS = '[User] successfull update of user info',
  LOGOUT_USER = '[User] logout',
  LOGOUT_USER_SUCCESS = '[User] logout success',
  LOGIN_USER = '[User] login',
  GOOGLE_CALLBACK = '[User] google callback',
  LOGIN_USER_SUCCESS = '[User] login success',
  AUTHENTICATE = '[User] check if user is authenticated',
  AUTHENTICATED = '[User]  user is authenticated',
  REGISTER = '[User] register user account on server',
  REGISTRY_SUCCESS = '[User] Account registry was successfull',
}

export const login = createAction(ActionTypes.LOGIN_USER, props<User>());
export const googleCallback = createAction(ActionTypes.GOOGLE_CALLBACK, props<{callbackUrl: string}>());

export const loginSuccess = createAction(ActionTypes.LOGIN_USER_SUCCESS, props<User>());
export const createAccount = createAction(ActionTypes.REGISTER, props<User>());
export const createAccountSuccess = createAction(ActionTypes.REGISTRY_SUCCESS, props<User>());

export const auth = createAction(ActionTypes.AUTHENTICATE);
export const authenticated = createAction(ActionTypes.AUTHENTICATED, props<{ auth: boolean }>());

export const fetchUserData = createAction(ActionTypes.FETCH_USER_DATA);

export const fetchUserDataSuccess = createAction(ActionTypes.FETCH_USER_DATA_SUCCESS, props<UserInfo>());

export const updateUserData = createAction(ActionTypes.UPDATE_USER_DATA, props<User>());

export const logoutSuccess = createAction(ActionTypes.LOGOUT_USER_SUCCESS);

export const logout = createAction(ActionTypes.LOGOUT_USER);

export const updateUserDataSuccess = createAction(ActionTypes.UPDATE_USER_DATA, props<User>());
