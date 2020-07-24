import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ModalDialogOptions, ModalDialogService } from "@nativescript/angular";
import { ModalView } from '../modal-view/modal-view.component'

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService, private vcRef: ViewContainerRef,
        private modalService: ModalDialogService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    modal() {
        const options: ModalDialogOptions = {
            context: { ImageSrc : 'res://logo' },
            fullscreen: false,
            viewContainerRef: this.vcRef,
            cancelable: true
        };
        this.modalService.showModal(ModalView, options).then(() => {
        });
    }
}
