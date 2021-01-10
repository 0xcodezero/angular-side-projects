import { Component, OnInit, Inject } from "@angular/core";

@Component({
    selector: "server-component",
    templateUrl: './server.component.html',
})

export class ServerComponent implements OnInit{
    serverName : string;

    constructor(@Inject(String) sName: string){
        this.serverName = sName;
    }

    ngOnInit(): void {
        this.serverName = "hamala";
    }
}