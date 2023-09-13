import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  // Observable<інтерфейс повернення> це ми створили радіостанцію, на яку ми роблячи десь запит будемо
  // підписуватися й отримувати прямий ефір(тобто дані)
  getAll(): Observable<IUser[]> {
    //.get<що там буде>(посилання)
    return this.httpClient.get<IUser[]>(urls.users.base);
  }

  getById(id: number): Observable<IUser> {
    //.get<що там буде>(посилання)
    return this.httpClient.get<IUser>(urls.users.byId(id));
  }
}
