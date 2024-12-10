var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#main",
        start: "top top",
         pin: true,
        markers: true,
        scrub: 3,
    }
});

tl.to(".overlay",{
    top: "-150%",
    ease: Power1,
},"s")
.to(".O-img",{
    rotate: "45deg",
},"s")

































// // gsap.to("#main .overlay ",{
// //     top: "-100%",
// //     duration: 1,
// //     scrollTrigger: {
// //         trigger: "#main .overlay",
// //         scroller: "body",
// //         markers: true,
// //         start: "top 60%",
// //         end: "top 10%",
// //         scrub: 2,
// //     }

     

// // }),
// // tl.to()

// function timelineOne(){
//     var tl = gsap.timeline({
//         scrollTrigger: {
//             trigger:"#page-1",
//             start: "top 90%",
//             end: "top 30%",
//             scrub: 2,
//             top: "100%",

           
//             markers: true,
//         }
//     });
//     tl
//     .to(".overlay",{
//         top:"-150%",
//         duration: 1,
//         esae: Power1,
//     })
//     .to("#page-1",{
//         pin: true,
//         esae: Power1,
//     })
     
// }

// timelineOne()