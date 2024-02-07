import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  @ViewChild("form") singUpForm: NgForm;

  genders = ["male", "female"]


  defaultQuestion: string = "pet";
  user = {
    name: '',
    email: '',
    secret: '',
    gender: ''
  };
  submitted = false;

  // onSubmit(reference:HTMLFormElement){
  //   console.log(reference);
  // }

  onSubmit() {
    console.log(this.singUpForm);

    this.user.name = this.singUpForm.value.userdata.username;
    this.user.email = this.singUpForm.value.userdata.email;
    this.user.secret = this.singUpForm.value.secret;
    this.user.gender = this.singUpForm.value.gender;
    this.submitted=true;

    this.singUpForm.reset()
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singUpForm.setValue({
    //   userdata:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   gender:'male'
    //  });

    this.singUpForm.form.patchValue({
      userdata: {
        username: suggestedName
      }
    })

  }

  onSubmit2(){
    
  }
  
}
