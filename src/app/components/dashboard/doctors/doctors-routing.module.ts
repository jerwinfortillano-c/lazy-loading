import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors.component';

const routes: Routes = [{ path: '', component: DoctorsComponent }, 
{ path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) }, 
{ path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }, 
{ path: 'schedules', loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
