import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(){
    console.log("Submited");
    
  }

}
