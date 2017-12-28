import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  public baseApi = 'https://cricketappapi.herokuapp.com/';


  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];


  getTournament() {
    return this.http.get(this.baseApi).map(response => response.json());
  }

  getQuotes() {
    return this.http.get(this.baseApi).map(response => response.json());
  }
  getCity() {
    return this.http.get("https://cricketappapi.herokuapp.com/city").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  getType() {
    return this.http.get("https://cricketappapi.herokuapp.com/type").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  saveTournament(tournament: any) {
    return this.http.post("https://cricketappapi.herokuapp.com/insert", tournament).map(response => response.json());

  }
  saveCity(city) {
    return this.http.post("https://cricketappapi.herokuapp.com/insert/city", { "cityname": city }).map(response => response.json());
  }

  saveQuotes(city) {
    return this.http.post("https://cricketappapi.herokuapp.com/insert/city", { "cityname": city }).map(response => response.json());
  }

  deleteQuote(id: string) {
    return this.http.put("https://cricketappapi.herokuapp.com/delete/city/" + id, null).map(response => {
      console.log(response.json());
      return response.json()
    },
      (error) => {
        debugger;
        console.log(error.json());
      });
  }
  deleteCity(id: string) {
    return this.http.put("https://cricketappapi.herokuapp.com/delete/city/" + id, null).map(response => {
      console.log(response.json());
      return response.json()
    },
      (error) => {
        debugger;
        console.log(error.json());
      });
  }
  saveType(type) {
    return this.http.post("https://cricketappapi.herokuapp.com/insert/type", { "typename": type }).map(response => response.json());
  }

  deleteType(id: string) {
    return this.http.put("https://cricketappapi.herokuapp.com/delete/type/" + id, null).map(response => {
      console.log(response.json());
      return response.json()
    },
      (error) => {
        debugger;
        console.log(error.json());
      });
  }
  deleteTournament(id) {
    debugger;
    return this.http.put("https://cricketappapi.herokuapp.com/delete/" + id, { "isActive": 1 }).map(response => response.json());
  }
  updateTournament(tournament) {
    return this.http.put("https://cricketappapi.herokuapp.com/update/" + tournament.id, tournament).map(response => response.json());
  }
}
