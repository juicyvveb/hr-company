import gsap from "gsap";

export const animation_list = (target) => {
    let tl = gsap.timeline({ delay: .2 });
    tl.fromTo(target, {
        x: 0,
        y: -50,
        scale: 1.1,
        boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.5)'
    },
        {
            x: 0,
            y: 0,
            stagger: 0.1,
            scale: 1,
            ease: "elastic.out(1.5, 0.75)",
            boxShadow: 'none',
            duration: .3,
        })
}


//картинка будет двигаться только на desktop
export const animation_image = (target) => {
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );

    if (scrollWidth > 1000) {
        gsap.set(target, { x: '300%' })
        gsap.to(target, {
            x: 0,
            delay: .1, duration: 1
        })
    }
}


