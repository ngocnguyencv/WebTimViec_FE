import {Component, OnInit} from '@angular/core';
import {ImageSnippet} from "../../model/ImageSnippet";
import {ImageserviceService} from "../../service/image/imageservice.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login/login.service";
import {AccountToken} from "../../model/AccountToken";
import {ApplyJobService} from "../../service/applyJob/apply-job.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})

export class ApplyJobComponent implements OnInit {
  accountToken!: AccountToken;
  email!: string;
  idJob!: any;
  applyJob!: any;
  defaultValue!: any;

  constructor(private imageService: ImageserviceService,
              private loginService: LoginService,
              private applyJobService: ApplyJobService,
              private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.formUpCV.controls.cv.patchValue(this.defaultValue);
  }

  formUpCV = new FormGroup({
    cv: new FormControl(),
  })

  applyJobUser() {
    this.idJob = this.route.snapshot.paramMap.get("idJob");
    this.accountToken = this.loginService.getUserToken();
    this.email = this.accountToken.email;
    this.applyJobService.applyJobUser(this.formUpCV.value, this.accountToken.email, this.idJob).subscribe(data => {
      this.applyJob = data;
      this.router.navigate(["/home"])
    }, () => {
      this.errorNotification()
      this.router.navigate(["/home"])
    })
  }

//Upload image
  selectedFile!: ImageSnippet;

  onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImageForApplyCV(this.selectedFile.file).subscribe(
        (res) => {
          this.formUpCV.value.cv = res.url;
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });
    reader.readAsDataURL(file);
  }

  errorNotification() {
    Swal.fire('Không thành công!', 'Bạn đã nộp đơn công ty này!', 'error');
  }
}
