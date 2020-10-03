import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  handleLogin(){
    return this.http.get("http://localhost:8080/api/auth/google").subscribe(res => {
      console.log(res);
    });
  }
}
