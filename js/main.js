// Arrow button
const sendBtn = document.querySelector('.content__input__btn');
// Email input
const email = document.querySelector('.content__input__form');
// Error message
const errorMsg = document.querySelector('.content__errorMsg');
// Error icon
const errorIcon = document.querySelector('.content__input__error');

function handleClick(e) {
    e.preventDefault();

    const text = email.value;
    // Check if contains an @ and text after it
    const regex = /@./;

    // Show error message and icon
    if(!regex.test(text)) {
        errorMsg.classList.remove('hide');
        errorIcon.classList.remove('hide');
        email.classList.add('content__input__form--borderRed');
    } else {
        // Hide error message and icon
        errorMsg.classList.add('hide');
        errorIcon.classList.add('hide');
        email.classList.remove('content__input__form--borderRed');
    }
}

sendBtn.addEventListener('click', handleClick);