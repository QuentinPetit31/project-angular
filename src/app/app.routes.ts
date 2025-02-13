import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListFriendComponent } from './components/listfriend/listfriend.component';
import { dataBComponent } from './components/data-b/data-b.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { BlogControlCenterComponent } from './components/blog-control-center/blog-control-center.component';
import { UselessFactComponent } from './components/uselessfact/uselessfact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listfriend', component: ListFriendComponent },
  { path: 'data-b', component: dataBComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'BlogControlCenterComponent', component: BlogControlCenterComponent },
  { path: 'uselessfact', component: UselessFactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userdisplay', component: UserDisplayComponent },
];
