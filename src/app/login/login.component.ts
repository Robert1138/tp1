import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username = new FormControl('');
  password = new FormControl('');

  ngOnInit(): void {
  }
  hide = true;
  
  printValues(): void {
    console.log(this.username.value + " " + this.password.value);
  }
  
  togglePasswordVisability(): void {
    this.hide = !this.hide;
  }
  

}
