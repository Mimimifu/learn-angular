import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [


  { path: 'first-component', component: AppComponent },
  { path: 'second-component', component: BlogComponent },
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
