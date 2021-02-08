import { Injectable } from '@angular/core';

declare let alertify: any;


@Injectable({
  providedIn: 'root'
})

export class BingoService {

  clicks: number = 0;

  checkList: number[] = [];

  ylarivi: number[] = [0, 1, 2, 3, 4];
  tokarivi: number[]= [5, 6, 7, 8, 9];
  kolmasrivi: number[]= [10, 11, 12, 13, 14];
  neljasrivi: number[]= [15, 16, 17, 18, 19];
  viidesrivi: number[]= [20, 21, 22, 23, 24];
  ekapysty: number[]= [0, 5, 10, 15, 20];
  tokapysty: number[]= [1, 6, 11, 16, 21];
  kolmaspysty: number[]= [2, 7, 12, 17, 22];
  neljaspysty: number[]= [3, 8, 13, 18, 23];
  viidespysty: number[]= [4, 9, 14, 19, 24];
  vasylos: number[]= [20, 16, 12, 8, 4];
  oikalas: number[]= [0, 6, 12, 18, 24];

  bingot: number = 0;
  compareList = [];
  filteredCompareList = [];

  constructor() {
    this.compareList.push(this.ylarivi);
    this.compareList.push(this.tokarivi);
    this.compareList.push(this.kolmasrivi);
    this.compareList.push(this.neljasrivi);
    this.compareList.push(this.viidesrivi);
    this.compareList.push(this.ekapysty);
    this.compareList.push(this.tokapysty);
    this.compareList.push(this.kolmaspysty);
    this.compareList.push(this.neljaspysty);
    this.compareList.push(this.viidespysty);
    this.compareList.push(this.vasylos);
    this.compareList.push(this.oikalas);
  }


  clickService($event: MouseEvent){

    //painettu nappi pois pelistä
    ($event.target as HTMLButtonElement).disabled = true;

    //tallennetaan napin id checkListille bingon tarkistusta varten
    let idNum: number= +($event.target as HTMLButtonElement).id;
    this.checkList.push(idNum);

    //klikkilista napinpainallusviestejä varten

    if (this.clicks == 0) {alertify.success('Ensimmäinen osuma! Olet etäopetuksessa');
    this.clicks++;
  }
    else if (this.clicks == 1 ){
      alertify.success('Toinen osuma! Jatka keskittymistä!');
      this.clicks++;
    } else if (this.bingot===0){
      let randomnum = Math.floor(Math.random() * 10);
      if (randomnum == 0){
        alertify.success('Dingdong');
      } else if (randomnum == 1){
        alertify.success('Hyvin menee! Saitko jo suklaata?');
      } else if (randomnum == 2){
        alertify.success('Toivottavasti ei vielä väsytä.');
      }else if (randomnum == 3){
        alertify.success('Bingo lähenee..');
      } else if (randomnum == 4){
        alertify.success('Olet melkein voittanut!');
      } else if (randomnum == 5){
        alertify.success('Pitäisikö välillä opiskellakin?');
      } else if (randomnum == 6){
        alertify.error('Painoitko varmasti oikeaa nappia?');
      } else if (randomnum == 7) {
        alertify.success('Jaksatko vielä koodata tämän bingon jälkeen?')
      } else {
        alertify.success("Hyvää työtä. Välillä pitää bingoilla, että pysyy virkeänä.")
      }
    }

    this.checkCheckList();

  }



bingoAlert(){
    //BINGO

    this.bingot++;
    if (this.bingot ===1) {

    alertify.alert().setting({
      'closable':true,
      'resizable': true,
      'transition': 'flipx',
      'message': 'BINGO!'
    }).show();
    } else if (this.bingot===12){


      alertify.alert().setting({
        'closable':true,
        'resizable': true,
        'transition': 'flipx',
        'message': 'Bingo on tapissa. Huhhuh.'
      }).show();
     } else {
      alertify.alert().setting({
        'closable':true,
        'resizable': true,
        'transition': 'flipx',
        'message': 'TAAS BINGO!'
      }).show();
     }

}

  compareLists(list: number[]): boolean {
    if (list.every( value => this.checkList.includes(value) )) { return true;}
    else {return false;}
  }


  checkCheckList(){
    this.compareList.forEach(element => {

      if(this.compareLists(element)) {
        //poistetaan compareListilta se lista, josta saatiin bingo
        this.removeListFromCompareList(element);
        this.compareList = this.filteredCompareList;


        this.bingoAlert();

    }
  });

}

removeListFromCompareList(list: number[]) {

//poista lista compareLIstilta!
 this.filteredCompareList = this.compareList.filter(function(item) {
  return item !== list
});

}
}
