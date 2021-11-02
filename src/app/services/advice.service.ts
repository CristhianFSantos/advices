import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advice } from '../models/advice';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  constructor(private http: HttpClient) {}

  getAdvices(): Observable<Advice> {
    return this.http.get<Advice>(environment.adviceEndPoint);
  }
}
