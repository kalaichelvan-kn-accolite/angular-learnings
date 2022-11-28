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
  onErrorResumeNext,
} from 'rxjs/operators';
import { ApiService } from './api.service';

const customObservable = new Observable((subscriber) => {
  subscriber.next(1234);
  subscriber.next(1235);
  subscriber.next(1236);
  setTimeout(() => {
    subscriber.next(1237);
  }, 1000);
  setTimeout(() => {
    subscriber.next(1238);
    subscriber.complete();
  }, 2000);
});

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  comments$: any;
  fetchedData: any;

  constructor(private api: ApiService) {
    // Async pipe
    this.comments$ = this.api.getComments();
  }

  ngOnInit() {
    this.fetchedData = [];
    // Subscribe
    customObservable
      .pipe(
        mergeMap((val) => {
          return this.api.getAccount(val);
        }),
        catchError((e) => {
          return this.api.getAccount(1246);
        })
      )
      .subscribe((res) => {
        console.log('response: ', res.id);
        this.fetchedData.push(res);
      });
  }
}
