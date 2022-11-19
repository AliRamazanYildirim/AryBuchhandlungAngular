import { Injectable } from '@angular/core';
import { AryBuch } from '../modelle/ary-buch';

@Injectable({
  providedIn: 'root'
})
export class AryBuchService {

  constructor() { }
  
  public geheZurAryBücher():AryBuch[]{
    let buch=new AryBuch();
    buch.id=1;
    buch.name="Aspekte Neu B1";
    buch.preis=29.99;

    return[buch];
  }
}
