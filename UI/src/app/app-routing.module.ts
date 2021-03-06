import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BabyLookComponent } from './components/baby-look/baby-look.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ProductComponent } from './components/product/product.component';
import { TShirtComponent } from './components/t-shirt/t-shirt.component';
import { MugComponent } from './components/mug/mug.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'baby-look', component: BabyLookComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'mug', component: MugComponent },
  { path: 'product', component: ProductComponent },
  { path: 't-shirt', component: TShirtComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
