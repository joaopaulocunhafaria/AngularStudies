import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { Routes } from "@angular/router";
import { UserComponent } from "./users/user/user.component";    
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuardian } from "./auth-guard.service";





const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "users",canActivateChild:[AuthGuardian], component: UsersComponent, children: [
            { path: ":id/:name", component: UserComponent }]
    },
    {
        path: "servers",canActivateChild:[AuthGuardian], component: ServersComponent, children: [
            { path: ":id/edit", component: EditServerComponent },
            { path: ":id", component: ServerComponent }
        ]
    },
    { path: "not-found", component: PageNotFoundComponent },
    { path: "**", redirectTo: "/not-found", pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class appRoutingModule {

}