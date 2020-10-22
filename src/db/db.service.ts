import { Injectable } from '@nestjs/common'
import { DynamoDB } from 'aws-sdk'

@Injectable()
export class DBService {
  private client: DynamoDB.DocumentClient = null

  getClient(): DynamoDB.DocumentClient {
    if (this.client) {
      return this.client
    }
    const defaultOptoins = {
      convertEmptyValues: true
    }
    if (process.env.NODE_ENV !== 'development') {
      this.client = new DynamoDB.DocumentClient(defaultOptoins)
    } else {
      this.client = new DynamoDB.DocumentClient({
        endpoint: process.env.DYNAMODB_URL || 'http://localhost:8000',
        region: 'us-east-1',
        ...defaultOptoins
      })
    }
    return this.client
  }
}
