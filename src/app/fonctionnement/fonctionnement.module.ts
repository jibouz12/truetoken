import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FonctionnementComponent } from './components/fonctionnement.component';
import { FonctionnementRoutingModule } from './fonctionnement-routing.module';



@NgModule({
  declarations: [
    FonctionnementComponent,
  ],

  imports: [
    CommonModule,
    FonctionnementRoutingModule,
  ],

  exports: [
    FonctionnementComponent,
  ]
})
export class FonctionnementModule { }
