import { NetworkGetServicesOnlineStatus } from "../../../../data/usecases/helpers/network.get.services.online.status";
import { GetServicesOnlineStatus } from "../../../../domain/usecases/helpers/get.services.online.status";
import { NetworkRepository } from "../../../../infrastructure/network/network.repository";

export const makeNetworkGetServicesOnlineStatus = (): GetServicesOnlineStatus => {
  const networkRepository = new NetworkRepository();
  return new NetworkGetServicesOnlineStatus(
    networkRepository,
  );
};
