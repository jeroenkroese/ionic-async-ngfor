import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonPopover,
	IonButton,
} from '@ionic/angular/standalone';
import { Observable, delay, of } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: true,
	imports: [
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPopover,
		IonButton,
		NgFor,
		AsyncPipe,
	],
})
export class HomePage {
	items$: Observable<string[]>;
	constructor() {
		this.items$ = of(['item1', 'item2']).pipe(delay(100));
	}
}
