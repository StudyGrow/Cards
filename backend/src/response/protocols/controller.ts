import { HttpResponse } from "./http.response";

export interface Controller<T, T2> {
  handle: (request: T) => Promise<HttpResponse<T2>>;
}
