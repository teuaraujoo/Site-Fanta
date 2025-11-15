// Criação de Timeline do GSAP com animações sincronizadas com o scroll

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: 1,  // Vincula a animação ao scroll
        markers: true
    }
});

tl.to(
    '#lata-fanta', 
    {
        top: '120%',
        left: '0%',
    }, 
    'orange'
);

tl.to(
    '#laranja-cortada', 
    {
        top: '160%',
        left: '23%',
    }, 
    'orange'
);

tl.to(
    '#laranja', 
    {
        width: '15%',
        top: '168%',
        right: '10%'
    }, 
    'orange'
);

tl.to(
    '#folha', 
    {
        top: '110%',
        rotate: '530deg',
        left: '70%',
    }, 
    'orange'
);

tl.to(
    '#folha2', 
    {
        top: '110%',
        rotate: '130deg',
        left: '0%',
    }, 
    'orange'
);

// CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: 1,  // Vincula a animação ao scroll
        markers: true
    }
});

tl2.from(
    '.lemon1', 
    {   
        rotate: '-90deg', 
        left: '-100%',
        top: '110%',
    }, 
    'ca'
);

tl2.from(
    '#cocacola', 
    {   
        rotate: '-90deg', 
        left: '-100%',
        top: '110%',
    }, 
    'ca'
);

tl2.from(
    '.lemon2', 
    {   
        rotate: '90deg', 
        left: '100%',
        top: '110%',
    }, 
    'ca'
);
tl2.from(
    '#pepsi', 
    {   
        rotate: '90deg', 
        left: '100%',
        top: '110%',
    }, 
    'ca'
);

tl2.to(
    '#lata-fanta', 
    {   
        width: '35%',
        top: '210%',
        left: '33%',
    }, 
    'ca'
);

tl2.to(
    '#laranja-cortada', 
    {
        top: '204%',
        left: '42%',
        width: '18%',
    }, 
    'ca'
);
