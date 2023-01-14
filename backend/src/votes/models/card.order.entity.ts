import { InputType, registerEnumType } from '@nestjs/graphql';
import { Order } from 'src/common/order/order';

export enum VoteOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'name',
}

registerEnumType(VoteOrderField, {
  name: 'VoteOrderField',
  description: 'Properties by which votes connections can be ordered',
});

@InputType()
export class VoteOrder extends Order {
  field: VoteOrderField;
}
