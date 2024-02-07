import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];

  singInForm: FormGroup;

  forbiddenNames=["Hitler", "Stalin"];

  ngOnInit(): void {
    this.singInForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddeNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }


  onSubmit() {
    console.log(this.singInForm);
  }

  onAdHobbie() {
      const hobbie = new FormControl(null, Validators.required);
     (<FormArray>this.singInForm.get('hobbies')).push(hobbie);
  }

  getControls(){
    return (<FormArray>this.singInForm.get('hobbies')).controls;
  }

  forbiddeNames(control: FormControl):{[s:string]:boolean}{
     if (this.forbiddenNames.indexOf(control.value)!==-1) {
       return {"nameIsForbidden": true};
     }else{
      return null;
     }
  }

}
