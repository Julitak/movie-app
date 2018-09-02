import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app/material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

// components
import * as fromComponents from './components';

// services
import * as fromServices from './services';

// guards
import * as fromGuards from './guards';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [fromGuards.MoviesGuard],
    component: fromComponents.MovieContainerComponent,
  },
  {
    path: ':movieId',
    canActivate: [fromGuards.MovieExistsGuards],
    component: fromComponents.MovieItemComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
  declarations: [ ...fromComponents.components],
  exports: [ ...fromComponents.components],
})
export class MoviesModule {}
