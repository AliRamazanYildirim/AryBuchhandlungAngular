import { Component } from '@angular/core';
import { AryBuchService } from './dienste/ary-buch.service';
import { AryBuch } from './modelle/ary-buch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AryBuchhandlungAngular.UI';
  buecher:AryBuch[]=[];

  constructor(private aryBuchDienst:AryBuchService){}
  ngOnInit():void{
    this.aryBuchDienst.geheZurAryBücher().subscribe((resultat:AryBuch[])=>(this.buecher=resultat));
  }
}
