import { Field, ObjectType, Int } from '@nestjs/graphql';
import { PageInfo } from './page.info.model';
import { Type } from '@nestjs/common';

export default function Paginated<TItem>(TItemClass: Type<TItem>) {
  @ObjectType(`${TItemClass.name}Edge`)
  abstract class EdgeType {
    @Field(() => String)
    cursor: string;

    @Field(() => TItemClass)
    node: TItem;
  }
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field(() => [EdgeType], { nullable: true })
    edges: Array<EdgeType>;

    @Field(() => PageInfo)
    pageInfo: PageInfo;

    @Field(() => Int)
    totalCount: number;
  }
  return PaginatedType;
}