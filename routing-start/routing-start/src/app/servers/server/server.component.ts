import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params["id"]);
      }
    )
  }


  // onReload() {
  //   //  this.router.navigate(["servers"], {relativeTo:this.route})
  //   this.router.navigate(["servers"])
  // }

  onEdit(){
    this.router.navigate([ "edit"],{relativeTo:this.route, queryParamsHandling:'preserve'} )   
  }
}
  