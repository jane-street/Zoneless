import { Route } from '@angular/router';
import { Docs } from './pages/docs/docs';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'docs' },
  { path: 'docs', component: Docs },
  { path: 'docs/:section', component: Docs },
  { path: 'docs/:section/:subsection', component: Docs },
];
