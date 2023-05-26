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
}
  
document.querySelector("form").addEventListener("submit", handleSubmit);