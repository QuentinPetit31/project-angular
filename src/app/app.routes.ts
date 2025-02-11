import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListFriendComponent } from './components/listfriend/listfriend.component';
import { DataBComponent } from './components/data-b/data-b.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listfriend', component: ListFriendComponent },
  { path: 'data-b', component: DataBComponent },
];
