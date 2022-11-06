import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Web3Component } from './components/web3.component';



@NgModule({
  declarations: [
    Web3Component,
  ],

  imports: [
    CommonModule
  ],

  exports: [
    Web3Component,
  ]
})
export class Web3Module { }
