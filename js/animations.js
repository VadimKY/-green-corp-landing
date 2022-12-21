let animationInited = false;
const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + "+";
        } else {
            element.innerText = i;
        };
        i += 100;
        setTimeout(() => increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED);
    };
    //setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED);
};
function initIncreaseNumberAnimation() {
   let element = document.querySelector(".features__clients-count");
   increaseNumberAnimationStep(0, element, 5000);
}
//initIncreaseNumberAnimation();

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === "other") {
      const formContainer = document.createElement('div');
      formContainer.classList.add('form__group');
      formContainer.classList.add('form__other-input');
   
      const input = document.createElement('input');
      input.placeholder = "Введите ваш вариант";
      input.type = "text";
   
      formContainer.appendChild(input);
      document.querySelector(".nnn").insertBefore(formContainer, document.querySelector('.form__submit')); 
    }
   
    if (event.target.value !== 'other') {
        const otherInput = document.querySelector('.form__other-input');
        document.querySelector(".nnn").removeChild(otherInput);
      }
  });

  function updateScroll() {
    if (window.scrollY > 0) {
      let header = document.querySelector("header");
      header.classList.add("header__scrolled");

    } else {
      let header = document.querySelector("header");
      header.classList.remove("header__scrolled");
    }
    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    
    
    if (windowBottomPosition >= countElementPosition && !animationInited) {
      animationInited = true;
      initIncreaseNumberAnimation();
  }
}
    
  window.addEventListener('scroll', updateScroll);

  function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});
  
  function onLinkClick(event) {
  event.preventDefault();
 
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
}


addSmoothScroll(document.querySelector('.more-button'));