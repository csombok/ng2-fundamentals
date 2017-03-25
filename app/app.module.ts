import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ToastrService} from "./common/toastr.service.js";
import {EventsAppComponent} from "./events-app.component.js";
import {EventDetailsComponent} from "./events/event-details/event-details.component.js";
import {EventThumbnailComponent} from "./events/event-thumbnail.component.js";
import {EventsListComponent} from "./events/events-list.component.js";
import {EventService} from "./events/shared/event.service.js";
import {NavBarComponent} from "./nav/nav-bar.component.js";
import {appRoutes} from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
     ],
    // tslint:disable-next-line:object-literal-sort-keys
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent],
})

export class AppModule {

}
