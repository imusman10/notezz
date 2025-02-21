import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBookArgs {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}
