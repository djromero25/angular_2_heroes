import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, CanDeactivate } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit, CanDeactivate {
	@Input() hero: Hero;

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}
	ngOnInit() {
		let id = +this._routeParams.get('id'); //the plus forces the id to a number
		this._heroService.getHero(id)
			.then(hero => this.hero = hero);
	}
	goBack() {
		window.history.back();
	}
	//I don't know how to get this to work
	routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
		// console.log(prev, next);
    // return confirm('Are you sure you want to leave?');
  }
}