import {Component} from "@angular/core";

@Component({
    selector: "nav-bar",
    templateUrl: "app/nav/nav-bar.component.html",
    // tslint:disable-next-line:object-literal-sort-keys
    styles: [ `
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
    `],
})

export class NavBarComponent {

}
 