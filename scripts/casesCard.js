const cardsContainer = document.querySelector('.cases-row');
const b2bButton = document.querySelector('.b2b-buttom');
const b2cButton = document.querySelector('.b2c-buttom');

b2cButton.classList.toggle('segment-filter-on');

activeFilter = 'b2b';

const cases = [
	{
		img: '../assets/img/cases/icone-distribuidora.png',
		title: 'DISTRIBUIDORA',
		textos: [
			'Como aumentamos em',
			'185%',
			'o número de usuários de um e-commerce B2B ma Black Friday.',
		],
		link: '#',
		type: 'B2B',
	},
	{
		img: '../assets/img/cases/icone-contactCenter.png',
		title: 'CONTACT CENTER',
		textos: [
			'Como ajudamos a criar presença digital de empresa de telecomunicações em',
			'menos de 6 meses.',
		],
		link: '#',
		type: 'B2B',
	},
	{
		img: '../assets/img/cases/icone-contabil.png',
		title: 'ACESSORIA CONTÁBIL',
		textos: [
			'Como mudamos o posicionamento de marca com',
			'mais de 15 anos de tradição.',
		],
		link: './case-contabil.html',
		type: 'B2B',
	},
];

b2bButton.addEventListener('click', (e) => {
	if (activeFilter != 'b2b') {
		b2bButton.classList.toggle('segment-filter-on');
		b2cButton.classList.toggle('segment-filter-on');
		activeFilter = 'b2b';
	}
});

b2cButton.addEventListener('click', (e) => {
	if (activeFilter != 'b2c') {
		b2bButton.classList.toggle('segment-filter-on');
		b2cButton.classList.toggle('segment-filter-on');
		activeFilter = 'b2c';
	}
});

function insertCases() {
	let cards = '';
	let c = 1;

	cases.forEach((item) => {
		c = 1;
		if (cards) {
			cards += `
            <div class="col-md-1 col-12"></div>
            `;
		}
		cards += `
        <div
        class="col-md-3 col-12 case-card"
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        "
    >
        <img src="${item.img}" alt="" />
        <h3>${item.title}</h3>
        <img src="../assets/img/cases/divisóriaPreta.png" alt="" />
        <p>
        `;

		item.textos.forEach((texto) => {
			if (c % 2 != 0) {
				cards += `
                ${texto}
                `;
			} else {
				cards += `<strong>
                ${texto}
                </strong>`;
			}

			c++;
			console.log(c % 2);
		});

		cards += `
        </p>
        <a href="${item.link}">
            <img src="../assets/img/cases/cta-confira.png" alt="" />
        </a>
    </div>
`;
	});

	cardsContainer.innerHTML = cards;
}

insertCases();
