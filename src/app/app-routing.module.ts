import {ContactComponent} from './components/contacts/contact/contact.component'
import {AppComponent} from './app.component'
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component'
import {BlogComponent} from './components/blog/blog.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'Contact', component: ContactComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
