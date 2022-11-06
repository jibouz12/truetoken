import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';

@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.scss']
})
export class Web3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var web3 = new Web3('https://sepolia.infura.io/v3/c4a0763b34d9435cbab68ce7834ec98c');

    // créer nouveau wallet + clé privée
    var account = web3.eth.accounts.create();
    console.log(account)
          
    var wallet = account["address"];
    console.log('wallet: ' + wallet);

    
    var privateKey = account["privateKey"];
    console.log('private key: ' + privateKey);

  }

}
