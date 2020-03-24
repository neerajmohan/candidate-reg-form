import { Component, OnInit, Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
  @Input() form:any;
  constructor() { }

  ngOnInit(): void {
  }

}
