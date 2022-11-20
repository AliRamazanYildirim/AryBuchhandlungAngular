import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { AryBuch } from '../modelle/ary-buch';

@Injectable({
  providedIn: 'root'
})
export class AryBuchDienst {
  private url="AryBuch";
  constructor(private http:HttpClient) { }
  
  public geheZurAryBücher():Observable<AryBuch[]>{
    return this.http.get<AryBuch[]>(`${environment.apiUrl}/${this.url}`);
  }

  public aktualisiereBuch(buch:AryBuch):Observable<AryBuch[]>{
    return this.http.put<AryBuch[]>(`${environment.apiUrl}/${this.url}`,buch);
  }

  public erstelleBuch(buch:AryBuch):Observable<AryBuch[]>{
    return this.http.post<AryBuch[]>(`${environment.apiUrl}/${this.url}`,buch);
  }

  public entferneBuch(buch:AryBuch):Observable<AryBuch[]>{
    return this.http.delete<AryBuch[]>(`${environment.apiUrl}/${this.url}/${buch.id}`);
  }
}
