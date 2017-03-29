import {Component, ViewChild } from "@angular/core";
import {Router} from "@angular/router";
import { ModalComponent } from "ng2-bs3-modal/ng2-bs3-modal";
import {ToastrService} from "./../common/toastr.service";

@Component({
    styles: [".modal-title {color: red}", ".error {color: blue }"],
    template: `
        <h1>New Event</h1>
        <div class="col-md-6">
            <h3>[Create event form will go here]</h3>
            <br />
            <br />
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
            <button type="button" class="btn btn-default" (click)="onErrorInModal()">Error in Modal</button>
            <button type="button" class="btn btn-default" (click)="onErrorInToastr()">Error in Toast</button>
        </div>

        <modal #modal [cssClass]="'error'">
            <modal-header [show-close]="true">
                <h4 class="modal-title">{{errorSummary}}</h4>
            </modal-header>
            <modal-body>
                <p>{{errorMessage}}</p>
                <p>Please contact SLB IT Support for more details!</p>
                <p>HTTP Status Code: 500</p>
            </modal-body>
            <modal-footer [show-default-buttons]="true"></modal-footer>
        </modal>
    `,
})

export class CreateEventComponent {

    @ViewChild("modal")
    private modal: ModalComponent;
    private errorMessage: string;
    private errorSummary: string;

    constructor(private router: Router, private toastr: ToastrService) {
        this.errorMessage = "Error occured while setting favorite project..";
        this.errorSummary = "Failed to set favorite";
    }

    public cancel(){
        this.router.navigate(["/events"]);
    }

    public onErrorInToastr(){
        let openModal = () => this.onErrorInModal();
        this.toastr.error(this.errorMessage, this.errorSummary, openModal );
    }

    public onErrorInModal(){
        this.modal.open();
    }
}
