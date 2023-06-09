import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { Order } from 'src/common/order/order';

@InputType()
export class AddLectureInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  abrv!: string;

  // @Field(() => [String], { nullable: true })
  // tagList?: string[];
}

export enum LectureOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'name',
}

registerEnumType(LectureOrderField, {
  name: 'LectureOrderField',
  description: 'Properties by which lecture connections can be ordered',
});

@InputType()
export class LectureOrder extends Order {
  field: LectureOrderField;
}
