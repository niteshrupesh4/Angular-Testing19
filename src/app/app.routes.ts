import { Routes } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'contact-us', component: ContactUsComponent},
    { path: 'home', loadComponent: () => import('./components/comp-list/comp-list.component').then(m => m.CompListComponent) },
    { path: 'dynamic', loadComponent: () => import('./components/dynamic-form/dynamic-form.component').then(m => m.DynamicFormComponent)},
    { path: 'data-bind', loadComponent: () => import('./components/data-bindings/data-bindings.component').then(m => m.DataBindingsComponent) }
  ];
  
