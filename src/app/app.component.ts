import { error } from '@angular/compiler/src/util';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  comments$: any;

  constructor(private api: ApiService) {
    // Async pipe
    this.comments$ = this.api.getComments();
  }

  ngOnInit() {}
}
