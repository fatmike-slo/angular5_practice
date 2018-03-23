import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { MyServiceService } from "./../my-service.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  name:string;
  date:any;
  public holderArr = [];

  constructor(private _activatedRoute:ActivatedRoute,
              private _router:Router,
              private _myService:MyServiceService) { 
      this._activatedRoute.params.subscribe((response)=> {
      this.name = response.id;
      console.log(this.name);
    })
  }


  ngOnInit() {
  this._myService.goal.subscribe((item)=> {
    this.holderArr = item;
  });
  }

  sendMeHome():void {
    console.log(this._router);
    
    this._router.navigate([""]);
  }
}
