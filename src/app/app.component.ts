  import { Component } from '@angular/core';
  import { NativeNotificationService } from 'angular-notice/lib/native-notification.service';

  @Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
  })

  export class AppComponent {
  	title = 'app';

  	constructor(private _service: NativeNotificationService) {}

	notifyme(){
	const options =  { 
	                title: 'Hola mundo',
	                body : 'Esta es una notificacion',
	                icon: '../assets/imagenes/notif.png',
	                tag: 'notice',
	                closeDelay: 2000
	            };
	this._service.notify(options);
	}

  }
