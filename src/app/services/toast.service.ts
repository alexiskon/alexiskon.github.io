import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: "root" })
export class AppToastService {
    constructor(
        private toastr: ToastrService
    ) { }
    errorMessage(message: string) {
        this.toastr.error( message);
    }
    successMessage(message: string) {
        this.toastr.success(message);
    }
}