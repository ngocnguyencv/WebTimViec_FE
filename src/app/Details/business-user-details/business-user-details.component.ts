import {Component, OnInit} from '@angular/core';
import {CompanyserviceService} from "../../service/companyService/companyservice.service";
import {ActivatedRoute} from "@angular/router";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";

@Component({
  selector: 'app-business-user-details',
  templateUrl: './business-user-details.component.html',
  styleUrls: ['./business-user-details.component.css']
})

export class BusinessUserDetailsComponent implements OnInit {
  id!: number;
  JobCompany!: ListJobCompanyAccount

  ngOnInit(): void {
    this.Router.params.subscribe((param) => {
      this.id = +param["idJob"]
    })
    this.findCompanybyid(this.id);
  }

  constructor(public serviceCompany: CompanyserviceService, private Router: ActivatedRoute) {
  }

  findCompanybyid(id: number) {
    this.serviceCompany.findOneConpanyByib(id).subscribe((data) => {
      this.JobCompany = data;
    })
  }
}
