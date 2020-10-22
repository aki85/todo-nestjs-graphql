import { Injectable } from '@nestjs/common'
import _ from 'lodash'
import { DynamoDB } from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

import Todo from '../models/todo/todo'
import TodoInput from '../models/todo/todo.input'

@Injectable()
export class TodoService {
  private readonly tableName: string = 'todos'

  constructor(
  ) {}
  
  async get(client: DynamoDB.DocumentClient, id: string): Promise<Todo | null> {
    const params = {
      TableName: this.tableName,
      Key: {
        id
      },
    }
    const res = await client.get(params).promise()
    if (!res.Item) {
      return null
    }
    return res.Item as Todo
  }
  
  async scan(client: DynamoDB.DocumentClient): Promise<Todo[]> {
    const params = {
      TableName: this.tableName
    }
    const res = await client.scan(params).promise()
    res.Items.forEach(item => item.title = item.title || "")
    res.Items.sort((a, b) => dayjs(a.createdAt).isBefore(b.createdAt) ? 1 : -1)
    return res.Items as Todo[]
  }

  async create(
    client: DynamoDB.DocumentClient,
    create: TodoInput,
  ): Promise<Todo> {
    const id = uuidv4()
    const now = dayjs()
    const createdAt = now.format()
    const updatedAt = now.format()
    const item: Todo = {
        id,
        ...create,
        isDone: create.isDone ? true : false,
        createdAt,
        updatedAt,
    }
    const params = {
      TableName: this.tableName,
      Item: item,
    }
    await client.put(params).promise()
    return item
  }

  async update(
    client: DynamoDB.DocumentClient,
    update: Todo,
  ): Promise<Todo> {
    const now = dayjs()
    const updatedAt = now.format()
    const item = {
      ...update,
      updatedAt,
    }
    const params = {
      TableName: this.tableName,
      Item: item,
    }
    await client.put(params).promise()
    return item
  }

  async delete(
    client: DynamoDB.DocumentClient,
    id: string,
  ): Promise<void> {
    const params = {
      TableName: this.tableName,
      Key: {
        id,
      },
    }
    await client.delete(params).promise()
  }
}
