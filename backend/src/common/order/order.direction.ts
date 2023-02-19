import { registerEnumType } from '@nestjs/graphql';

export enum OrderDirection {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(OrderDirection, {
  name: 'OrderDirection',
  description:
    'Possible directions in which to order a list of items when provided an `orderBy` argument.',
});
