import {Component, OnInit} from '@angular/core';
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {ShowjobService} from "../../service/job/showjob.service";
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login/login.service";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";
import {CompanyserviceService} from "../../service/companyService/companyservice.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-homecompany',
  templateUrl: './homecompany.component.html',
  styleUrls: ['./homecompany.component.css']
})
export class HomecompanyComponent implements OnInit {

  listJob: ListJobCompanyAccount[] = [];
  company !: CompanyAndAccount;
  accountToken !: AccountToken;
  p: number = 1;
  total: number = 0;
  formSearchJobByTitle!: FormGroup;

  ngOnInit(): void {
    this.informationCompany();
    this.findAllJob();

    this.formSearchJobByTitle = new FormGroup({
      title: new FormControl()
    })
  }

  constructor(private showJobService: ShowjobService, private loginService: LoginService,
              private companyService: CompanyserviceService, private route: ActivatedRoute) {
  }

  findAllJob() {
    this.accountToken = this.loginService.getUserToken();
    this.showJobService.findAllJobInCompany(this.accountToken.email, this.p).subscribe(data => {
      this.listJob = data;
      this.total = this.listJob.length;
    }, error => {
      this.errorNotification();
    })
  }

  informationCompany() {
    this.accountToken = this.loginService.getUserToken();
    this.companyService.findAllCompany(this.accountToken.email).subscribe(data => {
      this.company = data;
    }, error => {
      this.errorNotification();
    })
  }

  blockJobByEmail(id: number) {
    this.showJobService.blockJobByCompany(id).subscribe((data) => {

      this.findAllJob();
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.findAllJob();
  }

  searchJobByTitleOfCompany() {
    let title = this.formSearchJobByTitle.get('title')?.value;
    console.log(title)
    this.accountToken = this.loginService.getUserToken();
    console.log(this.accountToken.email)
    this.showJobService.searchJobByTitleAndEmailOfCompany(this.accountToken.email, title).subscribe(data => {
      this.listJob = data;
      console.log(data)
      console.log(this.listJob)
    }, error => {
      this.errorNotification();
    })
  }

  errorNotification() {
    Swal.fire('Lỗi!', '', 'error');
  }
}
