import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodoService } from './todo/todo.service'
import { TodoModule } from './todo/todo.module'
import { DBService } from './db/db.service'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql'
    }),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService, DBService, TodoService],
})
export class AppModule {}
