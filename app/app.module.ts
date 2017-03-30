import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import {ToastrService} from "./common/toastr.service.js";
import {EventsAppComponent} from "./events-app.component.js";
import {CreateEventComponent} from "./events/create-event.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component.js";
import {EventThumbnailComponent} from "./events/event-thumbnail.component.js";
import {EventsListComponent} from "./events/events-list.component.js";
import {ProjectFavoriteComponent} from "./events/project-favorite/project-favorite.component";
import {EventService} from "./events/shared/event.service.js";
import {FavoriteService} from "./events/shared/favorite.service";
import {NavBarComponent} from "./nav/nav-bar.component.js";

import {appRoutes} from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        Ng2Bs3ModalModule,
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        ProjectFavoriteComponent],
    providers: [EventService, ToastrService, FavoriteService ],
    bootstrap: [EventsAppComponent],
})

export class AppModule {

}
