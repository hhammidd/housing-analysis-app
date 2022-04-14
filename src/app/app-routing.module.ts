import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HouseComponent} from "./house/house.component";


const routes: Routes = [
  {path: 'house', component: HouseComponent},
  {path: '', redirectTo: '/house', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
