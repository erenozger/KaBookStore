import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { UserguardService } from './services/userguard.service.spec';
import { AdminGuardService } from './services/admin-guard.service';
import { AuthguardService } from './services/authguard.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MyorderComponent } from './myorder/myorder.component';
import { MainpagecategoryComponent } from './mainpagecategory/mainpagecategory.component';
import { MainpagefilteredComponent } from './mainpagefiltered/mainpagefiltered.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { BookadminComponent } from './bookadmin/bookadmin.component';
import { AddbookformComponent } from './addbookform/addbookform.component';
import { EditbookformComponent } from './editbookform/editbookform.component';


const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'addbookform',component:AddbookformComponent, canActivate:[AuthguardService,AdminGuardService]},
  {path:'admin-order',component:AdminOrderComponent, canActivate:[AuthguardService,AdminGuardService]},
  {path:'bookadmin',component:BookadminComponent, canActivate:[AdminGuardService]},
  {path:'addBookForm',component:AddbookformComponent, canActivate:[AuthguardService,AdminGuardService]},
  {path:'editbookform/:id',component:EditbookformComponent, canActivate:[AuthguardService,AdminGuardService]},
  {path:'singlebook/:id',component:SinglebookComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'invoice/:id/:valid/:cargo',component:InvoiceComponent, canActivate:[AuthguardService,UserguardService]},
  {path:'shoppingcart',component:ShoppingcartComponent, canActivate:[AuthguardService,UserguardService]},
  {path:'mainpagefiltered/:filter',component:MainpagefilteredComponent},
  {path:'mainpagecategory/:filter',component:MainpagecategoryComponent},
  {path:'myorder',component:MyorderComponent, canActivate:[AuthguardService,UserguardService]},
  {path:'loginOrRegister', component:LoginRegisterComponent},
  {path:'userprofile', component:UserprofileComponent, canActivate:[AuthguardService,UserguardService]},
  {path:'adminprofile',component:AdminprofileComponent, canActivate:[AuthguardService,AdminGuardService]},
  {path:'admin-reports',component:AdminReportsComponent, canActivate:[AuthguardService,AdminGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
