import { Component, DirectiveDecorator, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(loginform : NgForm){
   console.log(loginform.value.username);
   console.log(loginform.value.password);
  }

}

