import {Component} from '@angular/core';
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {ShowJobService} from "../../service/Service_Job/show-job.service";
import {ActivatedRoute} from "@angular/router";
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-info-detail-company',
  templateUrl: './info-detail-company.component.html',
  styleUrls: ['./info-detail-company.component.css']
})

export class InfoDetailCompanyComponent {
  account!: AccountToken
  JobCompanyAccount!: ListJobCompanyAccount
  ListJobnew: ListJobCompanyAccount[] = []

  id!: number;
  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe((Param) => {
      this.id = +Param["idJob"]
    })
    this.account = this.loginService.getUserToken()
    this.getOneJob(this.id)
    this.getAllJob_Latest()
  }

  constructor(public servicerShow_New: ShowJobService, private router: ActivatedRoute, private loginService: LoginService) {
  }

  getOneJob(id: number) {
    this.servicerShow_New.getOne_Job(id).subscribe((data) => {
      this.JobCompanyAccount = data;
    })
  }

  getAllJob_Latest() {
    this.servicerShow_New.getAllJob_Latest(this.p).subscribe((data) => {
      this.ListJobnew = data;
      this.total = this.ListJobnew.length;
    })
  }
}
