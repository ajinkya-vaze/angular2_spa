import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    template: `
    <nav aria-label="Page navigation" *ngIf="numberOfPages > 1">
        <ul class="pagination">
            <li [class.disabled]="currentPage == 1">
                <a aria-label="Previous" (click)="previous()">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li *ngFor="let element of arr; let i= index;" [class.active]="currentPage == i+1">
                <a (click)="changePage(i + 1)">{{i + 1}}</a>
            </li>
            <li [class.disabled]="currentPage == numberOfPages">
                <a aria-label="Next" (click)="next()">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
    `
})
export class PaginationComponent implements OnChanges {
    @Input()
    items: any[];

    @Input()
    pageSize: number = 10;

    private numberOfPages: number = 0;
    private arr: Array<number>;
    private currentPage: number;

    ngOnChanges() {
        this.numberOfPages = Math.floor(this.items.length / this.pageSize);
        this.arr = new Array(this.numberOfPages);
        this.currentPage = 1;
    }

    @Output()
    pageChange = new EventEmitter();

    previous() {
        if (this.currentPage == 1) {
            return;
        }
        this.currentPage--;
        this.pageChange.emit(this.currentPage);
    }

    next() {
        if (this.currentPage == this.numberOfPages) {
            return;
        }
        this.currentPage++;
        this.pageChange.emit(this.currentPage);
    }

    changePage(pageNo) {
        this.currentPage = pageNo;
        this.pageChange.emit(this.currentPage);
    }
}