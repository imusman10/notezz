import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class AddBookArgs {
  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}
