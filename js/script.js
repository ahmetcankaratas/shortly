const btn = document.getElementById('menuButton');
const menu = document.getElementById('menu')

const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

btn.addEventListener('click', navToggle)
linkForm.addEventListener('submit', formSubmit);

// Toggle Mobile Menu
function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}
//validate a URL
function validateURL(linkInput) {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i' // fragment locator
    );
    return !!pattern.test(linkInput);
}

function formSubmit(e) {
  e.preventDefault();
  const linkInput = input.value;
  if (linkInput === '') {
    errMsg.textContent = 'Please add a link';
    input.classList.add('border-red')
  } else if(!validateURL(linkInput)) {
    errMsg.textContent = 'Please provide a valid link';
    input.classList.add('border-red')
  } else {
    errMsg.textContent = '';
    input.classList.remove('border-red');
    alert('Success!');
  }

}