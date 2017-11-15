import {Routes, RouterModule} from "@angular/router";
import {DocumentsComponent} from "./documents/documents.component";
import {GroupsComponent} from "./groups/groups.component";
import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact/contact.component";
import {LoadPageComponent} from "./load-page/load-page.component";
import {ManagerComponent} from "./manager/manager.component";
import {DocumentListComponent} from "./documents/document-list/document-list.component";
import {ContactListComponent} from "./contact/contact-list/contact-list.component";
import {DocumentEditComponent} from "./documents/document-edit/document-edit.component";
import {DocumentDetailComponent} from "./documents/document-detail/document-detail.component";
import {ContactEditComponent} from "./contact/contact-edit/contact-edit.component";
import {ContactDetailComponent} from "./contact/contact-detail/contact-detail.component";
import {GroupItemComponent} from "./groups/group-item/group-item.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/load-page", pathMatch: "full"},
  { path: "load-page", component: LoadPageComponent },
  { path: "manager", component: ManagerComponent, children:[
    {path: ":id", component: DocumentListComponent},
    {path: ":id", component: ContactListComponent},
  ]},
  { path: "documents", component: DocumentsComponent , children:[
    {path: "new", component: DocumentEditComponent},
    {path: ":id", component: DocumentDetailComponent},
    {path: ":id/edit", component: DocumentEditComponent}
  ] },
  { path: "groups", component: GroupsComponent },
  { path: "contacts", component: ContactComponent, children: [
    {path: "new", component: ContactEditComponent},
    {path: ":id", component: GroupItemComponent}
  ] }

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
