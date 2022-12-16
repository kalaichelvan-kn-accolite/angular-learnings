import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TestComponent } from './test/test.component';
import { TestGuard } from './services/test.guard';

const appRoutes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    canActivate: [TestGuard],
    canDeactivate: [TestGuard],
  },
  { path: 'second', component: SecondComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazy/test-lazy/test-lazy.module').then((m) => m.TestLazyModule),
  },
  { path: 'test', component: TestComponent, outlet: 'outlet1' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, FirstComponent, SecondComponent, TestComponent],
  providers: [HttpClient, ApiService, TestGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
