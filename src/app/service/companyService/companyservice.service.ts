import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../../model/Company";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  constructor(private http: HttpClient) {
  }

  editCompany(company: any): Observable<Company> {
    return this.http.post<Company>("http://localhost:8080/company", company);
  }

  findAllCompany(email: string): Observable<CompanyAndAccount> {
    return this.http.get<any>("http://localhost:8080/company/showCompany/" + email);
  }

  findOneConpanyByib(idJob: number): Observable<ListJobCompanyAccount> {
    return this.http.get<ListJobCompanyAccount>(`http://localhost:8080/company/businessUserDetails/${idJob}`)
  }

  getallCompanyNoEmail(page: number): Observable<CompanyAndAccount[]> {
    return this.http.get<CompanyAndAccount[]>("http://localhost:8080/admin/ShowCompanyAdmin" + '?page=' + page)
  }

  blokCompany(id: number): Observable<void> {
    return this.http.get<void>(`http://localhost:8080/admin/blogComPany/${id}`);
  }

  searchbyCompany(name: string): Observable<CompanyAndAccount[]> {
    return this.http.get<CompanyAndAccount[]>(`http://localhost:8080/admin/searchCompany/${name}`)
  }

  getallCompanylimit3(): Observable<CompanyAndAccount[]> {
    return this.http.get<CompanyAndAccount[]>("http://localhost:8080/admin/adminCompany")
  }
}
