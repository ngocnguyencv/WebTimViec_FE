import {Component, OnInit} from '@angular/core';
import {ListApplyJob} from "../../model/ListApplyJob";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountserviceService} from "../../service/accountService/accountservice.service";
import {LoginService} from "../../service/login/login.service";
import {ApplyJobService} from "../../service/applyJob/apply-job.service";
import {Account} from "../../model/Account";
import {AccountToken} from "../../model/AccountToken";

@Component({
  selector: 'app-zoom-cv',
  templateUrl: './zoom-cv.component.html',
  styleUrls: ['./zoom-cv.component.css']
})

export class ZoomCVComponent implements OnInit {
  listApplyJob!: ListApplyJob;
  idApply!: any;
  account!: Account;
  accountToken!: AccountToken;

  constructor(private Router: ActivatedRoute, private router: Router,
              private accountService: AccountserviceService, private loginService: LoginService,
              private applyJobService: ApplyJobService) {
  }

  ngOnInit(): void {
    this.idApply = this.Router.snapshot.paramMap.get("idApply");
    this.accountToken = this.loginService.getUserToken();
    this.applyJobService.showApplyJobOfUserByCompanyCV(this.idApply).subscribe((data) => {
      this.listApplyJob = data;
    })
  }
}
