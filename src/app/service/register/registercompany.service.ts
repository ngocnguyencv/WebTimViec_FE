import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Account} from "../../model/Account";

@Injectable({
  providedIn: 'root'
})
export class RegistercompanyService {

  constructor(private http: HttpClient) {
  }

  register(account: any): Observable<any> {
    return this.http.post<any>("http://localhost:8080/register", account);
  }

  findAllAccount(): Observable<Account[]> {
    return this.http.get<Account[]>("http://localhost:8080/register")
  }
}
