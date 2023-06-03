const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => success())
      .catch((error) => alert(error));
  };

const submitBt = document.querySelector('form button[type="submit"]')

const docLanguage = document.documentElement.lang

function success() {
    
    if(docLanguage == 'en') {
        submitBt.innerHTML = "Submitted successfully. Thank you!"
    } else if(docLanguage == 'uk') {
        submitBt.innerHTML = "Надіслано успішно. Дякую тобі!"
    }

    submitBt.classList.add('submited')

    setTimeout(() => {
      if(docLanguage == 'en') {
          submitBt.innerHTML = "Send again"
      } else if(docLanguage == 'uk') {
          submitBt.innerHTML = "відправити знову"
      }
  
      submitBt.classList.remove('submited')
    }, 3000);
}
  
document.querySelector("form").addEventListener("submit", handleSubmit);




const backBt = document.querySelector('.fieldset_controls .back')
const nextBt = document.querySelector('.fieldset_controls .next')

let formPosition = 0;

const formFieldsets = document.querySelectorAll('.contact fieldset')

formFieldsets[formPosition].classList.add('visible')

const lastFieldPos = formFieldsets.length - 1

function checkFieldsets(direction) {
  if (direction == 'forwards') {
    if (!formFieldsets[lastFieldPos].classList.contains('visible')) {
      backBt.classList.remove('disabled');
      formFieldsets[formPosition].classList.remove('visible');
      formPosition++;
      formFieldsets[formPosition].classList.add('visible');

      if (formPosition === lastFieldPos) {
        nextBt.classList.add('disabled');
      }
    }
  } else if (direction == 'backwards') {
    if (!formFieldsets[0].classList.contains('visible')) {
      nextBt.classList.remove('disabled');
      formFieldsets[formPosition].classList.remove('visible');
      formPosition--;
      formFieldsets[formPosition].classList.add('visible');

      if (formPosition === 0) {
        backBt.classList.add('disabled');
      }
    }
  }
}
