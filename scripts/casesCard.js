const cardsContainer = document.querySelector('#cases-row');
// const b2bButton = document.querySelector('.b2b-buttom');
// const b2cButton = document.querySelector('.b2c-buttom');
const moreCasesButton = document.querySelector('.moreCases');

// b2cButton.classList.toggle('segment-filter-on');

let activeFilter = 'b2b';
let cardsToShow = 3;

const cases = [
	{
		img: '../assets/img/cases/icone-distribuidora.png',
		title: 'DISTRIBUIDORA',
		textos: [
			'Como aumentamos em',
			'185%',
			'o número de usuários de um e-commerce B2B na Black Friday.',
		],
		link: './case-distribuidora.html',
		type: 'B2B',
	},
	{
		img: '../assets/img/cases/icone-contactCenter.png',
		title: 'CONTACT CENTER',
		textos: [
			'Como ajudamos a criar presença digital de uma empresa de telecomunicações em',
			'menos de 6 meses.',
		],
		link: './case-contact-center.html',
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
	{
		img: '../assets/img/cases/icone-mascara.png',
		title: 'PRODUTOS HOSPITALARES',
		textos: [
			'Veja como a nossa estratégia de Google Ads fez os',
			'leads em vendas',
			'de máscara no B2B subir de',
			'0 para 831.',
		],
		link: './case-mascaras.html',
		type: 'B2B',
	},
];

// b2bButton.addEventListener('click', (e) => {
// 	if (activeFilter != 'b2b') {
// 		b2bButton.classList.toggle('segment-filter-on');
// 		b2cButton.classList.toggle('segment-filter-on');
// 		activeFilter = 'b2b';
// 	}
// });

// b2cButton.addEventListener('click', (e) => {
// 	if (activeFilter != 'b2c') {
// 		b2bButton.classList.toggle('segment-filter-on');
// 		b2cButton.classList.toggle('segment-filter-on');
// 		activeFilter = 'b2c';
// 	}
// });

function insertCases() {
	let cards = '';
	let createdCardsCounter = 0;
	let strongCounter = 1;
	let position = 1;
	cases.forEach((item) => {
		if (createdCardsCounter < cardsToShow) {
			strongCounter = 1;
			if (position === 1) {
				cards += `
			<div
			class="row cardRow"
			style="
				display: flex;
				align-items: center;
				justify-content: center;
				width:100%;
			"
		>            `;
			}

			if (position > 1) {
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
				if (strongCounter % 2 != 0) {
					cards += `
                ${texto}
                `;
				} else {
					cards += `<strong>
                ${texto}
                </strong>`;
				}

				strongCounter++;
			});

			cards += `
        </p>
        <a href="${item.link}">
            <img src="../assets/img/cases/cta-confira.png" alt="" />
        </a>
    </div>
`;
			if (position % 3 === 0) {
				cards += `
	</div>
	`;
				position = 0;
			}
			position++;
			createdCardsCounter++;
		}
	});

	if (cases.length % 3 != 0) {
		cards += `
		</div>
		`;
	}

	cardsContainer.innerHTML = cards;
}

insertCases();

function showMoreCards() {
	if (cardsToShow < cases.length) {
		cardsToShow += 3;
		insertCases();
	}
}

moreCasesButton.addEventListener('click', (e) => {
	showMoreCards();
});
