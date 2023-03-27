import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {ApplyJobService} from "../../service/applyJob/apply-job.service";
import {AccountToken} from "../../model/AccountToken";
import {ListApplyJob} from "../../model/ListApplyJob";
import {CompanyserviceService} from "../../service/companyService/companyservice.service";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";
import {FormControl, FormGroup} from "@angular/forms";
import {ApplyJob} from "../../model/ApplyJob";
// @ts-ignore
import Swal from "sweetalert2";

@Component({
  selector: 'app-confirm-company',
  templateUrl: './confirm-company.component.html',
  styleUrls: ['./confirm-company.component.css']
})
export class ConfirmCompanyComponent implements OnInit {
  account!: AccountToken;
  ListApplyJob: ListApplyJob[] = [];
  p: number = 1;
  total: number = 0;
  accountToken!: AccountToken;
  newCompany!: CompanyAndAccount;
  applyJob!: ApplyJob;
  formSearch!: FormGroup;

  ngOnInit(): void {
    this.account = this.loginService.getUserToken();
    this.confirmApplyJobOfCompany();
    this.formSearch = new FormGroup({
      search: new FormControl()
    })
  }

  constructor(private loginService: LoginService,
              private applyJobService: ApplyJobService,
              private companyService: CompanyserviceService) {
  }

  confirmApplyJobOfCompany() {
    this.account = this.loginService.getUserToken();
    this.companyService.findAllCompany(this.account.email).subscribe((data) => {
      this.newCompany = data;
      this.applyJobService.showAllApplyJobOfUserByCompany(this.newCompany.idCompany, this.p).subscribe((data) => {
        this.ListApplyJob = data;
        this.total = this.ListApplyJob.length;
      })
    })
  }

  cancelRecruitOfCompany(idApply: number) {
    this.accountToken = this.loginService.getUserToken();
    this.applyJobService.findOneApplyJobById(idApply).subscribe((data) => {
      this.applyJob = data;
      this.applyJobService.cancelRecruitOfCompany(this.applyJob).subscribe((data) => {
        this.applyJob = data;
        this.confirmApplyJobOfCompany();
      })
    })
  }

  confirmRecruitOfCompany(idApply: number) {
    this.accountToken = this.loginService.getUserToken();
    this.applyJobService.findOneApplyJobById(idApply).subscribe((data) => {
      this.applyJob = data;
      this.applyJobService.confirmRecruitOfCompany(this.applyJob).subscribe((data) => {
        this.applyJob = data;
        this.confirmApplyJobOfCompany();
      }, () => {
        this.errorNotification();
        this.confirmApplyJobOfCompany();
      })
    })
  }

  backRecruitOfCompany(idApply: number) {
    this.accountToken = this.loginService.getUserToken();
    this.applyJobService.findOneApplyJobById(idApply).subscribe((data) => {
      this.applyJob = data;
      this.applyJobService.backRecruitOfCompany(this.applyJob).subscribe((data) => {
        this.applyJob = data;
        this.confirmApplyJobOfCompany();
      })
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
  }

  searchApplyJobsWithUser() {
    let search = this.formSearch.get('search')?.value;
    this.account = this.loginService.getUserToken();
    this.companyService.findAllCompany(this.account.email).subscribe((data) => {
      this.newCompany = data;
      this.applyJobService.searchApplyJobsWithUser(search, this.newCompany.idCompany).subscribe((data) => {
        this.ListApplyJob = data;
      })
    })
  }

  errorNotification() {
    Swal.fire('Không thể tuyển vì quá số lượng!', '', 'error');
  }
}
