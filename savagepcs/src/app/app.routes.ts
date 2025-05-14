import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CharacterComponent } from './components/character/character.component';

export const routes: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: '', redirectTo: '/landing', pathMatch: 'full'},
    {path: 'character/:id', component: CharacterComponent}
];
