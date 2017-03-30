import {Component, Input} from "@angular/core";
import {ToastrService} from "./../../common/toastr.service";
import {FavoriteService} from "./../shared/favorite.service";

@Component({
    template: `
        <span [ngClass]="getFavoriteStylesheet()" (click)="toggleFavorite($event)" aria-hidden="true"></span>
    `,
    selector: "app-project-favorite",
    styles: [`
        .favorite-toggle { font-size: 32px;}
        .favorite-toggle-on    {color: yellow; cursor: pointer;}
        .favorite-toggle-off   {color: white; cursor: pointer}
    `],
})

export class ProjectFavoriteComponent {

    @Input() public favorite: boolean;
    @Input() public projectId: string;
    @Input() public user: string;

    constructor(private readonly favoriteService: FavoriteService,
                private readonly toastr: ToastrService) {
    }

    public toggleFavorite(event) {
        this.favoriteService.setFavoriteProject(
            this.projectId,
            this.user,
            !this.favorite,
            () => { this.favorite = !this.favorite; },
            (err) => { this.toastr.error(err, err, null); });

        event.stopPropagation();
    }

    public getFavoriteStylesheet() {
        if (this.favorite) {
            return ["glyphicon glyphicon-star", "favorite-toggle", "favorite-toggle-on"];
        } else {
            return ["glyphicon glyphicon-star-empty", "favorite-toggle", "favorite-toggle-off"];
        }
    }
}
