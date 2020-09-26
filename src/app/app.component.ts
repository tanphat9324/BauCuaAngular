import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BauCuaA';
  constructor(private http: HttpClient) {
  }
  list = [
    {
      name: "Anna",
      age: 26
    }, {
      name: "Leona",
      age: 31
    }
  ]
  ngOnInit() {
    this.http.post("https://baucua-cef83.firebaseio.com/posts.json",this.list).subscribe(res=>{
      console.log(res);
    })
  }
}
