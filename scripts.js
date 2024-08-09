document.addEventListener('DOMContentLoaded', function () {
  
    gsap.registerPlugin(TextPlugin);
  
    //ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    // GSAP animation for hero4 underline
    var hero4UnderlineAnimation = gsap.fromTo(".hero4-underline", 
        {
            width: "0%",
        }, 
        {
            width: "16%",
            duration: 1, 
            ease: "power1.inOut"
        }
    );

    // ScrollMagic Scene for hero4 underline
    new ScrollMagic.Scene({
        triggerElement: ".hero4",
        triggerHook: 0.5, 
        duration: "70%" 
    })
    .setTween(hero4UnderlineAnimation)
    .addTo(controller);




    // GSAP animation for hero4 moving line
    var hero4MovingLineAnimation = gsap.fromTo(".hero4-moving-line", 
        {
            height: "0", 
            rotation: 30	
        }, 
        {
            height: "100vh", 
            rotation: 30,
            duration: 1, 
            ease: "power1.inOut", 
        }
    );

    // ScrollMagic Scene for hero4 moving line
    new ScrollMagic.Scene({
        triggerElement: ".hero5", 
        triggerHook: 0.8, 
        duration: "100%" 
    })
    .setTween(hero4MovingLineAnimation)
    .addTo(controller);




    
  // GSAP animation for hero5 moving line
  var hero5MovingLineAnimation = gsap.fromTo(".hero5-moving-line", 
  {
      height: "0", 
      rotation: 30	
      
  }, 
  {
      height: "50vh", 
      rotation: 30,
      duration: 1, 
      ease: "power1.inOut"
  }
);

// ScrollMagic Scene for hero4 moving line
new ScrollMagic.Scene({
  triggerElement: ".hero5-text", 
  triggerHook: 0.7, 
  duration: "50%" 
})
.setTween(hero5MovingLineAnimation)
.addTo(controller);



// GSAP animation for hero5 underline
var hero5UnderlineAnimation = gsap.fromTo(".hero5-underline", 
{
    width: "0%",
}, 
{
    width: "16%", 
    duration: 1, 
    ease: "power1.inOut" 
}
);

// ScrollMagic Scene for hero5 underline
new ScrollMagic.Scene({
triggerElement: ".hero5",
triggerHook: 0.5, 
duration: "70%" 
})
.setTween(hero5UnderlineAnimation)
.addTo(controller);



    // GSAP animation for text transition
    var hero6TextAnimation = gsap.to(".hero6-text", {
        duration: 2,
        text: {
            value: "To Rethink",
            
        },
        ease: "none",
        
    });

    // ScrollMagic Scene for hero6 text
    new ScrollMagic.Scene({
        triggerElement: ".hero6",
        triggerHook: 0.5, 
        duration: "30%" 
    })
    .setTween(hero6TextAnimation)
    .addTo(controller);


//
gsap.fromTo(
    ".hero7-text4", 
    { rotate: 0 }, 
    { 
        
        rotate: 90, 
        duration: 0, 
        ease: "power2.out" 
    }
);



 // GSAP animation for sliding up the hero7-line2
 var hero7LineSlideUp = gsap.fromTo(".hero7-line2",
 {
     y: "0" 
 },
 {
     y: "-100%", 
     duration: 1, 
     ease: "power1.inOut" 
 }
);

// GSAP animation for fading out all text except "Thinking"
var fadeOutTextExceptThinking = gsap.fromTo(
 ".hero7-text5 .word1",
 {
     opacity: 1 
 },
 {
     opacity: 0, 
     duration: 1, 
     ease: "power1.inOut" 
 }
);


// GSAP animation for fading In"
var fadeInText= gsap.fromTo(
    ".hero7-text5 .word2",
    {
        opacity: 0 // Initial opacity
    },
    {
        opacity: 1, 
        duration: 1, 
        ease: "power1.inOut" 
    }
   );



// GSAP animation for slide"
var slideleftText = gsap.fromTo(
    ".hero7-text5",
    {
        x: 80  
    },
    {
        x: "-20%", 
        duration: 1, 
        ease: "power1.inOut" 
    }
   );



  // GSAP animation for blur
var blurAnimation = gsap.fromTo(
    ".hero7-text6",
    {
        filter: "blur(5px)", // Initial state: blurred
    },
    {
        filter: "blur(0)",    // End state: no blur
        duration: 1, 
        ease: "power1.inOut" 
    }
);



// ScrollMagic Scene for hero7-line2 animation
new ScrollMagic.Scene({
 triggerElement: ".hero7-text5", 
 triggerHook: 0.5, 
 duration: "0%" 
})
.setTween(hero7LineSlideUp)
.addTo(controller);

// ScrollMagic Scene for text fade-out animation
new ScrollMagic.Scene({
 triggerElement: ".hero7-text5", 
 triggerHook: 0.5, 
 duration: "0%" 
})
.setTween(fadeOutTextExceptThinking)
.addTo(controller);


// ScrollMagic Scene for text fade-in animation
new ScrollMagic.Scene({
    triggerElement: ".hero7-text5", 
    triggerHook: 0.5, 
    duration: "0%" 
   })
   .setTween(fadeInText)
   .addTo(controller);


// ScrollMagic Scene for slide-left animation
new ScrollMagic.Scene({
    triggerElement: ".hero7-text5", 
    triggerHook: 0.5, 
    duration: "0%" 
   })
   .setTween(slideleftText)
   .addTo(controller);


   // ScrollMagic Scene for Blur
new ScrollMagic.Scene({
    triggerElement: ".hero7-text5", 
    triggerHook: 0.5, 
    duration: "0%" 
   })
   .setTween(blurAnimation)
   .addTo(controller);

});
