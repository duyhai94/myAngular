import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';




export function invalidPasswordValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = nameRe.test(control.value);
    const _error: ValidationErrors = { password: {value: control.value} }
    return !valid ? _error : null;
  };
}



const myPass = "12345678"
// >= 8 kt ddang bient k co dau cach ^[a-z]/${8-32}
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  myGroup = new FormGroup({
    p1: new FormControl(''),
    p2: new FormControl('', [invalidPasswordValidator(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/)]),
    p3 : new FormControl('')
  })
  data: any;
  toastOldPW: any;
  constructor() { }

  ngOnInit(): void {
  }
//check pw
  isInvalidControl(controlName: string): boolean {
    const _c = this.myGroup.get(controlName)
    return _c.invalid && (_c.dirty || _c.touched)
  }
//check old pw
  isInvalidCheckOldPW(controlName: string): boolean {
    const _c = this.myGroup.get(controlName)
    return _c.value == myPass 
  }
  onSubmit() {
    if (this.myGroup.invalid) {
      return
    }
    this.data = this.myGroup.value
    console.log(this.myGroup.value);
  }

  //call api check old pw
  callAPIcheckPW() {
    if (this.myGroup.get('p1').value == myPass) {
      this.toastOldPW="ok"
    } else {
      this.toastOldPW="not ok"
    }

    
  }
}
