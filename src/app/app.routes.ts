import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListFriendComponent } from './components/listfriend/listfriend.component';
import { dataBComponent } from './components/data-b/data-b.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { BlogControlCenterComponent } from './components/blog-control-center/blog-control-center.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listfriend', component: ListFriendComponent },
  { path: 'data-b', component: dataBComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'BlogControlCenterComponent', component: BlogControlCenterComponent },
];
