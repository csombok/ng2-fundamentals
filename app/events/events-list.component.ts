import {Component, OnInit} from "@angular/core";
import {ToastrService} from "../common/toastr.service.js";
import {EventService} from "./shared/event.service.js";

@Component( {
    selector : "events-list",
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click)="handleThumbnailClicked(event.name)" [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})

export class EventsListComponent implements OnInit {
  public events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  public ngOnInit() {
       this.events = this.eventService.getEvents();
  }

  public handleThumbnailClicked(eventName) {
      this.toastr.success(eventName, "Clicked");
  }
}
