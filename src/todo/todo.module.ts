import { Module } from '@nestjs/common'
import { TodoResolver } from './todo.resolver'
import { TodoService } from './todo.service'
import { DBService } from '../db/db.service'

@Module({
  providers: [TodoResolver, TodoService, DBService],
})
export class TodoModule { }
