import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean;

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.server = this.serversService.getServer( params["id"]);
      }
    )
    this.route.queryParams.subscribe(
      (queryParms:Params)=>{
        this.allowEdit = queryParms["allowEdit"]===3?true:false;
      }
    )

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
