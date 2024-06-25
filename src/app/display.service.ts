import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  isMenuOpen : boolean = false;

  private _showH2Only = new BehaviorSubject<boolean>(false);
  showH2Only$ = this._showH2Only.asObservable();

  toggleContent() {
    this._showH2Only.next(!this._showH2Only.getValue());
    this.toggleMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen   
  }
}