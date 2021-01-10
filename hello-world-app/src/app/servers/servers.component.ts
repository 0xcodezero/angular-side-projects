import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serversList: Array<ServerComponent>;
  isEnabled: boolean = false;
  newToAddServerName : string = "";
  constructor() { }

  ngOnInit(): void {
    this.serversList = new Array();
    setTimeout(() => {
      this.isEnabled = true;
    }, 2000);

    this.serversList.push(new ServerComponent("Ahmed"));
    this.serversList.push(new ServerComponent("Zizo"));
    this.serversList.push(new ServerComponent("Ghalab"));
    this.serversList.push(new ServerComponent("DOOD"));
  }

  onAddingServerAction(event:Event) {
    if (this.newToAddServerName === ""){
      alert("Server Name Can't be Empty!");
      return;
    }
    this.serversList.push(new ServerComponent(this.newToAddServerName));
    this.newToAddServerName = "";
  }

}
