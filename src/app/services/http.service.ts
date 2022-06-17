import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
   }

   getCandidates() {
    this.httpClient.get('http://localhost:3000/candidates').subscribe((candidates) => {
      console.log(candidates)
    })
   }
}
