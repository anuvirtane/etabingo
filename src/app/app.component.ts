import { Component, OnInit } from '@angular/core';
import { ObjectsService } from './services/objects.service';

declare let alertify: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  objectsList: any[];
  clicks: number = 0;
  title = "Etäopetusbingo";
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


  constructor(private objectsService: ObjectsService) { }

  ngOnInit() {
    this.objectsService.getAllObjects().subscribe(
      data => {
      this.objectsList = data;
      console.log(data);
      }, error => {
      console.log('httperror:');
      console.log(error);
      }
    );
  }



  clickSuccess($event: MouseEvent){

    //painettu nappi pois pelistä
    ($event.target as HTMLButtonElement).disabled = true;

    //tallennetaan napin id checkListille bingon tarkistusta varten
    let idNum: number= +($event.target as HTMLButtonElement).id;
    this.checkList.push(idNum);

    //klikkilista napinpainallusviestejä varten
    this.clicks++;
    if (this.clicks == 1) {alertify.success('Ensimmäinen osuma! Olet etäopetuksessa');}
    else if (this.clicks == 2 ){
      alertify.success('Toinen osuma! Jatka keskittymistä!');
    } else {
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

  checkCheckList() {

    if( (this.compareLists(this.ylarivi)) ||
     (this.compareLists(this.tokarivi)) ||
     (this.compareLists(this.kolmasrivi)) ||
     (this.compareLists(this.neljasrivi)) ||
     (this.compareLists(this.viidesrivi)) ||
     (this.compareLists(this.ekapysty)) ||
     (this.compareLists(this.tokapysty)) ||
     (this.compareLists(this.kolmaspysty)) ||
     (this.compareLists(this.neljaspysty)) ||
     (this.compareLists(this.viidespysty)) ||
     (this.compareLists(this.vasylos)) ||
     (this.compareLists(this.oikalas))

    )


    {
      alertify.alert().setting({
        'closable':true,
        'resizable': true,
        'transition': 'flipx',
        'message': 'BINGO!'
      }).show();
    }
  }

  compareLists(list: number[]): boolean {
    if (list.every( value => this.checkList.includes(value) )) { return true;}
    else {return false;}
  }

}


