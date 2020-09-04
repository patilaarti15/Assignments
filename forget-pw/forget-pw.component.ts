import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.css']
})
export class ForgetPWComponent implements OnInit {
  

  public fbInput = this.fb.group({
    Email: ['', Validators.required],
  });

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    
     // async submit() {

     // Const InputData = this.fbInput.value;
     // console.log(InputData);

      //const url = 'http://localhost:3000/adduser';
      //await this.http.post(url, InputData).toPromise();
      //this.router.navigate(['login']);
  }

}
