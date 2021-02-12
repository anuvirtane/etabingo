import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OmabingoService {
   newBingo = [];

  //muuta tohon newBingo sit
  private messageSource = new BehaviorSubject(this.newBingo);
  currentMessage = this.messageSource.asObservable();





  constructor(private route: Router) { }

  changeMessages() {
    console.log(this.newBingo);
    this.messageSource.next(this.newBingo);
  }



  publishBingo() {

    for (let i = 0; i < 25; i++) {
      this.newBingo.push(document.getElementById(String(i)).innerText);
    }

    console.log(this.newBingo);
    let osoite = this.generateRandomString();

    //window.openilla ei tallentunu newBingo, vaan se loi uuden, tyhjän! Router.navigatella se muistaa newBingon

    this.route.navigate(['/oma-bingo/' + osoite]);


  }

  generateRandomString() {
    let merkit = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVxXyYzZ";
   let tulos = '';
    for (var i = 0; i < 7; i++)
    tulos += merkit.charAt(Math.floor(Math.random() * merkit.length));

  return tulos;
  }


}


