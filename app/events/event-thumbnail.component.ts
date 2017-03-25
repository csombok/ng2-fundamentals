import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: "event-thumbnail",
    templateUrl: "app/events/event-thumbnail.component.html",
    // tslint:disable-next-line:object-literal-sort-keys
    styles: [`
        .green {color: green !important}
        .bold {font-weight: bold;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
    `],
})

export class EventThumbnailComponent {
    @Input() public event: any;

    public getTimeClass() {
        if (this.event.time === "8:00 am") {
            return "green bold";
        }
        return "";
    }
}
