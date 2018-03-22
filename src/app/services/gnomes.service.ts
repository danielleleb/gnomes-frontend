import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GnomesService {

  private API_URL =  'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getAllGnomes() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}`, options)
    .toPromise();
  }



}
