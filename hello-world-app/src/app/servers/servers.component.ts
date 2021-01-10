import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serversList: Array<ServerComponent>;
  newToAddServerName : string = "";
  constructor() { }

  ngOnInit(): void {
    this.serversList = new Array();

    this.serversList.push(new ServerComponent("Ahmed"));
    this.serversList.push(new ServerComponent("Zizo"));
    this.serversList.push(new ServerComponent("Ghalab"));
    this.serversList.push(new ServerComponent("DOOD"));
  }

  onAddingServerAction(event:Event) {
    this.serversList.push(new ServerComponent(this.newToAddServerName));
    this.newToAddServerName = "";
  }

}
