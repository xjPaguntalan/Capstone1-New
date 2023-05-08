ScrollReveal({ 
    reset: true,
});

ScrollReveal().reveal('.me #hi, .me #name, .me #desc, .me #hire', { distance: '200px',
duration: 1500, delay: 10, origin: 'top', interval: 150 });

ScrollReveal().reveal('#aboutme, #fname, #desc2, #geninfo, #dob, #bp, #l, #jan, #dav, #eng, #contact, #numb, #insta, #fb, #link, #gmail', { distance: '200px',
duration: 1500, delay: 10, origin: 'left', interval: 70 });

ScrollReveal().reveal('#myPic, #myPic2, #prglng', { distance: '200px',
duration: 1500, delay: 10, origin: 'right' });

ScrollReveal().reveal('#prg1, #prg1 img, #txt1', {distance: '200px',
duration: 1500, delay: 10, origin: 'left', interval: 100})

ScrollReveal().reveal('#prg2, #prg2 img, #txt2', {distance: '200px',
duration: 1500, delay: 10, origin: 'right', interval: 100})

ScrollReveal().reveal('#prg3, #prg3 img, #txt3', {distance: '200px',
duration: 1500, delay: 10, origin: 'left', interval: 100})

ScrollReveal().reveal('#edu, #econ1, #econ2, #econ3', {duration: 2000, delay: 100, interval: 200})

function redirectToResume() {
    window.open("https://1drv.ms/b/s!AnYRTfeNhzaIblCqZdBTPQ4sIo4?e=D9oync");
}

window.onload = function() {
    if (!localStorage.getItem('reloaded')) { 
      localStorage.setItem('reloaded', 'true');
      setTimeout(function() {
        location.reload();
      }, 1);
    }
};
  
