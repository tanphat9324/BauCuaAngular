import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }
  listMoney = [2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000];
  listBauCua = [
    {
      name: "nai",
      value: 0
    },
    {
      name: "cua",
      value: 0
    }, {
      name: "bau",
      value: 0
    },
    {
      name: "ga",
      value: 0
    },
    {
      name: "tom",
      value: 0
    },
    {
      name: "ca",
      value: 0
    },
  ];

  isActive: boolean = false;
  activeChoosen: string = '';
  listChoose = new Array(3);
  totalMoney: number = 1_000_000;
  tienDat: number = 0;
  ngOnInit(): void {
  }

  handleBet(menhGia) {
    for (let i = 0; i < this.listMoney.length; i++) {
      if (menhGia === this.listMoney[i]) {
        if ((this.totalMoney - menhGia) >= 0) {
          this.tienDat += this.listMoney[i];
          this.totalMoney -= menhGia;
        }
      }
    }    
    if (this.activeChoosen&&this.totalMoney) { // name bau, cua, ca
      let valueDaChon = this.listBauCua.find(x => x.name === this.activeChoosen);
      if(!valueDaChon) return;
      this.datBauCua(valueDaChon);
    }
  }

  currentTotalMoneyChosen(){
    let total= 0;
    for (const item of this.listBauCua) {
      total+=item.value;
    }
   return total;
  }

  datBauCua(item) {
    let currentChoose = item.name;
    let currentTotalMoneyChosen = this.currentTotalMoneyChosen();
    if ((this.tienDat > 0 && this.tienDat > currentTotalMoneyChosen)||currentChoose!==this.activeChoosen) {
      this.activeChoosen = item.name;
      for (let i = 0; i < this.listBauCua.length; i++) {
        if (this.listBauCua[i].name === item.name) {
          this.isActive = true;      
          this.listBauCua[i].value += (this.tienDat-currentTotalMoneyChosen);          
        }
      }
    }

  }

  reset() {
    this.totalMoney += this.tienDat;
    this.tienDat = 0;
    for (const item of this.listBauCua) {
      item.value = 0;
    }
    this.isActive = false;
  }

  quay() {
    if (this.isActive) {
      for (let i = 0; i < this.listChoose.length; i++) {
        let random = Math.floor(Math.random() * this.listMoney.length);
        this.listChoose[i] = this.listMoney[random];
      }
      this.isActive = false;
    }else console.log('Moi chon bau Cua')
  }

}

