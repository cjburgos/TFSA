import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/

const schema = a.schema({
  User: a
  .model({
    id: a.id(),
    username: a.string(),
    email: a.string(),
    password: a.string(),
    role: a.enum(["Admin", "User"]),
    status: a.enum(["Active", "Inactive"]),
  }).authorization(allow => [
    allow.owner()
  ]),
  Location: a
  .model({
    name: a.string(),
    address: a.string(),
    city: a.string(),
    state: a.string(),
    zip: a.string(),
    status: a.enum(["Active", "Inactive"]),
    destinationFareId: a.hasMany('Fare', 'destinationId'),
    originFareId: a.hasMany('Fare', 'originId'),
  }).authorization(allow => [
    allow.guest()
  ]),
  Fare: a
  .model({
    id: a.id(),
    timestamp: a.datetime(),
    originId: a.id(),
    origin: a.belongsTo('Location',  'originId'),
    destinationId: a.id(),
    destination: a.belongsTo('Location', 'destinationId'),
    price: a.float(),
    user: a.string(),
    status: a.enum(["Pending", "Accepted", "Completed", "Cancelled"]),
  }).authorization(allow => [
    allow.guest()
  ]),
  tokenTransaction: a
  .model({
    amount: a.string(),
    status: a.string(),
    gas: a.string(),
    gasPrice: a.string(),
    from: a.string(),
    to: a.string(),
    chainId: a.string(),
    nonce: a.string(),
    hash: a.string(),
    timestamp: a.string()
  }).authorization(allow => [
    allow.authenticated()
  ])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
