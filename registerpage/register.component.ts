import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms'

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //public uiInvalidCredential = false;

  constructor(
  
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
 
  ) {

  }

  public fbInput= this.fb.group({
  
  your_name:['', Validators.required],
  username: ['', Validators.required],
  email: ['', Validators.required],
  password: ['', Validators.required],
  confirm_password: ['', Validators.required],
  
  });

  public sccMsg : any = [];

  ngOnInit(): void {}

  async registerFun() {
    
    const recvInptData = this.fbInput.value;

    console.log(recvInptData);

    const url = 'http://localhost:3000/adduser';

    if(recvInptData.password === recvInptData.confirm_password) {

      const recvData = await this.http.post(url, recvInptData).toPromise();

      this.sccMsg = recvData;
  
      document.querySelector("#alertId").innerHTML = this.sccMsg.message;
  
      console.log(this.sccMsg.message);

    }
    else {

      const errMsg = {message : 'Both the passwords should be same'};

      document.querySelector("#alertId").innerHTML = errMsg.message;
    }

  }

}

}
