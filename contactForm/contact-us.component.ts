import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  public fbFormData=this.fb.group({
    Fullname: ['',Validators.required],
    Email: ['',Validators.compose([Validators.required, Validators.email])], 
    Comment:['',Validators.required],
    MobileNo:['',Validators.required] })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {

                    }
  }
