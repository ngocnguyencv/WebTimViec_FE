import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreatejobService} from "../../service/job/createjob.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Job} from "../../model/Job";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login/login.service";
import {Category} from "../../model/Category";
import {Locations} from "../../model/Locations";
// @ts-ignore
import {MessageService} from "primeng/api";
import {ShowjobService} from "../../service/job/showjob.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  [x: string]: any;

  ListCate: Category[] = [];
  ListLoca: Locations[] = [];
  user!: any;
  RegexAlphaNumeric = "^[a-zA-Z0-9]{8,16}";
  jobStatus!: Number;

  constructor(private http: HttpClient, private createJ: CreatejobService, private loginService: LoginService,
              private route: ActivatedRoute, private router: Router,
              private showJobService: ShowjobService) {
  }

  jobs: Job[] = [];

  ngOnInit() {
    this.accountToken = this.loginService.getUserToken();
    // @ts-ignore
    this.user = JSON.parse(sessionStorage.getItem("user")) as any;
    this.getListCategory();
    this.getListLocation()
  }

  accountToken !: AccountToken;
  listJob: ListJobCompanyAccount[] = [];
  company !: CompanyAndAccount;
  job: any = "";
  salaryMin!: number;
  salaryMax!: number;
  quantity!: number;
  quanti: boolean = false;
  salary: boolean = false;

  formCreate: FormGroup = new FormGroup<any>({
    id: new FormControl,
    address: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    category: new FormGroup({
      id: new FormControl("all_c")
    }, Validators.required),
    salaryMin: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1)]),
    salaryMax: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1)]),
    location: new FormGroup({
      id: new FormControl("all_l")
    }),
    expYear: new FormControl('', Validators.required),
    expiredDate: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1)]),
    quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1)]),
    gender: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    company: new FormGroup({
      id: new FormControl
    }, Validators.required)
  })

  // Show list category,location
  getListCategory() {
    this.showJobService.getAllCategory().subscribe(data => {
      this.ListCate = data;
      console.log(data)
    })
  }

  getListLocation() {
    this.showJobService.getAllLocation().subscribe(data => {
      this.ListLoca = data;
      console.log(data)
    })
  }

  validateSalary() {
    // @ts-ignore
    this.salaryMax = +document.getElementById('salaryMax').value
    if (this.salaryMax < this.salaryMin) {
      this.salary = true;
    } else {
      this.salary = false;
    }
  }

  getSalaryMin() {
    // @ts-ignore
    this.salaryMin = +document.getElementById('salaryMin').value;
  }

  createJob() {
    this.accountToken = this.loginService.getUserToken();
    this.createJ.createJob(this.formCreate.value, this.accountToken.email).subscribe(data => {
      this.job = data
      console.log(data);
      this.successNotification();
      this.router.navigate(['/homeCompany'])
    }, error => {
      this.errorNotification();
      this.router.navigate(['/homeCompany'])
    });
  }

  successNotification() {
    Swal.fire('Đăng bài thành công!', '', 'success');
  }

  errorNotification() {
    Swal.fire('Đăng bài thất bại!', '', 'error');
  }
}
