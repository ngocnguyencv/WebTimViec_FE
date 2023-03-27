import {Job} from "./Job";
import {Account} from "./Account";

export class ApplyJob {
  id: number;
  status: number;
  message: string;
  cv: string;
  count: number;
  job: Job;
  account: Account;

  constructor(id: number, status: number, message: string, cv: string, count: number, job: Job, account: Account) {
    this.id = id;
    this.status = status;
    this.message = message;
    this.cv = cv;
    this.count = count;
    this.job = job;
    this.account = account;
  }
}
