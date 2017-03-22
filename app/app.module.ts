import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {EventsAppComponent} from './events-app.component.js'
import {EventsListComponent} from './events/events-list.component.js'
import {EventThumbnailComponent} from './events/event-thumbnail.component.js'
import {EventDetailsComponent} from './events/event-details/event-details.component.js'
import {NavBarComponent} from './nav/nav-bar.component.js'
import {EventService} from './events/shared/event.service.js'
import {ToastrService} from './common/toastr.service.js'
import {appRoutes} from './routes'


@NgModule({
    imports: [ 
        BrowserModule,
        RouterModule.forRoot(appRoutes)
     ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})

export class AppModule{

}