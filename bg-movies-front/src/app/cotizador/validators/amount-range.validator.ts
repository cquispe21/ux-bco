import { AbstractControl, ValidatorFn } from '@angular/forms';

export function amountRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value < min) {
      return { 'amountTooLow': { value } };
    }
    if (value > max) {
      return { 'amountTooHigh': { value } };
    }
    return null;
  };
}
