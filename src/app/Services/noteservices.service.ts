import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {

  constructor(private http : HttpClient) { }
  createnote(values)
  {
    debugger;
    return this.http.post(environment.Url+'AddNote',values);
  }
}