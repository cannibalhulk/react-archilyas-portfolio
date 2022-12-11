import gsap from 'gsap';

gsap.from(".logo", { y: -200, opacity: 0, duration: 1 });
gsap.from(".p-1", { opacity: 0, delay: 1 });
gsap.from(".p-2", { opacity: 0, delay: 2 });
gsap.from(".p-3", { opacity: 0, delay: 3 });