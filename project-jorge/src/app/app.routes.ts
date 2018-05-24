import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { ManageComponent } from './manage/manage.component';

import { ModuleWithProviders } from "@angular/compiler/src/core";
const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home',component:GalleryComponent},
    {path:'manage',component:ManageComponent}
    
];
export const routes:ModuleWithProviders=RouterModule.forRoot(appRoutes);