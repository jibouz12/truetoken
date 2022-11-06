import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FonctionnementComponent } from './components/fonctionnement.component';

const routes: Routes = [
  { path: "", component : FonctionnementComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonctionnementRoutingModule { }