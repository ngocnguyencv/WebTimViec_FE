import {Component, OnInit} from '@angular/core';
import {Account} from "../../model/Account";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {AccountserviceService} from "../../service/accountService/accountservice.service";
import {ApplyJob} from "../../model/ApplyJob";
import {ApplyJobService} from "../../service/applyJob/apply-job.service";
import {ListApplyJob} from "../../model/ListApplyJob";
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-show-cv',
  templateUrl: './show-cv.component.html',
  styleUrls: ['./show-cv.component.css']
})

export class ShowCVComponent implements OnInit {
  idApply!: any;
  account!: Account;
  formEditUser!: FormGroup;
  accountToken !: AccountToken;
  listApplyJob!: ListApplyJob;
  applyJob!: ApplyJob;

  constructor(private Router: ActivatedRoute, private router: Router,
              private accountService: AccountserviceService, private loginService: LoginService,
              private applyJobService: ApplyJobService) {
  }

  ngOnInit(): void {
    this.accountToken = this.loginService.getUserToken();
    this.idApply = this.Router.snapshot.paramMap.get("idApply");
    this.applyJobService.showApplyJobOfUserByCompanyCV(this.idApply).subscribe((data) => {
      this.listApplyJob = data;
      this.showOneUser(this.listApplyJob.email)
    })

    this.formEditUser = new FormGroup({
      email: new FormControl(),
      name: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      description: new FormControl(),
    })
  }

  showOneUser(email: string) {
    this.accountService.findUserbyemail(email).subscribe((data) => {
      this.account = data;
      this.formEditUser.get('email')?.setValue(data.email)
      this.formEditUser.get('name')?.setValue(data.name)
      this.formEditUser.get('phone')?.setValue(data.phone)
      this.formEditUser.get('address')?.setValue(data.address)
      this.formEditUser.get('description')?.setValue(data.description)
    })
  }

  cancelApplyJobOfCompany() {
    this.idApply = this.Router.snapshot.paramMap.get("idApply");
    this.accountToken = this.loginService.getUserToken();
    this.applyJobService.findOneApplyJobById(this.idApply).subscribe((data) => {
      this.applyJob = data;
      this.applyJobService.cancelApplyJobOfCompany(this.applyJob).subscribe((data) => {
        this.applyJob = data;
        this.applyJobService.showApplyJobOfUserByCompanyCV(this.idApply).subscribe((data) => {
          this.listApplyJob = data;
          this.showOneUser(this.listApplyJob.email)
          this.router.navigate(["/confirmCompany"])
        })
      })
    })
  }

  confirmApplyJobOfCompany() {
    this.idApply = this.Router.snapshot.paramMap.get("idApply");
    this.accountToken = this.loginService.getUserToken();
    this.applyJobService.findOneApplyJobById(this.idApply).subscribe((data) => {
      this.applyJob = data;
      this.applyJobService.confirmApplyJobOfCompany(this.applyJob).subscribe((data) => {
        this.applyJob = data;
        this.applyJobService.showApplyJobOfUserByCompanyCV(this.idApply).subscribe((data) => {
          this.listApplyJob = data;
          this.showOneUser(this.listApplyJob.email)
          this.router.navigate(["/confirmCompany"])
        })
      })
    })
  }
}
