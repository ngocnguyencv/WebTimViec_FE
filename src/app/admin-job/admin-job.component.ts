import {Component, OnInit} from '@angular/core';
import {AccountToken} from "../model/AccountToken";
import {ListJobCompanyAccount} from "../model/ListJobCompanyAccount";
import {ShowJobService} from "../service/Service_Job/show-job.service";
import {LoginService} from "../service/login/login.service";

@Component({
  selector: 'app-admin-job',
  templateUrl: './admin-job.component.html',
  styleUrls: ['./admin-job.component.css']
})
export class AdminJobComponent implements OnInit {
  account!: AccountToken;
  ListAdminJob: ListJobCompanyAccount[] = [];

  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.account = this.loginService.getUserToken();
    this.getAdminJob();
  }

  constructor(private servicerShow_New: ShowJobService, private loginService: LoginService) {
  }

  getAdminJob() {
    this.servicerShow_New.getAdminJob(this.p).subscribe((data) => {
      this.ListAdminJob = data;
      this.total = this.ListAdminJob.length;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getAdminJob();
  }

  blockJob(id: number) {
    this.servicerShow_New.getBlogJob(id).subscribe((data) => {
      this.getAdminJob();
    })
  }
}
