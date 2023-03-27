import {Account} from "./Account";

export class Company {
  id: number;
  shortName: string;
  code: string;
  numberOfEmployees: number;
  googleMap: string;
  website: string;
  account: Account;

  constructor(id: number, shortName: string, code: string, numberOfEmployees: number, googleMap: string, website: string, account: Account) {
    this.id = id;
    this.shortName = shortName;
    this.code = code;
    this.numberOfEmployees = numberOfEmployees;
    this.googleMap = googleMap;
    this.website = website;
    this.account = account;
  }
}
