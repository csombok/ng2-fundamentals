import {Injectable} from "@angular/core";
import { ModalComponent } from "ng2-bs3-modal/ng2-bs3-modal";

declare let  toastr: any;

@Injectable()
export class ToastrService {
    public success(message: string, title: string) {
        toastr.success(message, title);
    }

    public info(message: string, title: string) {
        toastr.info(message, title);
    }

    public warning(message: string, title: string) {
        toastr.warning(message, title);
    }

    public error(message: string, title: string, cb: () => void ) {
        toastr.error(message, title);
        toastr.options.onclick = () => {
            console.log("clicked");
            cb();
        };
    }
}
