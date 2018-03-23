import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class MyServiceService {

  // ustvarimo OBSERVABLE in napunemo kaj bo v njenem streamu
  private _behSub = new BehaviorSubject(["The initial goal", "Another goal"]);
  public goal = this._behSub.asObservable();

  constructor() { }

  changeGoal(goal) {
    this._behSub.next(goal);
  }
  print():string {
    return "Ola ... string z servica";
  }
}
