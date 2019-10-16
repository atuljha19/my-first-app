import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  //template: `<app-server></app-server>
  //<p> more text inside </p>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',		
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created";
  constructor() { 
  // sample to how power of property binding.
  setTimeout(() => {
  	this.allowNewServer = true;
  },2000);
}
  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreationStatus = "Server was created!"
  }

}
