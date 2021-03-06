import { Component, Input,OnInit,OnChanges} from '@angular/core';

import { Hero } from './hero';

import { ActivatedRoute, Params }   from '@angular/router';

import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';

//@Component函数后不能加;号 否则就会报错
@Component({
	selector:'myHero-details',
	template:`
	     <div *ngIf="hero">
            <h2> {{hero.name}} details!</h2>
            <div>
               <label>ID:</label>
               {{hero.id}} 
            </div>
            <div>
             <label>Name:</label>
             <input [(ngModel)] = "hero.name" placeholder="name"/>
            </div>
		</div>
	`
})

export class HeroDetailsComponent {
	// @Input 在此处的作用是:声明hero是输入属性,绑定到此组件上来! hero:Hero 是typeScript 的语法 声明变量类型!
	@Input() 
	hero: Hero;

  

}