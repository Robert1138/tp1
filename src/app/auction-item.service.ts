import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Item } from './item'

@Injectable({
  providedIn: 'root'
})
export class AuctionItemService {
  private itemUrl = "http://localhost:8080/items/";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http: HttpClient) { }

  getItem(itemID: string): Observable<Item> { 
    
    return this.http.get<Item>(this.itemUrl + itemID, this.httpOptions)
    .pipe(
      catchError(err => {
        throw 'error getting item details: ' + err
      })
    );
  }
}
