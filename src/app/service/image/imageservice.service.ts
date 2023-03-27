import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  constructor(private http: HttpClient) {
  }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('fileImg', image);
    return this.http.post<any>('http://localhost:8080/company/upImg', formData)
  }

  uploadImageforUser(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('fileImg', image);
    return this.http.post<any>('http://localhost:8080/account/upImg', formData)
  }

  uploadImageForApplyCV(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('fileImg', image);
    return this.http.post<any>('http://localhost:8080/applyJob/upImg', formData)
  }
}
