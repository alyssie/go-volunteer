module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				15: '3.75rem',
			},
			colors: {
				main: {
					light: '#E9F7FD',
					DEFAULT: '#00B0FF',
					dark: '#0089C7',
				},
				red: {
					light: '#FFEBEF',
					DEFAULT: '#FF6584',
				},
				yellow: {
					light: '#FEF3E2',
					DEFAULT: '#F9A825',
				},
				violet: '#2F2E41',
				gray: '#FAFAFA',
				gold: '#F9A825',
				silver: '#A7A29B',
				bronze: '#D3AA67',
			},
			gridTemplateRows: {
				'10': 'repeat(10, minmax(0, 1fr))',
			},
		},
	},
	variants: {
		extend: {
			fontWeight: ['hover', 'focus', 'group-hover'],
			padding: ['hover', 'focus', 'group-hover'],
			width: ['hover', 'focus', 'group-hover'],
			display: ['hover', 'focus', 'group-hover'],
			ringColor: ['hover', 'focus', 'group-hover'],
		},
	},
	plugins: [],
}
