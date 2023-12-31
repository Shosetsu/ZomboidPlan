import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './page/guide/guide.component';
import { ScoreComponent } from './page/score/score.component';
import { SelectionComponent } from './page/selection/selection.component';

const routes: Routes = [
  { path: 'guide', component: GuideComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'score', component: ScoreComponent },
  { path: '', redirectTo: 'guide', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
