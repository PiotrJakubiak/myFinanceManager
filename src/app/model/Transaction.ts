import {TransactionKind} from './TransactionKind';
export class Transaction {
  id: number;
  name: string;
  date: string;
  type: string;
  kind: string;
  amount: string;
  transactionKind: TransactionKind;

  public Transaction() {

  }
}
