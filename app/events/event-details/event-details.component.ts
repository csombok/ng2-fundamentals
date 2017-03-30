import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProjectFavoriteComponent} from "../project-favorite/project-favorite.component";
import {EventService} from "../shared/event.service";

@Component ({
    templateUrl: "app/events/event-details/event-details.component.html",
    // tslint:disable-next-line:object-literal-sort-keys
    styles: [
        ".container {padding-left: 20px, padding-right :20 px}",
        ".event-image {height: 100px}",
    ],
})

export class EventDetailsComponent implements OnInit {

    public event: any;

    constructor(private eventService: EventService,
                private route: ActivatedRoute) {
    }

    public ngOnInit() {
         // tslint:disable-next-line:no-string-literal
         this.event = this.eventService.getEvent(+this.route.snapshot.params["id"]);
    }
}
