import { ServerError } from "../errors/server.error";
import { UnauthenticatedError } from "../errors/unauthenticated.error";
import { UnauthorizedError } from "../errors/unauthorized.error";
import { HttpResponse } from "../protocols/http.response";


export const badRequest = (error: Error): HttpResponse<any> => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error): HttpResponse<any> => ({
  statusCode: 403,
  body: error,
});

export const notFound = (error: Error): HttpResponse<any> => ({
  statusCode: 404,
  body: error,
});

export const unauthorized = (error?: Error): HttpResponse<any> => {
  if (error) {
    return {
      statusCode: 401,
      body: error
    }
  }
  return {
    statusCode: 401,
    body: new UnauthorizedError({})
  }
};

export const unauthenticated = (): HttpResponse<any> => ({
  statusCode: 403,
  body: new UnauthenticatedError(),
});

export const serverError = (error: Error): HttpResponse<any> => ({
  statusCode: 500,
  body: new ServerError(error.stack!, (error.message) ? error.message : undefined),
});

export function ok<T1>(data: T1): HttpResponse<any> {
  return { statusCode: 200, body: data };
}

export const noContent = (): HttpResponse<any> => ({
  statusCode: 204,
  body: null,
});
