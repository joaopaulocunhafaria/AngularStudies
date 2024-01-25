import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  loadEditServer(id : number){
    this.route.navigate(['servers',id,'edit'], {queryParams:{allowEdit:5}, fragment:"loading"})
  }
}
