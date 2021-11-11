import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableViewComponent } from './table-view/table-view.component';
import { ViewComponentComponent } from './view-component/view-component.component';

const routes: Routes = [
  {path:'',  component: TableViewComponent},
  {path:'view', component: ViewComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
