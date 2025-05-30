import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonList, IonItem, IonButton, IonMenuButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonMenuButton, IonButtons],
})
export class HomePage {
  constructor() {}
}
