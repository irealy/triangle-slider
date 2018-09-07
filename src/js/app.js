import { TimelineMax } from 'gsap';

let state = {pos:0};
$('body').on('click',() => {
  
  let tl = new TimelineMax();
  let tl1 = new TimelineMax();
  tl
    .to(state,2,{
    	pos:1,
    	onUpdate: function() {
    		let perc = '-'+state.pos*100+'%';
    		let perc1 = '-'+state.pos*state.pos*100+'%';
    		let perc2 = '-'+state.pos*state.pos*state.pos*100+'%';
    		// let perc = '-'+state.pos*100+'%';
    		tl1
          .set('.slider__1 .triangle-slider__wrapper',{x:perc},0)
          .set('.slider__2 .triangle-slider__wrapper',{x:perc1},0)
          .set('.slider__3 .triangle-slider__wrapper',{x:perc2},0);
    	}
    });
});
