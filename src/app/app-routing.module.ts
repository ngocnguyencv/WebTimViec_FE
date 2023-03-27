import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistercompanyComponent} from "./Company/registercompany/registercompany.component";
import {LoginComponent} from "./Company/login/login.component";
import {HomecompanyComponent} from "./Company/homecompany/homecompany.component";
import {InformationcompanyComponent} from "./Company/informationcompany/informationcompany.component";
import {ShowNewComponent} from "./Show/show-new/show-new.component";
import {DetailsJobComponent} from "./Details/details-job/details-job.component";
import {GuestComponent} from "./guest/guest.component";
import {BusinessUserDetailsComponent} from "./Details/business-user-details/business-user-details.component";
import {EditUserComponent} from "./User/edit-user/edit-user.component";
import {InfoDetailCompanyComponent} from "./Company/info-detail-company/info-detail-company.component";
import {ApplyJobComponent} from "./User/apply-job/apply-job.component";
import {AdminJobComponent} from "./admin-job/admin-job.component";
import {AdminCompanyComponent} from "./admin-company/admin-company.component";
import {AdminUserComponent} from "./admin-user/admin-user.component";
import {AdminComponent} from "./admin/admin.component";
import {CreateJobComponent} from "./Company/create-job/create-job.component";
import {EditjobsComponent} from "./Company/editjobs/editjobs.component";
import {ShowApplyJobComponent} from "./User/show-apply-job/show-apply-job.component";
import {CancelApplyJobComponent} from "./User/cancel-apply-job/cancel-apply-job.component";
import {ConfirmCompanyComponent} from "./Company/confirm-company/confirm-company.component";
import {ShowCVComponent} from "./Company/show-cv/show-cv.component";
import {ZoomCVComponent} from "./Company/zoom-cv/zoom-cv.component";
import {CompanyGuard} from "./guard/company.guard";
import {UserGuard} from "./guard/user.guard";
import {AdminGuard} from "./guard/admin.guard";

const routes: Routes = [
  {path: "registerCompany", component: RegistercompanyComponent},
  {path: "login", component: LoginComponent},
  {path: "homeCompany", component: HomecompanyComponent, canActivate: [CompanyGuard]},
  {path: "informationCompany", component: InformationcompanyComponent, canActivate: [CompanyGuard]},
  {path: "home", component: ShowNewComponent, canActivate: [UserGuard]},
  {path: 'detailsJob/:idJob', component: DetailsJobComponent,},
  {path: 'guest', component: GuestComponent},
  {path: 'businessUserDetails/:idJob', component: BusinessUserDetailsComponent},
  {path: 'edit/:email', component: EditUserComponent, canActivate: [UserGuard]},
  {path: 'InfoJobDetail/:idJob', component: InfoDetailCompanyComponent},
  {path: 'applyJob/:idJob', component: ApplyJobComponent, canActivate: [UserGuard]},
  {path: 'adminJob', component: AdminJobComponent, canActivate: [AdminGuard]},
  {path: "adminCompany", component: AdminCompanyComponent, canActivate: [AdminGuard]},
  {path: "adminUser", component: AdminUserComponent, canActivate: [AdminGuard]},
  {path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'createJob', component: CreateJobComponent, canActivate: [CompanyGuard]},
  {path: 'editJob/:idJob', component: EditjobsComponent, canActivate: [CompanyGuard]},
  {path: "adminUser", component: AdminUserComponent, canActivate: [AdminGuard]},
  {path: "showApplyJob", component: ShowApplyJobComponent, canActivate: [UserGuard]},
  {path: "cancelApplyJob/:idApply", component: CancelApplyJobComponent, canActivate: [UserGuard]},
  {path: "confirmCompany", component: ConfirmCompanyComponent, canActivate: [CompanyGuard]},
  {path: "showCV/:idApply", component: ShowCVComponent, canActivate: [CompanyGuard]},
  {path: "zoomCV/:idApply", component: ZoomCVComponent, canActivate: [CompanyGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
