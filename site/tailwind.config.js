/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#253E0D',
          hover:   '#1D3009',
          600:     '#2F5011',
          400:     '#4C7A26',
          200:     '#A8CC80',
          100:     '#D4EDBA',
          50:      '#EEF7E5',
        },
        neutral: {
          bg:     '#F2F2F2',
          card:   '#FFFFFF',
          border: '#E3E8DF',
          muted:  '#9CAE94',
          ink:    '#1A1A1A',
          soft:   '#5A6854',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '9999px',
      },
      boxShadow: {
        card:        '0 1px 3px rgba(37,62,13,.06), 0 1px 2px rgba(37,62,13,.04)',
        'card-hover':'0 8px 24px rgba(37,62,13,.10)',
        modal:       '0 20px 60px rgba(37,62,13,.18)',
      },
    },
  },
  plugins: [],
}
