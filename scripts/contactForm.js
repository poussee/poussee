// Form
const contactForm = document.querySelector('.contact-form');

// Form Retrieve Values
const formInputs = contactForm.querySelectorAll('input');
const formTextArea = contactForm.querySelector('textarea');

// Form Succeed
const succeedPage = document.querySelector('.form-succeed');
const closeSucceedPageButton = document.querySelector('.close-form-succeed');

succeedPage.style.display = 'none';

closeSucceedPageButton.addEventListener('click', (e) => {
	window.location.href = window.location.href;
});

// Form Error
const errorPage = document.querySelector('.form-error');
const closeFormErrorButton = document.querySelector('.close-form-error');

errorPage.style.display = 'none';

closeFormErrorButton.addEventListener('click', (e) => {
	// window.location.href = window.location.href;
	errorPage.style.display = 'none';
});

function checkFormValues() {}

async function onSubmitContactForm(event) {
	const data = new FormData();
	let values = [];
	formInputs.forEach((element) => {
		if (element.type === 'checkbox') {
			if (!element.checked) {
				element.style.border = '2px solid red';
				values.push(false);
				console.log(element);
			} else {
				element.style.border = '2px solid var(--green-poussee)';
			}
		} else {
			if (element.value === '') {
				element.style.borderBottom = '2px solid red';
				values.push(false);
				console.log(element.value);
			} else {
				element.style.borderBottom = '2px solid var(--green-poussee)';
			}
		}
	});

	if (formTextArea.value === '') {
		formTextArea.style.borderLeft = '2px solid red';
		formTextArea.style.borderBottom = '2px solid red';
		values.push(false);
	} else {
		formTextArea.style.borderLeft = '2px solid var(--green-poussee)';
		formTextArea.style.borderBottom = '2px solid var(--green-poussee)';
	}

	if (values.length === 0) {
		succeedPage.style.display = 'flex';
	} else {
		errorPage.style.display = 'flex';
	}
}

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	onSubmitContactForm();
});
