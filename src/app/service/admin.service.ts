import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AdminService {
  public logbtn: boolean = false;
  public SportsArena: any = [];
  public selectedCityId: Number;
  public selectedCityName: String;
  public selectedSportsName: String;
  public selectedSportsId: Number;
  public selectedArenaId: Number;
  public selectedArenaName: String;
  public booking: any;
  public bookingSlots: any;
  public isAuthenticated: boolean = false;
  constructor(private http: Http) {




  }

  init() {

  }
  public baseApi = 'http://ec2-52-91-21-206.compute-1.amazonaws.com:5000/';
  //public baseApi = 'http://localhost:5000/';




  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];

  isAuthenticatred() {
    debugger;
    //  let headers = new Headers();
    //  let options = new RequestOptions({
    //   headers: headers, withCredentials: true });
    return this.http.get(this.baseApi + "isAuthenticated", { withCredentials: true }).map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getTournament() {
    return this.http.get(this.baseApi).map(response => response.json());
  }
  getBanner() {
    return this.http.get(this.baseApi + "get/banner").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getQuotes() {
    return this.http.get(this.baseApi + "get/quotes").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getCity() {
    return this.http.get(this.baseApi + "city").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  getLatestQuotes() {
    debugger;
    return this.http.get(this.baseApi + "get/latest/quote").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  getBookingDetails(wk: String, court: String, arena: String) {
    return this.http.get(this.baseApi + "get/" + wk + "/" + court + "/" + arena).map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  logIn(userName: String, password: String) {
    var log = { "email": userName, "password": password };
    let headers = new Headers();
    let options = new RequestOptions({
      headers: headers, withCredentials: true
    });

    return this.http.post(this.baseApi + "login", log, options).map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  logOut() {

    return this.http.get(this.baseApi + "logout", { withCredentials: true }).map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getCourt(arena: String) {
    debugger;
    return this.http.get(this.baseApi + "get/court/" + arena).map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getActiveBanner() {
    return this.http.get(this.baseApi + "get/banneractive").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }
  getType() {
    return this.http.get(this.baseApi + "type").map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }



  getImage(id) {
    return this.http.get(this.baseApi + "get/img/" + id, { responseType: ResponseContentType.Blob })
      .map((res: Response) => res.blob());

  }
  saveTournament(tournament: any) {
    return this.http.post(this.baseApi + "insert", tournament).map(response => response.json());

  }
  saveCity(city) {
    return this.http.post(this.baseApi + "insert/city", { "cityname": city }).map(response => response.json());
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
    return this.http.post(this.baseApi + "post/img", body, options).map(response => response.json());
  }

  saveBanner(banner) {
    return this.http.post(this.baseApi + "post/banner", banner).map(response => response.json());
  }

  saveQuotes(quote) {
    { debugger }
    return this.http.post(this.baseApi + "post/quotes", {
      "quote": quote.QUOTE,
      "author": quote.author
    }).map(response => response.json());
  }


  deleteBanner(id) {
    debugger;
    return this.http.put(this.baseApi + "delete/banner/" + id, null).map(response => {
      console.log(response.json());
      return response.json()
    },
      (error) => {
        debugger;
        console.log(error.json());
      });
  } in
  deleteCity(id: string) {
    return this.http.put(this.baseApi + "delete/city/" + id, null).map(response => {
      console.log(response.json());
      return response.json()
    },
      (error) => {
        debugger;
        console.log(error.json());
      });
  }
  saveType(type) {
    return this.http.post(this.baseApi + "insert/type", { "typename": type }).map(response => response.json());
  }

  getArena() {
    debugger;
    return this.http.get(this.baseApi + "get/arena/" + this.selectedCityId).map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  getReward(userid) {
    debugger;
    return this.http.get(this.baseApi + "get/reward/" + userid).map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }



  getCoupon(coupon) {
    debugger;
    return this.http.get(this.baseApi + "get/coupon/" + coupon).map(response => {
      console.log(response.json());
      return response.json()
    }

    );
  }

  updateReward(userid: string, utilized: Number) {
    return this.http.put(this.baseApi + "update/reward/" + userid, { used: utilized }).map(response => {
      console.log(response.json());
      return response.json()
    },
      (error) => {
        debugger;
        console.log(error.json());
      });
  }
  deleteType(id: string) {
    return this.http.put(this.baseApi + "delete/type/" + id, null).map(response => {
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
    return this.http.put(this.baseApi + "delete/quote/" + id, { "isActive": 1 }).map(response => response.json());
  }
  deleteTournament(id) {
    debugger;
    return this.http.put(this.baseApi + "delete/" + id, { "isActive": 1 }).map(response => response.json());
  }
  updateTournament(tournament) {
    return this.http.put(this.baseApi + "update/" + tournament.id, tournament).map(response => response.json());
  }
  updateBanner(banner) {
    return this.http.put(this.baseApi + "update/banner/" + banner.id, banner).map(response => response.json());
  }
  updateQuotes(quote) {
    return this.http.put(this.baseApi + "update/quote/" + quote.id, {
      "quote": quote.QUOTE,
      "author": quote.author
    }).map(response => response.json());
  }
}
