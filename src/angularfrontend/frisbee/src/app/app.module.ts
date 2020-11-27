import { AccountService } from './services/account.service';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddBookComponent } from './add-book/add-book.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookadminComponent } from './bookadmin/bookadmin.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AddbookformComponent } from './addbookform/addbookform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditbookformComponent } from './editbookform/editbookform.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainpagecategoryComponent } from './mainpagecategory/mainpagecategory.component';
import { MainpagefilteredComponent } from './mainpagefiltered/mainpagefiltered.component';
import { MyorderComponent } from './myorder/myorder.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PaymentInfoEditComponent } from './payment-info-edit/payment-info-edit.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SidebarComponent,
    AddBookComponent,
    NavBarComponent,
    BookadminComponent,
    AdminOrderComponent,
    AddbookformComponent,
    EditbookformComponent,
    SinglebookComponent,
    MainpageComponent,
    ShoppingcartComponent,
    InvoiceComponent,
    MainpagecategoryComponent,
    MainpagefilteredComponent,
    MyorderComponent,
    LoginRegisterComponent,
    EdituserComponent,
    UserprofileComponent,
    PaymentInfoComponent,
    PaymentInfoEditComponent,
    AdminprofileComponent,
    AdminReportsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatRadioModule,
    MatDialogModule,
    FlexLayoutModule

    
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
