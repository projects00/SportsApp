import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
  getBanner() {
    return this.http.get("https://cricketappapi.herokuapp.com/get/banner").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getQuotes() {
    return this.http.get("https://cricketappapi.herokuapp.com/get/quotes").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getCity() {
    return this.http.get("https://cricketappapi.herokuapp.com/city").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  getLatestQuotes() {
    return this.http.get("https://cricketappapi.herokuapp.com/get/latest/quote").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  getActiveBanner() {
    return this.http.get("https://cricketappapi.herokuapp.com/get/banneractive").map(response => {
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



  getImage(id) {
    return this.http.get("https://cricketappapi.herokuapp.com/get/img/" + id, { responseType: ResponseContentType.Blob })
      .map((res: Response) => res.blob());

  }
  saveTournament(tournament: any) {
    return this.http.post("https://cricketappapi.herokuapp.com/insert", tournament).map(response => response.json());

  }
  saveCity(city) {
    return this.http.post("https://cricketappapi.herokuapp.com/insert/city", { "cityname": city }).map(response => response.json());
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                
  saveImage(fileToUpload: File) {
    const _formData = new FormData();
    _formData.append("Name", fileToUpload.name);
    _formData.append("img", fileToUpload);
    let body = _formData;
    let headers = new Headers();
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post("https://cricketappapi.herokuapp.com/post/img", body, options).map(response => response.json());
  }

  saveBanner(banner) {
    return this.http.post("https://cricketappapi.herokuapp.com/post/banner", banner).map(response => response.json());
  }

  saveQuotes(quote) {
    {debugger}
    return this.http.post("https://cricketappapi.herokuapp.com/post/quotes", {   "quote":quote.QUOTE,
    "author":quote.author 
} ).map(response => response.json());
  }


  deleteBanner(id) {
    debugger;
    return this.http.put("https://cricketappapi.herokuapp.com/delete/banner/" + id, null).map(response => {
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
  deleteQuotes(id) {
    debugger;
    return this.http.put("https://cricketappapi.herokuapp.com/delete/quote/" + id, { "isActive": 1 }).map(response => response.json());
  }
  deleteTournament(id) {
    debugger;
    return this.http.put("https://cricketappapi.herokuapp.com/delete/" + id, { "isActive": 1 }).map(response => response.json());
  }
  updateTournament(tournament) {
    return this.http.put("https://cricketappapi.herokuapp.com/update/" + tournament.id, tournament).map(response => response.json());
  }
  updateBanner(banner) {
    return this.http.put("https://cricketappapi.herokuapp.com/update/banner/" + banner.id, banner).map(response => response.json());
  }
  updateQuotes(quote) {
    return this.http.put("https://cricketappapi.herokuapp.com/update/quote/" + quote.id, {   "quote":quote.QUOTE,
    "author":quote.author 
}).map(response => response.json());
  }
}
