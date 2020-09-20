import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { OopsComponent } from './oops/oops.component';
import { TumbleComponent } from './tumble/tumble.component';


export const appRoutes: Route[] = [
    {path: '', component: AppComponent},
    {path: 'tumble', component: TumbleComponent},
    { path: '**', component: OopsComponent }
]