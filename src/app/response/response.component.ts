import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
  formRes;
  constructor( private form:FormService ) { }

  ngOnInit(): void {
    this.form.form$.subscribe(
      res => {
        this.formRes = res['value'];
        console.log(this.formRes);
      }
    );
  }

}
