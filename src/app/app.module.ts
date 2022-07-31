import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ModalModule } from "ngx-bootstrap/modal";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductlistService } from "./core/productlist.service";
import { HomeComponent } from "./home/home.component";
import { HomeSliderService } from "./core/home-slider.service";
import { ProductModule } from "./products/product.module";
import { RegisterSecondComponent } from "./register/register-second/register-second.component";
import { RegisterFirstComponent } from "./register/register-first/register-first.component";
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RegistrationService } from "./core/registration.service";
import { ConfirmComponent } from "./shared/confirm.component";
import { AlertComponent } from "./shared/alert.component";
import { SimpleModalModule } from "ngx-simple-modal";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.modules";
import { UserIdleModule } from "angular-user-idle";
import { HomeResolverGuard } from "./home/guard/home-resolver.guard";
import { AboutComponent } from "./about/about.component";
import { TermsConditionComponent } from "./terms-condition/terms-condition.component";
import { HeaderComponent } from "./core/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterSecondComponent,
    RegisterFirstComponent,
    ConfirmComponent,
    AlertComponent,
    AboutComponent,
    TermsConditionComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    ProductModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    SimpleModalModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    UserIdleModule.forRoot({ idle: 60, timeout: 60, ping: 120 })
  ],
  entryComponents: [AlertComponent, ConfirmComponent, TermsConditionComponent],
  providers: [
    ProductlistService,
    HomeSliderService,
    RegistrationService,
    HomeResolverGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
