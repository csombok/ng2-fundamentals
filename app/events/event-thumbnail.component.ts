import {Component, Input,Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
        .green {color: green !important}
        .bold {font-weight: bold;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent {
    @Input() event:any

    getTimeClass(){
        if(this.event.time == '8:00 am') 
            return 'green bold';
        return '';
    }
}