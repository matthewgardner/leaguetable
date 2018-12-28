import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LeaguePlayers } from './app.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getLeaguePlayers(): Observable<LeaguePlayers[]> {
    const apiUrl = './assets/data.json';
    return this.http.get<LeaguePlayers[]>(apiUrl);
  }
}
