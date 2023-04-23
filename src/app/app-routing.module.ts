import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { TutorialsComponent } from './features/tutorials/tutorials.component';
import { VideosComponent } from './features/videos/videos.component';
import { AboutComponent } from './features/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'tutorials',
    component: TutorialsComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
