import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="demo-sidenav-area">
    <mat-sidenav-container>
      <mat-sidenav-content>
        <mat-toolbar>
          <span class="back" [routerLink]="'/'">Movie App</span>
        </mat-toolbar>
        <div class="demo-content">
          <mat-divider></mat-divider>
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>`,
})
export class AppComponent {}
