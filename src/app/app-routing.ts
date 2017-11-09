import {Routes, RouterModule} from "@angular/router";
import {DocumentsComponent} from "./documents/documents.component";
import {GroupsComponent} from "./groups/groups.component";
import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact/contact.component";
import {LoadPageComponent} from "./load-page/load-page.component";
import {ManagerComponent} from "./manager/manager.component";
import {DocumentListComponent} from "./documents/document-list/document-list.component";
import {ContactListComponent} from "./contact/contact-list/contact-list.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/load-page", pathMatch: "full"},
  { path: "load-page", component: LoadPageComponent },
  { path: "manager", component: ManagerComponent, children:[
    {path: ":id", component: DocumentListComponent},
    {path: ":id", component: ContactListComponent},
  ]},
  { path: "documents", component: DocumentsComponent },
  { path: "groups", component: GroupsComponent },
  { path: "contacts", component: ContactComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
