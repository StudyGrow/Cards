import { Action, createAction, props, union } from "@ngrx/store";
import { Card } from "../../models/Card";
import { CardsData } from "../reducer";
import { Vorlesung } from "../../models/Vorlesung";

enum ActionTypes {
  FETCH_LECTURES = "[Lectures] Fetch from server",
  FETCH_LECTURES_SUCCESS = "[Lectures] Load success",

  ADD_LECTURE = "[Lecture] Add new lecture to the collection",
  ADD_LECTURE_SUCCESS = "[Lecture] Add lecture success",
  LOAD_FAILURE = " Load failure",
}

export const fetchLectures = createAction(ActionTypes.FETCH_LECTURES);

export const fetchLecturesSuccess = createAction(
  ActionTypes.FETCH_LECTURES_SUCCESS,
  props<{ lectures: Vorlesung[] }>()
);

export const addLercture = createAction(
  ActionTypes.ADD_LECTURE,
  props<{ lecture: Vorlesung }>()
);

export const addLectureSuccess = createAction(
  ActionTypes.ADD_LECTURE_SUCCESS,
  props<{ lecture: Vorlesung }>()
);

export const FetchLecturesActions = {
  fetchLectures,
  fetchLecturesSuccess,
};

export const AddLectureActions = { addLercture, addLectureSuccess };
