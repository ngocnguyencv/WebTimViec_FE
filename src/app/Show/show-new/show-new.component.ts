import {Component, OnInit} from '@angular/core';
import {ShowJobService} from "../../service/Service_Job/show-job.service";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login/login.service";
import {ListTopCompany} from "../../model/ListTopCompany";
import {Category} from "../../model/Category";
import {Locations} from "../../model/Locations";

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit {
  formsearch!: FormGroup
  account!: AccountToken;
  ListJobnew: ListJobCompanyAccount[] = [];
  ListAllJob: ListJobCompanyAccount[] = [];
  ListTopCompany: ListTopCompany[] = [];
  ListCategory: Category[] = [];
  ListLocation: Locations[] = [];
  formSearchJob!: FormGroup;
  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.getAllJob_Latest();
    this.getListLocation();
    this.getListCategory();

    this.formsearch = new FormGroup({
      short_name: new FormControl("")
    })

    this.formSearchJob = new FormGroup({
      searchByName: new FormControl(),
      searchByCategory: new FormGroup({
        idCategory: new FormControl("all_c"),
      }),
      searchByLocation: new FormGroup({
        idLocation: new FormControl("all_l")
      })
    })

    this.account = this.loginService.getUserToken();
    this.getAllJob();
    this.getTopCompany();
  }

  constructor(private servicerShow_New: ShowJobService, private loginService: LoginService) {
  }

  getAllJob_Latest() {
    this.servicerShow_New.getAllJob_Latest(this.p).subscribe((data) => {
      this.ListJobnew = data;
      this.total = this.ListJobnew.length;
    })
  }

  searchbyCompany() {
    let value = this.formsearch.get('short_name')?.value
    this.servicerShow_New.searchbyCompany(value).subscribe((data) => {
      this.ListJobnew = data;
    })
  }

  // Show list category,location
  getListCategory() {
    this.servicerShow_New.getAllCategory().subscribe(data => {
      this.ListCategory = data;
    })
  }

  getListLocation() {
    this.servicerShow_New.getAllLocation().subscribe(data => {
      this.ListLocation = data;
    })
  }

// @ts-ignore
  searchBy3Filed() {
    let searchByName = this.formSearchJob.get('searchByName')?.value;
    console.log(searchByName)
    let searchByCategory = this.formSearchJob.get("searchByCategory")?.value.idCategory;
    console.log(searchByCategory)
    let searchByLocation = this.formSearchJob.get('searchByLocation')?.value.idLocation;
    console.log(searchByLocation)

    if (searchByName != null && searchByCategory == "all_c" && searchByLocation == "all_l") {
      return this.servicerShow_New.searchJobsByTitleOrAddress(searchByName).subscribe((data) => {
        this.ListJobnew = data;
      })
    }

    if (searchByName == null && searchByCategory != "all_c" && searchByLocation == "all_l") {
      return this.servicerShow_New.searchJobsByNameCategory(searchByCategory).subscribe((data) => {
        this.ListJobnew = data;
      })
    }

    if (searchByName == null && searchByCategory == "all_c" && searchByLocation != "all_l") {
      return this.servicerShow_New.searchJobsByNameLocation(searchByLocation).subscribe((data) => {
        this.ListJobnew = data;
      })
    }

    if (searchByName != null && searchByCategory != "all_c" && searchByLocation != "all_l") {
      return this.servicerShow_New.searchJobsByTitleAddressCategoryLocation(searchByName, searchByCategory, searchByLocation).subscribe((data) => {
        this.ListJobnew = data;
      })
    }

    if (searchByName != null && searchByCategory != "all_c" && searchByLocation == "all_l") {
      return this.servicerShow_New.searchJobsByTitleAndAddressAndCategory(searchByName, searchByCategory).subscribe((data) => {
        this.ListJobnew = data;
      })
    }

    if (searchByName != null && searchByCategory == "all_c" && searchByLocation != "all_l") {
      return this.servicerShow_New.searchJobsByTitleAndAddressAndLocation(searchByName, searchByLocation).subscribe((data) => {
        this.ListJobnew = data;
      })
    }

    if (searchByName == null && searchByCategory != "all_c" && searchByLocation != "all_l") {
      return this.servicerShow_New.searchJobsByCategoryAndLocation(searchByCategory, searchByLocation).subscribe((data) => {
        this.ListJobnew = data;
      })
    }
  }

  // Sort Job by Salary
  sortJobBySalaryMin() {
    this.servicerShow_New.sortJobBySalaryMin().subscribe((data) => {
      this.ListJobnew = data;
    })
  }

  sortJobBySalary1000() {
    this.servicerShow_New.sortJobBySalary1000().subscribe((data) => {
      this.ListJobnew = data;
    })
  }

  sortJobBySalary2000() {
    this.servicerShow_New.sortJobBySalary2000().subscribe((data) => {
      this.ListJobnew = data;
    })
  }

  sortJobBySalaryMax() {
    this.servicerShow_New.sortJobBySalaryMax().subscribe((data) => {
      this.ListJobnew = data;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getAllJob_Latest();
  }

  getAllJob() {
    this.servicerShow_New.getAllJob().subscribe((data) => {
      this.ListAllJob = data;
    })
  }

  getTopCompany() {
    this.servicerShow_New.getTopCompany().subscribe((data) => {
      this.ListTopCompany = data;
    })
  }
}
