import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export default class Todo {
  @Field(type => ID)
  id: string
  
  @Field()
  title: string

  @Field()
  isDone: boolean

  @Field()
  createdAt: string

  @Field()
  updatedAt: string
}
