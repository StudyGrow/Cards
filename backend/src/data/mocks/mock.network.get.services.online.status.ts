import faker from "faker";
import { CheckOnlineServiceRunningRepository } from "../protocols/network/check.online.service.running";

export class CheckOnlineServiceRunningRepositorySpy implements CheckOnlineServiceRunningRepository {
  params: CheckOnlineServiceRunningRepository.Params = {
    serviceUrl: faker.internet.url()
  };
  result: CheckOnlineServiceRunningRepository.Result = true;


  async checkOnlineServicesRunning(
    params: CheckOnlineServiceRunningRepository.Params
  ): Promise<CheckOnlineServiceRunningRepository.Result> {
    this.params = params;
    return this.result;
  }
}
