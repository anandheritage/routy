/* global window */
import { Component, Inject, NgZone } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

declare var window, chrome;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routy';
  services = [];

  preferences = {
    service_url: null,
    namespaces: null,
    url_filters: null
  };

  animal: string;
  name: string;

  sendMessageTobackgroundScript = function(action, parameters, callback) {
    const request = {
      id: 'bgs/configurationHandler',
      action,
      parameters,
    };
    if (callback) {
      request['expectingResponse'] = true;
    }
    chrome.runtime.sendMessage(request, callback);
  };

  initData(): void {
    this.sendMessageTobackgroundScript('getServices', [], (result) => {
      this._ngZone.run( () => {
        this.services = result;
      });
    });
    this.sendMessageTobackgroundScript('getPreferences', [], (result) => {
      this._ngZone.run( () => {
        this.preferences = result;
      });
    });
  }

  constructor(public dialog: MatDialog, private http: HttpClient, private _ngZone: NgZone) {
    this.http = http;
    this._ngZone = _ngZone;

    this.initData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PreferencesComponent, {
      width: '250px',
      data: this.preferences
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.preferences = result;
        this.sendMessageTobackgroundScript('setPreferences', [this.preferences], null);
      }
    });
  }

  get_services = function () {
    const service_url = this.preferences.service_url + '/get_versions?ns=' + this.preferences.namespaces;
    this.http.get(service_url).subscribe((resp) => {
      this.services = resp.services;
      this.sendMessageTobackgroundScript('setServices', [this.services]);
    });
  };

  dataChanged(event): void {
    console.log(event);
    this.sendMessageTobackgroundScript('setServices', [this.services], null);
  }
}

@Component({
  selector: 'app-preferences-dialog',
  templateUrl: 'preferences.html',
})
export class PreferencesComponent {

  constructor(
    public dialogRef: MatDialogRef<PreferencesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
