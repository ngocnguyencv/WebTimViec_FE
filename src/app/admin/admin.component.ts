import {Component, OnInit} from '@angular/core';
import {CompanyAndAccount} from "../model/CompanyAndAccount";
import {CompanyserviceService} from "../service/companyService/companyservice.service";
import {ListJobCompanyAccount} from "../model/ListJobCompanyAccount";
import {ShowJobService} from "../service/Service_Job/show-job.service";
import {Account} from "../model/Account";
import {AccountserviceService} from "../service/accountService/accountservice.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  ListCompany: CompanyAndAccount[] = []
  ListAdminJob: ListJobCompanyAccount[] = [];
  ListAccount: Account[] = []

  ngOnInit(): void {

  }

  constructor(public CompanyserviceService: CompanyserviceService, private servicerShow_New: ShowJobService, public AccountService: AccountserviceService) {
  }
}
