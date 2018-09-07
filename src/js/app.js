import { TimelineMax } from 'gsap';

let state = {pos:0};
$('body').on('click',() => {
  
  let tl = new TimelineMax();
  let tl1 = new TimelineMax();
  tl
    .to(state,2,{
    	pos:1,
    	onUpdate: function() {
    		let perc = '-'+state.pos*900;
    		let perc1 = '-'+state.pos*state.pos*900;
    		let perc2 = '-'+state.pos*state.pos*state.pos*900;
    		// let perc = '-'+state.pos*100+'%';
    		tl1
          .set('.slider__1 .slider__wrap',{x:perc},0)
          .set('.slider__2 .slider__wrap',{x:perc1},0)
          .set('.slider__3 .slider__wrap',{x:perc2},0);
    	}
    });
});
