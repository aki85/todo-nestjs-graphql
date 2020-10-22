import { InputType, Field } from '@nestjs/graphql'
import { IsString, IsBoolean, IsOptional } from 'class-validator'

@InputType()
export default class TodoInput {
  @Field()
  @IsString()
  title: string

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isDone?: boolean
}
