import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
   serverId:number =3;
   serverStatus:string = 'offline';
   allowedDisabled: boolean = true;
    serverStatusStart :string  = 'server not created';
    serverName :string = '';
  constructor() { 
    setTimeout(()=>{
      this.allowedDisabled=false
    },3000);
  }
  onServerStart(){
    this.serverStatusStart = 'server was created !!!';
  }
  onServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }


} 
