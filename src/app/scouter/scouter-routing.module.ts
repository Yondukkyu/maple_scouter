import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CanDeactivateGuard } from './can-deactivate.guard';
import { ScouterComponent } from './containers/scouter.component';


const routes: Routes = [
  {
    path: 'scouter',
    component:  ScouterComponent,
    //canDeactivate: [CanDeactivateGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScouterRoutingModule {}
