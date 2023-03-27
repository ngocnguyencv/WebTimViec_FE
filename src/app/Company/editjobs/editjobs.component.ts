import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Category} from "../../model/Category";
import {Locations} from "../../model/Locations";
import {AccountToken} from "../../model/AccountToken";
import {Job} from "../../model/Job";
import {HttpClient} from "@angular/common/http";
import {EditjobService} from "../../service/job/editjob.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import {ShowjobService} from "../../service/job/showjob.service";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";

@Component({
  selector: 'app-editjobs',
  templateUrl: './editjobs.component.html',
  styleUrls: ['./editjobs.component.css']
})
export class EditjobsComponent implements OnInit {
  idJob!: any;
  ComAcc!: CompanyAndAccount;
  formEditJob!: FormGroup;
  ListCate: Category[] = [];
  ListLoca: Locations[] = [];
  accountToken !: AccountToken;
  job: Job[] = [];
  RegexAlphaNumeric = "^[a-zA-Z0-9]{8,16}";
  newJob!: Job;
  jobEdit!: Job;

  constructor(private http: HttpClient, private editjobService: EditjobService, private route: ActivatedRoute,
              private loginService: LoginService, private router: Router,
              private showJobService: ShowjobService) {
  }

  ngOnInit(): void {
    this.accountToken = this.loginService.getUserToken();
    this.getListCategory();
    this.getListLocation();
    this.route.params.subscribe((param) => {
      this.idJob = param["idJob"];
    })

    if (this.idJob != null) {
      this.editjobService.findById(this.idJob).subscribe(data => {
        this.newJob = data;
        console.log(this.newJob)
        this.formEditJob = new FormGroup({
          id: new FormControl(this.newJob.id),
          title: new FormControl(this.newJob.title, Validators.required),
          quantity: new FormControl(this.newJob.quantity, Validators.required),
          genderObj: new FormGroup({
            gender: new FormControl(this.newJob.gender, Validators.required),
          }),
          description: new FormControl(this.newJob.description, Validators.required),
          expYearObj: new FormGroup({
            expYear: new FormControl(this.newJob.expYear.valueOf(), Validators.required),
          }),
          location: new FormGroup({
            id: new FormControl(this.newJob.location.id)
          }, Validators.required),
          category: new FormGroup({
            id: new FormControl(this.newJob.category.id)
          }, Validators.required),
          company: new FormGroup({
            id: new FormControl(this.newJob.company.id)
          }, Validators.required),
          salaryMin: new FormControl(this.newJob.salaryMin, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1)]),
          salaryMax: new FormControl(this.newJob.salaryMax, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1)]),
          address: new FormControl(this.newJob.address, Validators.required),
          expiredDate: new FormControl(this.newJob.expiredDate),
          code: new FormControl(this.newJob.code),
          status: new FormControl(this.newJob.status),
        })
      })
    }
  }

  editJobs() {
    this.jobEdit = new Job(
      this.formEditJob.value.id,
      this.formEditJob.value.title,
      this.formEditJob.value.code,
      +this.formEditJob.value.salaryMin,
      +this.formEditJob.value.salaryMax,
      this.formEditJob.value.address,
      this.formEditJob.value.expYearObj.expYear,
      this.formEditJob.value.expiredDate,
      this.formEditJob.value.description,
      this.formEditJob.value.quantity,
      this.formEditJob.value.genderObj.gender,
      this.formEditJob.value.status,
      this.formEditJob.value.location,
      this.formEditJob.value.company,
      this.formEditJob.value.category);
    console.log(this.jobEdit)
    this.editjobService.editJob(this.jobEdit).subscribe((data) => {
      this.router.navigate(["/homeCompany"])
    })
  }

  getListCategory() {
    this.showJobService.getAllCategory().subscribe(data => {
      this.ListCate = data;
    })
  }

  getListLocation() {
    this.showJobService.getAllLocation().subscribe(data => {
      this.ListLoca = data;
    })
  }
}
