import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.css']
})
export class ResetPWComponent implements OnInit {
  
  public fbInput = this.fb.group({
    New_PW: ['', Validators.required],
    Confirm_PW: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

}
