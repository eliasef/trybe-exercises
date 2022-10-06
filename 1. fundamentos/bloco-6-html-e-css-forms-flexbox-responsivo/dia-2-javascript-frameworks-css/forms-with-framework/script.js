const button = document.getElementById('button');
const clear = document.getElementById('clear');

const formElements = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');

button.addEventListener('click', (event) => {
    event.preventDefault()
})

clear.addEventListener('click', () => {

})

// clear

function clearForms() {
    for (let i = 0; i < formElements.length; i += 1) {
        const userImput = formElements[i];
        userImput.value = '';
        userImput.checked = false;
    }
    textArea.value = ''
}

clearForms()