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
yarn dynamo
#### windows wsl
yarn dynamo-win

### create local table

aws dynamodb create-table --cli-input-json file://./migrations/todoTable.json --endpoint-url http://localhost:8000


### dev server
yarn dev
