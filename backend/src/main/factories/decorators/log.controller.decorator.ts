import { LogErrorRepository } from "../../../data/protocols/log/log.error.repository";
import { Controller } from "../../../response/protocols/controller";
import { HttpResponse } from "../../../response/protocols/http.response";

export class LogControllerDecorator implements Controller<any, any> {
  constructor(
    private readonly controller: Controller<any, any>,
    private readonly logErrorRepository: LogErrorRepository
  ) { }

  async handle(request: any): Promise<HttpResponse<any>> {
    const httpResponse = await this.controller.handle(request);
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError(httpResponse.body.stack);
    }
    return httpResponse;
  }
}
