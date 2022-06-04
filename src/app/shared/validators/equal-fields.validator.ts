import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function equalFieldsValidator(firstControlName: string, secondControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const firstControl = control.get(firstControlName);
    const secondControl = control.get(secondControlName);
    
    if (!firstControl || !secondControl) {
      return null;
    }

    if (secondControl.errors && !secondControl.errors['mismatch']) {
      return null;
    }

    if (firstControl.value !== secondControl.value) {
      secondControl.setErrors({ mismatch: true });
    } else {
      secondControl.setErrors(null);
    }

    return null;
  }
}