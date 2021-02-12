import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeeBingoComponent} from '../tee-bingo/tee-bingo.component';
import {BingoService} from '../services/bingo.service';
import {OmabingoService} from '../services/omabingo.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-oma-bingo',
  templateUrl: './oma-bingo.component.html',
  styleUrls: ['./oma-bingo.component.css']
})
export class OmaBingoComponent implements OnInit, OnDestroy {
public bingoId: string;


messages: any[];
subscription: Subscription;



  constructor(private route: ActivatedRoute, private router: Router, private omabingoService: OmabingoService, private bingoService: BingoService) {





  }

  ngOnInit(): void {


    this.route.params.subscribe(
      (params) => {

        this.bingoId = params['id'];
      }
    );

    this.subscription = this.omabingoService.currentMessage.subscribe(message => this.messages = message)




  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.omabingoService.changeMessages();
  }




  clickSuccess($event: MouseEvent) {
    this.bingoService.clickService($event);

}

}
