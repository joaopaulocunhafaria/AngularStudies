import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  @ViewChild("form") singUpForm : NgForm

  // onSubmit(reference:HTMLFormElement){
  //   console.log(reference);
  // }

  onSubmit(){
    console.log(this.singUpForm);
    console.log(this.singUpForm.form.controls.email.valid);
    
  }



}
