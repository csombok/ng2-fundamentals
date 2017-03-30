import {Injectable} from "@angular/core";

@Injectable()
export class FavoriteService {

    private count: number = 0;

    public setFavoriteProject(projectId: string, user: string, on: boolean,
                              resultCallback: () => void, errorCallback: (err: any) => void) {
        this.count++;
        if (this.count % 3 === 0) {
            errorCallback("Setting favorite failed");
        } else {
            resultCallback();
        }
    }
}