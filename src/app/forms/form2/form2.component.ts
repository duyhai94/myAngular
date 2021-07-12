import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidaForm } from './valid.form';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
  
  //fc nhân vào 1 kiểu regexp 

// export function invalidForm(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const valid = nameRe.test(control.value);
//     const _error: ValidationErrors = { password: {value: control.value} }
//     return !valid ? _error : null;
//   };
// }
  
  
export class Form2Component implements OnInit {

  formSing = new FormGroup({
    name: new FormControl('',[ValidaForm.invalidForm(/^(?=.*[A-Za-z])$/)]),
    gender: new FormControl(''),
    dob: new FormControl(''),
    id: new FormControl('',[ValidaForm.invalidForm(/[0-9]/)]),
    phone: new FormControl('',[ValidaForm.invalidForm(/^[0-9]/)]),
    email: new FormControl('',[ValidaForm.invalidForm(/\S+@\S+\.\S+/)]),
    adress: new FormControl(''),
    password: new FormControl('',[ValidaForm.invalidForm(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/)]),
    confirn: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }
  // kiểm tra các formcontroname theo valida => check pass word
  isInvalidControl(controlName: string): boolean {
    const _c = this.formSing.get(controlName)
    return _c.invalid && (_c.dirty || _c.touched)
  }

  onSubmit() {
    console.log(this.formSing.value);
    
  }
}
