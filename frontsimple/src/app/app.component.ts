import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontsimple';

  constructor() {

  }

  ngOnInit(): void {
    this.websockets();
  }

  websockets() {
    const echo = new Echo({
      broadcaster: 'pusher',
      cluster: 'mt1',
      key: 'apprc_key',
      wsHost: window.location.hostname,
      wsPort: 6001,
      disableStats: true,
      enabledTransports:['ws']
    });

    echo.channel('chennel-message').listen('MessageEvent', (resp:any) =>{
      console.log(resp);
    });
  }
}
