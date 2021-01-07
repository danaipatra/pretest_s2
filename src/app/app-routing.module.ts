import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathCalculatorComponent } from './math-calculator/math-calculator.component';
import { PublicapisComponent } from './publicapis/publicapis.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: MathCalculatorComponent
  },
  {
    path: 'publicapis',
    component: PublicapisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
