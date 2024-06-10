import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrimoServiceService } from './service/primo-service.service';
import { NgModel } from '@angular/forms';
import { AboutComponent } from "./about/about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, AboutComponent]
})
export class AppComponent {
  title = 'my-app';
  p : string = 'sbam';  
  valore :number = 4 ; 
  scritta_da_ricevere : string = ""; 

  constructor(private primo_servizio: PrimoServiceService)
  {
    this.p = this.primo_servizio.titolo ;
  } 

  Prendo_dati( valore : any)
  {
    console.log('prendo il dato'); 
    this.scritta_da_ricevere = valore ;
    this.p = this.scritta_da_ricevere; 

  }
 
}
