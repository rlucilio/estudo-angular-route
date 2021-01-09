import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  { 
    path: 'first', 
    component: FirstComponent,  
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent },
    ]
  },
  { 
    path: 'second', 
    component: SecondComponent,
    canActivate: [ YourGuardGuard ]
  },
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
