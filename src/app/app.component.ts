import { Component, OnInit } from '@angular/core';
import { ObjectsService } from './services/objects.service';
import { BingoService} from './services/bingo.service';

declare let alertify: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  objectsList: any[];

  title = "Etäopetusbingo";
  objectsSrc = 'data/objects.json';



  constructor(private objectsService: ObjectsService) { }

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
}
