import { GetServicesOnlineStatusOutput } from "../../../main/graphql/resolvers/helpers/output/get.services.online.status.output";

export interface GetServicesOnlineStatus {
  getOnlineStatus: (account: GetServicesOnlineStatus.Params) => Promise<GetServicesOnlineStatus.Result>;
}

export namespace GetServicesOnlineStatus {
  export type Params = void

  export type Result = GetServicesOnlineStatusOutput | null;
}
