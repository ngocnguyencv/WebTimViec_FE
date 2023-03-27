import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../../model/Job";
import {Observable} from "rxjs";
import {Category} from 'src/app/model/Category';
import {Locations} from "../../model/Locations";

@Injectable({
  providedIn: 'root'
})

export class CreatejobService {

  constructor(private http: HttpClient) {
    this.findAll()
  }

  createJob(job: Job, email: string): Observable<Job> {
    return this.http.post<Job>(`http://localhost:8080/job/` + email, job)
  }

  findAll(): Observable<Job> {
    return this.http.get<any>(`http://localhost:8080/job`)
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:8080/category")
  }

  getAllLocation(): Observable<Locations[]> {
    return this.http.get<Locations[]>("http://localhost:8080/location")
  }

  findAllJobsByCompany(id: number) {
    return this.http.get<Job[]>(`http://localhost:8080/job/company/${id}`)
  }

  update(job: Job, id: number): Observable<Job> {
    return this.http.put<Job>("http://localhost:8080/job/" + id, job);
  }
}
