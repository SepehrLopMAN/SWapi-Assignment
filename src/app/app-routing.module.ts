import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: ListItemsComponent },
  { path: 'planets', component: ListItemsComponent },
  { path: 'species', component: ListItemsComponent },
  { path: 'starships', component: ListItemsComponent },
  { path: 'vehicles', component: ListItemsComponent },
  { path: 'planets/:id', component: ItemDetailsComponent },
  { path: 'people/:id', component: ItemDetailsComponent },
  { path: 'species/:id', component: ItemDetailsComponent },
  { path: 'starships/:id', component: ItemDetailsComponent },
  { path: 'vehicles/:id', component: ItemDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
