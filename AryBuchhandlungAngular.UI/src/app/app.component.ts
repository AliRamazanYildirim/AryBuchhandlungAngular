import { Component } from '@angular/core';
import { AryBuchDienst } from './dienste/ary-buch.service';
import { AryBuch } from './modelle/ary-buch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AryBuchhandlungAngular.UI';
  buecher:AryBuch[]=[];
  buchZumAktualisieren?:AryBuch;

  constructor(private aryBuchDienst:AryBuchDienst){}

  ngOnInit():void{
    this.aryBuchDienst.geheZurAryBücher().subscribe((resultat:AryBuch[])=>(this.buecher=resultat));
  }

  aktualisiereBuchListe(buecher:AryBuch[]){
    this.buecher=buecher;
  }

  initNeuesBuch(){
    this.buchZumAktualisieren=new AryBuch();
  }
  
  aktualisiereBuch(buch: AryBuch){
    this.buchZumAktualisieren=buch;
  }
}
