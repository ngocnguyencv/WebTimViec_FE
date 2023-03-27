import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountToken} from "../../model/AccountToken";
import {Account} from "../../model/Account";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient) {
  }

  login(account: any): Observable<AccountToken> {
    return this.http.post<AccountToken>("http://localhost:8080/login", account);
  }

  findAccountByEmail(email: string): Observable<Account> {
    return this.http.get<Account>("http://localhost:8080/login/" + email);
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setUserToken(accountToken: AccountToken) {
    localStorage.setItem("accountToken", JSON.stringify(accountToken));
  }

  getUserToken(): AccountToken {
    return JSON.parse(<string>localStorage.getItem("accountToken"));
  }
}
