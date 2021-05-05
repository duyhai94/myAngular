import { Injectable } from '@angular/core';
import {
  UrlTree,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, from, fromEvent, of, Subject } from 'rxjs';
import { Observable } from 'rxjs';

import { map, takeUntil } from 'rxjs/operators';

export interface CanComponentDeactivate {
  canDeactivate: () =>
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree;
}

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  killSubcription = new Subject();
  a$: Observable<any>;
  stateAngular = new BehaviorSubject<any>();
  canDeactivate(
    component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    of();
    this.a$ = this.killSubcription;
    this.a$.subscribe((res) => {
      console.log(res);
    });
    this.killSubcription.next(1);
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
