import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./../app.state";
import * as SampleActions from './../../actions/sample-actions';
import { sample } from "./../../models/sample-model";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addSample(name, url){
    this.store.dispatch(new SampleActions.AddTutorial({name:name, url:url}))
  }
  ngOnInit() {

  }

}
