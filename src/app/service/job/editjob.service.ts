import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../../model/Job";
import {Observable} from "rxjs";
import {Category} from "../../model/Category";
import {Locations} from "../../model/Locations";

@Injectable({
  providedIn: 'root'
})

export class EditjobService {
  constructor(private http: HttpClient) {
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<any>(`http://localhost:8080/job`, job)
  }

  findById(id: number): Observable<Job> {
    return this.http.get<any>(`http://localhost:8080/job/` + id)
  }

  editJob(job: Job): Observable<Job> {
    return this.http.post<Job>("http://localhost:8080/job", job)
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
}
