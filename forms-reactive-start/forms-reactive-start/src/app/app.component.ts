import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];

  singInForm: FormGroup;

  forbiddenNames = ["Hitler", "Stalin"];

  ngOnInit(): void {
    this.singInForm = new FormGroup({
        'userData': new FormGroup({
          'username': new FormControl(null, [Validators.required, this.forbiddeNames.bind(this)]),
          'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
        }),
        'gender': new FormControl('male'),
        'hobbies': new FormArray([])
      })

      // this.singInForm.statusChanges.subscribe(
      //   (value) => {
      //     console.log(value);
      //   }
      // )

      // this.singInForm.setValue(
      //   {
      //     'userData': {
      //       'username': "Joao",
      //       'email': "test@test.com"
      //     },
      //     'gender': 'female',
      //     'hobbies': []
      //   })
      

      this.singInForm.patchValue({
        'userData': {
          'username': 'Joao'
        }
      })

  }


  onSubmit() {
    console.log(this.singInForm);
  }

  onAdHobbie() {
    const hobbie = new FormControl(null, Validators.required);
    (<FormArray>this.singInForm.get('hobbies')).push(hobbie);
  }

  getControls() {
    return (<FormArray>this.singInForm.get('hobbies')).controls;
  }

  forbiddeNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { "nameIsForbidden": true };
    } else {
      return null;
    }
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(
        () => {
          if (control.value === "test@test.com") {
            resolve({ "emailIsForbidden": true });
          }
          else {
            resolve(null);
          }
        }, 1500);
    })

    return promise;
  }
}

/*

 */