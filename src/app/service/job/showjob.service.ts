import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {HttpClient} from "@angular/common/http";
import {Job} from "../../model/Job";
import {Category} from "../../model/Category";
import {Locations} from "../../model/Locations";

@Injectable({
  providedIn: 'root'
})
export class ShowjobService {

  constructor(private http: HttpClient) {
  }

  findAllJobInCompany(email: string, page: number): Observable<ListJobCompanyAccount[]> {
    return this.http.get<any>(`http://localhost:8080/job/showJob/` + email + "?page=" + page);
  }

  blockJobByCompany(id: number): Observable<Job> {
    return this.http.get<Job>(`http://localhost:8080/job/block/` + id);
  }

  searchJobByTitleAndEmailOfCompany(email: string, title: string): Observable<ListJobCompanyAccount[]> {
    return this.http.get<ListJobCompanyAccount[]>(`http://localhost:8080/company/searchJobByTitleAndEmailOfCompany?email=` + email + "&title=" + title);
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:8080/job/category")
  }

  getAllLocation(): Observable<Locations[]> {
    return this.http.get<Locations[]>("http://localhost:8080/job/location")
  }
}
