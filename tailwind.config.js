/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.light-bg-gradient': {
					background: 'rgb(215,214,218)',
					background: 'linear-gradient(110deg, rgba(215,214,218,1) 0%, ' +
						'rgba(214,215,218,1) 10%, rgba(207,216,218,1) 25%, rgba(201,209,221,1) 30%, ' +
						'rgba(202,217,221,1) 35%, rgba(203,211,223,1) 41%, rgba(211,214,223,1) 45%, ' +
						'rgba(218,221,224,1) 50%, rgba(191,215,220,1) 58%, rgba(223,223,225,1) 66%, ' +
						'rgba(221,221,224,1) 70%, rgba(207,202,224,1) 74%, rgba(202,211,224,1) 77%, ' +
						'rgba(194,219,221,1) 82%, rgba(179,212,217,1) 88%, rgba(190,218,216,1) 95%, ' +
						'rgba(181,212,216,1) 97%, rgba(217,221,225,1) 100%)',
				},
				'.dark-bg-gradient': {
					background: 'rgb(12,15,19)',
					background: 'linear-gradient(110deg, rgba(12,15,19,1) 0%, rgba(14,18,22,1) 9%, ' +
						'rgba(14,17,21,1) 22%, rgba(24,25,35,1) 35%, rgba(19,18,27,1) 43%, rgba(13,16,20,1) 49%, ' +
						'rgba(19,30,32,1) 55%, rgba(22,37,39,1) 60%, rgba(11,13,16,1) 72%, rgba(21,19,28,1) 78%, ' +
						'rgba(29,20,34,1) 81%, rgba(26,19,30,1) 83%, rgba(15,20,21,1) 86%, rgba(20,33,38,1) 90%, ' +
						'rgba(20,30,37,1) 93%, rgba(14,21,24,1) 95%, rgba(15,18,22,1) 100%)',
				},
			})
		}),
	],
	darkMode: 'selector',
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				borderDark: '#31363e',
				wh: '#e7e9ee',
			},
		},
	},

}

