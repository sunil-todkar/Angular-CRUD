import { AbstractControl } from "@angular/forms";
export function dobValidate(control: AbstractControl) {
  let date = new Date();
  if (!(control.value < date)) {
    return { validDOB: true };
  }
  return null;
}
