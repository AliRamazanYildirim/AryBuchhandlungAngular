import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AryBuchDienst } from 'src/app/dienste/ary-buch.service';
import { AryBuch } from 'src/app/modelle/ary-buch';

@Component({
  selector: 'app-bearbeiten-buch',
  templateUrl: './bearbeiten-buch.component.html',
  styleUrls: ['./bearbeiten-buch.component.css']
})
export class BearbeitenBuchComponent implements OnInit {
@Input() buch?: AryBuch;
@Output() buecherAktualisiert= new EventEmitter<AryBuch[]>();

  constructor(private aryBuchDienst:AryBuchDienst) {}

  ngOnInit(): void{}
  
  erstelleBuch(buch:AryBuch){
    this.aryBuchDienst.erstelleBuch(buch).subscribe((buecher:AryBuch[])=>
    this.buecherAktualisiert.emit(buecher));
  }

  entferneBuch(buch:AryBuch){
    this.aryBuchDienst.entferneBuch(buch).subscribe((buecher:AryBuch[])=>
    this.buecherAktualisiert.emit(buecher));
  }

  aktualisiereBuch(buch:AryBuch){
    this.aryBuchDienst.aktualisiereBuch(buch).subscribe((buecher:AryBuch[])=>
    this.buecherAktualisiert.emit(buecher));
  }

}
