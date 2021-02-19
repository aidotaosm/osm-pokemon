import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonRenderComponent } from './components/pokemon-render/pokemon-render.component';

const routes: Routes = [
  { path: 'pokemon-render', component: PokemonRenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
