import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { BudgetComponent } from './components/budget/budget.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { MugComponent } from './components/mug/mug.component';
import { TShirtComponent } from './components/t-shirt/t-shirt.component';
import { BabyLookComponent } from './components/baby-look/baby-look.component';
import { BabyLookViewComponent } from './components/baby-look/baby-look-view/baby-look-view.component';
import { TShirtViewComponent } from './components/t-shirt/t-shirt-view/t-shirt-view.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    BudgetComponent,
    LoginComponent,
    CartComponent,
    ProductComponent,
    MugComponent,
    TShirtComponent,
    BabyLookComponent,
    BabyLookViewComponent,
    TShirtViewComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }