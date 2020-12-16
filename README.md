# nestjs-graphql-template

## Front
https://github.com/aki85/todo-redux-graphql

## Environment
* nodejs: ^12.x
* yarn: ^1.9

## Installation
yarn

## dev

### dynamodb

#### mac
yarn run dynamo
#### windows wsl
yarn run dynamo-win

### create local table

aws dynamodb create-table --cli-input-json file://./migrations/todoTable.json --endpoint-url http://localhost:8000


### dev server
yarn run dev
