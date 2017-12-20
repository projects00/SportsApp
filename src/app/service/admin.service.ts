import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  public baseApi = 'https://floating-basin-98189.herokuapp.com/';


  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];


  getTournament() {
    return this.http.get(this.baseApi).map(response => response.json());
  }

  saveTournament(tournament: any) {
    return this.http.post("https://floating-basin-98189.herokuapp.com/insert", tournament).map(response => response.json()  );

  }
  deleteTournament(id){
    debugger;
    return this.http.put("https://floating-basin-98189.herokuapp.com/delete/"+id,{"isActive":1}).map(response => response.json()  );
  }
  updateTournament(tournament){
    return this.http.put("https://floating-basin-98189.herokuapp.com/update/"+tournament.id,tournament).map(response => response.json()  );
  }
}
