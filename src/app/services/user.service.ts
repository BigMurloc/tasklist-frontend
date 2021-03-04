import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user!: User;

  constructor(private http: HttpClient) {
  }


  save(userForm: NgForm): Observable<User> {
    this.user = {
      username: userForm.value.username,
      password: userForm.value.password
    };
    const headers = {'Content-Type': 'application/json'};
    return this.http.post<User>(`http://localhost:8080/api/register`, this.user, {headers});
  }
}
