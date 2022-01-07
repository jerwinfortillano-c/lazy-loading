import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [{ path: '', component: StudentsComponent }, 
{ path: 'records', loadChildren: () => import('./records/records.module').then(m => m.RecordsModule) },
{ path: 'schedules', loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesModule) },
{ path: 'subjects', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
