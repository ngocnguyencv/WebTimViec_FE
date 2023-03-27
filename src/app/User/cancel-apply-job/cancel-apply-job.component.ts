import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {ApplyJobService} from "../../service/applyJob/apply-job.service";
import {AccountToken} from "../../model/AccountToken";

@Component({
  selector: 'app-cancel-apply-job',
  templateUrl: './cancel-apply-job.component.html',
  styleUrls: ['./cancel-apply-job.component.css']
})

export class CancelApplyJobComponent implements OnInit {
  idApply!: any;
  accountToken!: AccountToken;
  applyJob!: any;

  constructor(private loginService: LoginService,
              private applyJobService: ApplyJobService) {
  }

  ngOnInit() {
  }
}
