import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  

  constructor(private router:Router,private fb:FormBuilder) { }
  regForm = this.fb.group({
    name: [''],
    dob: [''],
    qualification: [''],
    email: [''],
    phone: [''],
    address: [''],
    fresher:[''],
    experience:this.fb.array([
      this.addExpFormGroup()
    ])
  });

  ngOnInit(): void { }
  onSubmit(){
    console.warn(this.regForm.value);
    // this.router.navigateByUrl(['/response',ss]);
  }
  addExpButtonClick():void{
    (<FormArray>this.regForm.get('experience')).push(this.addExpFormGroup());
  }
  addExpFormGroup():FormGroup{
    return this.fb.group({
      skill: [''],
      years: ['']
    });
  }

}
