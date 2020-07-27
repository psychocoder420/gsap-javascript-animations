// gsap.from('.header',{duration: 1,y:'-100%',ease:'bounce'})
// //use gsap.from and gsap.to to animate elements
// //syntax: gsap.from('selector',{animations})
// //from() means start with given animation end with given css
// //to() from css properties to the gsap animation
// gsap.from('.link',{duration: 1, opacity: 0,delay:1,stagger:.5})

// gsap.from('.right',{duration:1,x:'-100vw',delay:1,ease: 'power2.in'})

// gsap.from('.left',{duration:1,delay:1.5,x:'-100%'})

// gsap.to('.footer',{duration: 1,y:0,ease:'power2.out',delay:2.5})

// gsap.fromTo('.btn',{opacity:0,scale:0,rotation:720},
// {duration:1,delay:3.5,opacity:1,scale:1,rotation:0})

const timeline = gsap.timeline({ defaults: {duration: .5,delay:0}})
timeline
    .from('.header', {y: '-100%', ease: 'bounce'})
    .from('.link',{opacity: 0,delay:1,stagger:.5})
    .from('.right',{x:'-100vw',ease: 'power2.in'},.5)
    .from('.left',{x:'-100%'},'<.25')
    .to('.footer',{y:0,ease:'power2.out'})
    .fromTo('.btn',{opacity:0,scale:0,rotation:720},{opacity:1,scale:1,rotation:0})

const button = document.querySelector('.btn')

button.addEventListener('click', () =>  {
    timeline.timeScale(3)
    timeline.reverse()
})