export type HttpResponse<Type> = {
  statusCode: number;
  body: Type;
};
