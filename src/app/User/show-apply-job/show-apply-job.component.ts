import {Component, OnInit} from '@angular/core';
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login/login.service";
import {ApplyJobService} from "../../service/applyJob/apply-job.service";
import {ListApplyJob} from "../../model/ListApplyJob";

@Component({
  selector: 'app-show-apply-job',
  templateUrl: './show-apply-job.component.html',
  styleUrls: ['./show-apply-job.component.css']
})

export class ShowApplyJobComponent implements OnInit {
  account!: AccountToken;
  ListApplyJob: ListApplyJob[] = [];
  p: number = 1;
  total: number = 0;
  accountToken!: AccountToken;
  applyJob!: any;

  ngOnInit(): void {
    this.account = this.loginService.getUserToken();
    this.findApplyJobByAccount();
  }

  constructor(private loginService: LoginService,
              private applyJobService: ApplyJobService) {
  }

  findApplyJobByAccount() {
    this.account = this.loginService.getUserToken();
    this.applyJobService.showAllApplyJobByUser(this.account.email, this.p).subscribe((data) => {
      this.ListApplyJob = data;
      this.total = this.ListApplyJob.length;
    })
  }

  cancelApplyJobUser(idApply: number) {
    this.accountToken = this.loginService.getUserToken();
    this.applyJobService.findOneApplyJobById(idApply).subscribe((data) => {
      this.applyJob = data;
      this.applyJobService.cancelApplyJobUser(this.applyJob).subscribe((data) => {
        this.applyJob = data;
        this.findApplyJobByAccount();
      })
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.findApplyJobByAccount();
  }
}
