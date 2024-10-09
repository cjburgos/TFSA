import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

export async function createTransaction(tx: {}) {
  return await client.models.tokenTransaction.create(tx);
}

export async function listTransactions(tx: {}) {
    return await client.models.tokenTransaction.list(tx);
}
  