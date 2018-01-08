import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AdminService {
 public SportsArena:any=[];
 public selectedCityId:Number;
  public selectedCityName:String;
public selectedSportsName:String;
public selectedSportsId:Number;
  constructor(private http: Http) { 
    
  }

  public baseApi = 'http://ec2-52-91-21-206.compute-1.amazonaws.com:5000/';
 
  

  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];


  getTournament() {
    return this.http.get(this.baseApi).map(response => response.json());
  }
  getBanner() {
    return this.http.get(this.baseApi+"get/banner").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getQuotes() {
    return this.http.get(this.baseApi+"get/quotes").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getCity() {
    return this.http.get(this.baseApi+"city").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  getLatestQuotes() {
    debugger;
    return this.http.get(this.baseApi+"get/latest/quote").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  getActiveBanner() {
    return this.http.get(this.baseApi+"get/banneractive").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getType() {
    return this.http.get(this.baseApi+"type").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }



  getImage(id) {
    return this.http.get(this.baseApi+"get/img/" + id, { responseType: ResponseContentType.Blob })
      .map((res: Response) => res.blob());

  }
  saveTournament(tournament: any) {
    return this.http.post(this.baseApi+"insert", tournament).map(response => response.json());

  }
  saveCity(city) {
    return this.http.post(this.baseApi+"insert/city", { "cityname": city }).map(response => response.json());
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
    return this.http.post(this.baseApi+"post/img", body, options).map(response => response.json());
  }

  saveBanner(banner) {
    return this.http.post(this.baseApi+"post/banner", banner).map(response => response.json());
  }

  saveQuotes(quote) {
    {debugger}
    return this.http.post(this.baseApi+"post/quotes", {   "quote":quote.QUOTE,
    "author":quote.author 
} ).map(response => response.json());
  }


  deleteBanner(id) {
    debugger;
    return this.http.put(this.baseApi+"delete/banner/" + id, null).map(response => {
      console.log(response.json());
      return response.json()
    },
      (error) => {
        debugger;
        console.log(error.json());
      });
  }
  deleteCity(id: string) {
    return this.http.put(this.baseApi+"delete/city/" + id, null).map(response => {
      console.log(response.json());
      return response.json()
    },
      (error) => {
        debugger;
        console.log(error.json());
      });
  }
  saveType(type) {
    return this.http.post(this.baseApi+"insert/type", { "typename": type }).map(response => response.json());
  }

  getArena()
  {
    this.SportsArena=[{id:1,name:"Table Tennis",imgurl:["../assets/images/ground-01.jpg"]},{id:2,name:"test",imgurl:["../assets/images/ground-02.jpg"]}];
    return this.SportsArena;
  }

  deleteType(id: string) {
    return this.http.put(this.baseApi+"delete/type/" + id, null).map(response => {
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
    return this.http.put(this.baseApi+"delete/quote/" + id, { "isActive": 1 }).map(response => response.json());
  }
  deleteTournament(id) {
    debugger;
    return this.http.put(this.baseApi+"delete/" + id, { "isActive": 1 }).map(response => response.json());
  }
  updateTournament(tournament) {
    return this.http.put(this.baseApi+"update/" + tournament.id, tournament).map(response => response.json());
  }
  updateBanner(banner) {
    return this.http.put(this.baseApi+"update/banner/" + banner.id, banner).map(response => response.json());
  }
  updateQuotes(quote) {
    return this.http.put(this.baseApi+"update/quote/" + quote.id, {   "quote":quote.QUOTE,
    "author":quote.author 
}).map(response => response.json());
  }
}
