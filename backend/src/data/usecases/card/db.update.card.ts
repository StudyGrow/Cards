import { UpdateCard } from "../../../domain/usecases/card/update.card";
import { AccountRepository } from "../../protocols/db/account/account.repository";
import { CardRepository } from "../../protocols/db/card/card.repository";

export class DbUpdateCard implements UpdateCard {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly cardRepository: CardRepository
  ) {}

  async update(params: UpdateCard.Params): Promise<UpdateCard.Result> {
    const user = await this.accountRepository.getById(params.user.id);
    if (!user) {
      return null;
    }

    const oldCard = await this.cardRepository.getById({
      id: params.data._id,
    });
    const updatedCard = await this.cardRepository.update({
      ...oldCard,
      ...params.data,
    });

    return updatedCard;
  }
}
