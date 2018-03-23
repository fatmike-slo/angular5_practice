import { Component, OnInit } from '@angular/core';
// animations
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

import { MyServiceService } from "./../my-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations goes here
  animations: [

    trigger("goalsAnimation", [
      transition("* => *", [
        query(":enter", style({ opacity: 0 }), { optional: true }),

        query(":enter", stagger("300ms", [
          // preko keyframes lahko bacavamo koliko stylov cemo
          animate(".6s ease-in", keyframes([
            style({ opacity: 0, transform: "translateY(-75%)", offset: 0 }),
            style({ opacity: .5, transform: "translateY(35px)", offset: .3 }),
            style({ opacity: 1, transform: "translateY(0)", offset: 1 })
          ]))]), { optional: true }),

        query(":leave", stagger("300ms", [
          animate(".6s ease-in", keyframes([
            style({ opacity: 1, transform: "translateY(0)", offset: 0 }),
            style({ opacity: .5, transform: "translateY(35px)", offset: .3 }),
            style({ opacity: 0, transform: "translateY(-75%)", offset: 1 })
          ]))]), { optional: true })
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  test:any = 0;
  counter: number;
  btnText: string = "Add an item";
  goalText: string = "My first life goal";
  goalArray = [];

  constructor(private _myService:MyServiceService) { }

  ngOnInit() {
    this._myService.goal.subscribe((item)=> {
      this.goalArray = item;
    });
    this._myService.changeGoal(this.goalArray);
    this.counter = this.goalArray.length;
  }

  addGoal(): void {
    if (this.goalText != "") {
      this.goalArray.push(this.goalText);
      this.goalText = "";
      this._myService.changeGoal(this.goalArray);
      this.counter = this.goalArray.length;
    }
  }
  removeGoal(goal: string): void {
    this.goalArray.forEach((item, index) => {
      if (item === goal) {
        this.goalArray.splice(index, 1);
        this._myService.changeGoal(this.goalArray);
      }
    })
    this.counter = this.goalArray.length;
  }
  print(item:any): void {
    console.log(item);
  }
}
