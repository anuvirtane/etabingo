import { Component, OnInit, OnDestroy } from '@angular/core';
import { BingoService } from '../services/bingo.service';

import {ObjectsService} from '../services/objects.service';
import {OmabingoService} from '../services/omabingo.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tee-bingo',
  templateUrl: './tee-bingo.component.html',
  styleUrls: ['./tee-bingo.component.css']
})
export class TeeBingoComponent implements OnInit {


  subscription: Subscription;


  objectsSrc= 'data/aristotle.json';
  objectsList: any[];



 constructor(private objectsService: ObjectsService, private omabingoService: OmabingoService) {


 }


  ngOnInit() {
    this.objectsService.getAllObjects(this.objectsSrc).subscribe(
      data => {
      this.objectsList = data;

      }, error => {
      console.log('httperror:');
      console.log(error);
      }
    );



    }





    changeContent($event: MouseEvent){
      console.log(($event.target as HTMLButtonElement).id);


      let sisalto = this.askForContent();


       if (this.checkContent(sisalto)) {
        ($event.target as HTMLButtonElement).innerText = sisalto;
       } else if (this.secondPrompt(sisalto)){
        ($event.target as HTMLButtonElement).innerText = sisalto;
       } else {
         alert("Tai annetaan sen vain olla ennallaan...")
       }


      }

    askForContent() {
      return prompt('Kirjoita uusi, 60 merkin pituinen sisältö.');
    }

    checkContent(content) {
      if (content.length < 61){
        return true;
    }
  }

    secondPrompt(content) {
      let pituus = content.length;
      let vahennys = pituus -60;
      content = prompt("Sorry! Kirjoitit "+ pituus + " merkkiä. Vähennä ainakin " +vahennys+" merkkiä.");
      if (this.checkContent(content)) {
        return true;
      }
    }




    publishBingo() {

     this.omabingoService.publishBingo();


    }





}




