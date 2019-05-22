import {Component}  from '@angular/core';

@Component({
        //selector:'[app-server]'  ,    //used  app server as a attribute
        //  selector:'.app-server',     //used app server as a class
           selector : 'app-server',    //used as a component app-server
    templateUrl: './server.component.html'

})

export class ServerComponent {
     ServerId : Number =3;
     ServerStatus: String ="offline";
   allowedBtn :Boolean =false;
     constructor(){
         setTimeout(()=>{
            this.allowedBtn =true;
         },3000)
     }


}