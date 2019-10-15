import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
 serverid = 10;
 //i can write with declartion too, ts stuff
 serverid_2: number = 23;
 serverStatus: string = "offline"
 getServerStatus(){
 	return this.serverStatus;
 }
}