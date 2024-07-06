import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _showTables: boolean = false;

  set showTables(value: boolean) {
    this._showTables = value;
  }

  get showTables(): boolean {
    return this._showTables;
  }
}
