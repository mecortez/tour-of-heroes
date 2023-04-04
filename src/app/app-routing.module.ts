import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  /*
    path: A string that matches the URL in the browser address bar.
    component: The component that the router should create when navigating to this route.
  */
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'detail/:id', // The colon : character in the path indicates that :id is a placeholder for a specific hero id.
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  /*
    The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  */
  exports: [RouterModule],
})
export class AppRoutingModule {}
