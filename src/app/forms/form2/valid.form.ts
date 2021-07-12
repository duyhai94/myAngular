import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class ValidaForm {

   
   static invalidForm(nameRe: RegExp): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
      const valid = nameRe.test(control.value);
      const _error: ValidationErrors = { password: {value: control.value} }
      return !valid ? _error : null;
      };
   }
}
