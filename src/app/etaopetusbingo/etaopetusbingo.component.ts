import { Component, OnInit } from '@angular/core';
import {ObjectsService} from '../services/objects.service';
import {BingoService} from '../services/bingo.service';

@Component({
  selector: 'app-etaopetusbingo',
  templateUrl: './etaopetusbingo.component.html',
  styleUrls: ['./etaopetusbingo.component.css']
})
export class EtaopetusbingoComponent implements OnInit {


  objectsSrc= 'data/objects.json';
  objectsList: any[];

 constructor(private objectsService: ObjectsService, private bingoService: BingoService) { }


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

clickSuccess($event: MouseEvent) {
  this.bingoService.clickService($event);

}

}
