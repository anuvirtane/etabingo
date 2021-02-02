import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ObjectsService {

  constructor(private http: HttpClient) { }

  getAllObjects(): any {
    const objects = this.http.get('data/objects.json');
    console.log(objects);
    return objects;
  }
}
