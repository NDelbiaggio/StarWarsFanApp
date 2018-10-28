import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/api/data.service';

export class ListViewComponent<T> implements  OnChanges, OnDestroy {

    @Input('links') links: [];
    @Input('search') search: string;
    @Input('title') title: string;
    
    private elemPerPage: number = 10;
    private nbPages: number;

    protected list: T[];
    private subscription: Subscription;

    private dataService: DataService;

    isLoading: boolean = false;

    constructor(dataService: DataService, defaultTitle: string){
        this.dataService = dataService;
        if(!this.title){this.title = defaultTitle};
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.links){
            this.loadDataFromLinks();
        }else{
            this.loadData();
        }
    }
    
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    loadData(pageNumber = 1){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
        this.isLoading = true;
        this.subscription = this.dataService.getAll(pageNumber, this.search)
            .subscribe((res)=>{
                this.list = res.results;
                this.nbPages = Math.ceil(res.count/this.elemPerPage);
                this.isLoading = false;
            });
    }
    
    loadDataFromLinks(){
        this.isLoading = true;
        this.subscription = this.dataService.getByLinks(this.links)
            .subscribe(list => {
                this.list = list;
                this.isLoading = false;
            });
    }

}