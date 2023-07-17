var tl=gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:0.5
})
tl.from("#nav h1,#nav h3,#nav h4",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})
tl.from("#left h1",{
    x:-400,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3

})

tl.from("#right img",{
  scale:2,
  opacity:0,
  duration:0.5,
})
tl.from("#page3 h1",{
    x:-400,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.3
})
tl.from(".box img",{
    scale:0.4,
    opacity:0,
    duration:0.8,
    delay:0.8,
    stagger:0.3
    
  })

gsap.from("#page3 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page3 .box",
        scroller:"body",
    }
})