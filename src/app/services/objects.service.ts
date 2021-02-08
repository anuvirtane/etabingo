import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ObjectsService {

  constructor(private http: HttpClient) { }

  getAllObjects( srcOfObjects: string): any {
    const objects = this.http.get(srcOfObjects);
    console.log(objects);
    return objects;
  }
}
