import { Injector, OnDestroy, OnInit } from '@angular/core';
import { Backend } from '@movieapp/backend';
import { ActivatedRoute, Router } from '@angular/router';

export class Abstract implements OnInit, OnDestroy {

    protected backend: Backend;
    protected router: Router;
    protected route: ActivatedRoute;

    constructor(protected injector: Injector) {
        this.backend = this.injector.get(Backend);
        this.router = this.injector.get(Router);
        this.route = this.injector.get(ActivatedRoute);
    }


    ngOnInit(): void {

    }

    ngOnDestroy(): void {
    }
}
