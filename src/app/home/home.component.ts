import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }


  private products  = []; 
  get_products(){
    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res : any[])=>{
    console.log(res);
    this.products = res;
    });
}
  private gs  = []; 
  get_https(){
    this.httpClient.get('https://fakerestapi.azurewebsites.net/api/Books').subscribe((res : any[])=>{
    console.log(res);
    this.gs = res;
    });
}
}