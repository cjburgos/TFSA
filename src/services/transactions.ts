import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

export async function createTransaction(tx: {}) {
  const response = await client.models.tokenTransaction.create(tx);
  console.log(response)
}
