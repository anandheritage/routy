import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, PreferencesComponent } from './app.component';
import { environment } from './../environments/environment';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, PreferencesComponent],
  entryComponents: [PreferencesComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
