import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AryBuch } from '../modelle/ary-buch';

@Injectable({
  providedIn: 'root'
})
export class AryBuchService {
  private url="AryBuch";
  constructor(private http:HttpClient) { }
  
  public geheZurAryBücher():Observable<AryBuch[]>{
    return this.http.get<AryBuch[]>(`${environment.apiUrl}/${this.url}`);
  }
}
