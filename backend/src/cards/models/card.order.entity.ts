import { InputType, registerEnumType } from '@nestjs/graphql';
import { Order } from 'src/common/order/order';

export enum CardOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'name',
}

registerEnumType(CardOrderField, {
  name: 'CardOrderField',
  description: 'Properties by which cards connections can be ordered',
});

@InputType()
export class CardOrder extends Order {
  field: CardOrderField;
}
