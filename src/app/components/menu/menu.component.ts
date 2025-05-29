import { Component, OnInit } from '@angular/core';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [RouterLink, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
