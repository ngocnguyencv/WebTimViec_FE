import {Component, OnInit} from '@angular/core';
import {ListJobCompanyAccount} from "../model/ListJobCompanyAccount";
import {ShowJobService} from "../service/Service_Job/show-job.service";
import {MessageService} from 'primeng/api';
import {Router} from "@angular/router";
import {ListTopCompany} from "../model/ListTopCompany";
import Swal from "sweetalert2";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  providers: [MessageService]

})

export class GuestComponent implements OnInit {
  ListJobnew: ListJobCompanyAccount[] = []
  ListAllJob: ListJobCompanyAccount[] = [];
  ListTopCompany: ListTopCompany[] = [];
  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.getAllJob_Latest();
    this.getAllJob();
    this.getTopCompany();
  }

  constructor(private servicerShow_New: ShowJobService, private messageService: MessageService, private router: Router) {
  }

  showError() {
    this.errorNotification();
  }

  getAllJob_Latest() {
    this.servicerShow_New.getAllJob_Latest(this.p).subscribe((data) => {
      this.ListJobnew = data;
      this.total = this.ListJobnew.length;
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

  errorNotification() {
    Swal.fire('Bạn không có quyền truy cập!', 'Vui lòng đăng nhập để thực hiện!', 'error');
  }
}
