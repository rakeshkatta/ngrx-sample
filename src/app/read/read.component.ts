import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import {sample} from './../../models/sample-model';
import { AppState } from "./../app.state";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  samples: Observable<sample[]>

  constructor(private store:Store<AppState>) { 
    this.samples = store.select('sample')
  }

  ngOnInit() {
  }

}
