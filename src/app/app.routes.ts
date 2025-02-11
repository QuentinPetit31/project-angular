import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListFriendComponent } from './components/listfriend/listfriend.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listfriend', component: ListFriendComponent },
];
