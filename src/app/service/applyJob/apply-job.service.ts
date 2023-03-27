import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApplyJob} from "../../model/ApplyJob";
import {ListApplyJob} from "../../model/ListApplyJob";

@Injectable({
  providedIn: 'root'
})
export class ApplyJobService {

  constructor(private http: HttpClient) {
  }

  applyJobUser(applyJob: any, email: string, idJob: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/applyJob?email=` + email + "&idJob=" + idJob, applyJob);
  }

  cancelApplyJobUser(applyJob: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/applyJob/cancel`, applyJob);
  }

  cancelApplyJobOfCompany(applyJob: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/applyJob/cancelApplyJobOfCompany`, applyJob);
  }

  confirmApplyJobOfCompany(applyJob: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/applyJob/confirmApplyJobOfCompany`, applyJob);
  }

  cancelRecruitOfCompany(applyJob: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/applyJob/cancelRecruitOfCompany`, applyJob);
  }

  confirmRecruitOfCompany(applyJob: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/applyJob/confirmRecruitOfCompany`, applyJob);
  }

  backRecruitOfCompany(applyJob: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/applyJob/backRecruitOfCompany`, applyJob);
  }

  showAllApplyJobByUser(email: string, page: number): Observable<ListApplyJob[]> {
    return this.http.get<ListApplyJob[]>(`http://localhost:8080/applyJob/account/` + email + "?page=" + page);
  }

  findOneApplyJobById(id: number): Observable<ApplyJob> {
    return this.http.get<ApplyJob>(`http://localhost:8080/applyJob/` + id);
  }

  showApplyJobOfUserByCompanyCV(id: number): Observable<ListApplyJob> {
    return this.http.get<ListApplyJob>(`http://localhost:8080/applyJob/cv/` + id);
  }

  showAllApplyJobOfUserByCompany(idCompany: number, page: number): Observable<ListApplyJob[]> {
    return this.http.get<ListApplyJob[]>(`http://localhost:8080/applyJob/company/` + idCompany + "?page=" + page);
  }

  searchApplyJobsWithUser(key: String, idCompany: number): Observable<ListApplyJob[]> {
    return this.http.get<ListApplyJob[]>("http://localhost:8080/applyJob/company/search?key=" + key + "&idCompany=" + idCompany)
  }
}
