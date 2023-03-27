import {Role} from "./Role";

export class AccountToken {
  id: number;
  email: string;
  token: string;
  role: Role;

  constructor(id: number, email: string, token: string, role: Role) {
    this.id = id;
    this.email = email;
    this.token = token;
    this.role = role;
  }
}
