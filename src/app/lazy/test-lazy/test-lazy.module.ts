import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLazyComponent } from './test-lazy/test-lazy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'lazy1', component: TestLazyComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TestLazyComponent],
})
export class TestLazyModule {}
