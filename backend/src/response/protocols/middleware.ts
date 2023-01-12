import { HttpResponse } from "./http.response";

export interface Middleware<T1, T2> {
  handle: (httpRequest: T1) => Promise<HttpResponse<T2>>;
}
