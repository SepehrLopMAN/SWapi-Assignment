import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private httpReq: HttpClient) {}
  public getData<T>(
    specifiedPath: string,
    url: string = 'https://swapi.dev/api'
  ): Observable<T> {
    return this.httpReq.get(url + specifiedPath) as Observable<T>;
  }
}
