import { Component } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";

@Component({
    selector: "modal-view",
    templateUrl: "./modal-view.component.html"
})
export class ModalView {

    public src = "";

    constructor(private params: ModalDialogParams) {
        this.src = this.params.context.ImageSrc;
    }
}
