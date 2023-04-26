ScrollReveal({ 
    reset: true,
    distance: '200px',
    duration: 1500,
    delay: 50,
});

ScrollReveal().reveal('.me #hi, .me #name, .me #desc, .me #hire', { delay: 10, origin: 'top', interval: 150 });

ScrollReveal().reveal('#aboutme, #fname, #desc2, #geninfo, #dob, #bp, #l, #jan, #dav, #eng, #contact, #numb, #insta, #fb, #link, #gmail', { delay: 10, origin: 'left', interval: 70 });

ScrollReveal().reveal('#myPic, #myPic2', { delay: 100, origin: 'right' });
