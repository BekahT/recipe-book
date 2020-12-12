import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipe-book/recipes-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipe-book', pathMatch: 'full' },
  { path: 'recipe-book', component: RecipeBookComponent, children: [
    { path: '', component: RecipeStartComponent, pathMatch: 'full' },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
    { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: 'recipe-book' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
