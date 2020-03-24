import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  form= new BehaviorSubject('');
  form$ = this.form.asObservable();
  constructor() { 
  }
  setValue(formValue){
    this.form.next(formValue);
  }
  getValues(){
    return this.form.asObservable();

  }
}
