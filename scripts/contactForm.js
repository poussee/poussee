const axios = require('axios').default;

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

async function onSubmitContactForm() {
	const data = new FormData();
	let valuesCounting = [];
	formInputs.forEach((element) => {
		if (element.type === 'checkbox') {
			if (!element.checked) {
				element.style.border = '2px solid red';
				valuesCounting.push(false);
			} else {
				element.style.border = '2px solid var(--green-poussee)';
			}
		} else {
			if (element.value === '') {
				element.style.borderBottom = '2px solid red';
				valuesCounting.push(false);
			} else {
				element.style.borderBottom = '2px solid var(--green-poussee)';
				data.append(element.className, element.value);
			}
		}
	});

	if (formTextArea.value === '') {
		formTextArea.style.borderLeft = '2px solid red';
		formTextArea.style.borderBottom = '2px solid red';
		valuesCounting.push(false);
	} else {
		formTextArea.style.borderLeft = '2px solid var(--green-poussee)';
		formTextArea.style.borderBottom = '2px solid var(--green-poussee)';
		data.append(formTextArea.className, formTextArea.value);
	}

	if (valuesCounting.length > 0) {
		errorPage.style.display = 'flex';
	} else {
		await axios
			.post('http://localhost:3000/send_mail', data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((r) => {
				succeedPage.style.display = 'flex';
				console.log(r);
			})
			.catch((e) => {
				console.log(e);
			});
	}
}

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	onSubmitContactForm();
});
