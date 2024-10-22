/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      screens: {
        // 'tablet': { 'max': '1024px' },
        'bL4k': { 'min': '1440px' },
        'bm4k': { 'min': '1920px' },

        'btl': { 'max': '991px' },
        'tablet': { 'max': '767px' },
        'bmMt': { 'max': '670px' },
        'bmt': { 'max': '479px' },
      },
      colors: {
        violet: 'rgb(var(--violet))',
        fnName: 'var(--functionName)',
        fnVar: 'var(--fnnamedeclaration)',
        fnpara: 'var(--fnpara)',
        propname: 'var(--propNam)',
        propvalue: 'var(--propvalue)',
        return: 'var(--return)'
      },
      spacing: {
        lefting: 'var(--star-left)'
      },
      animation: {
        backgroundPan: 'backgroundPan 3s linear infinite',
        scale: 'scale 700ms ease forwards',
        rotate: 'rotate 1000ms linear infinite',
        buttonLeft: 'buttonLeft .5s cubic-bezier(0.43, 1.71, 0.39, 0.92) forwards',
        buttonRight: 'buttonRight .5s cubic-bezier(0.43, 1.71, 0.39, 0.92) forwards',
        bounced: 'bounced cubic-bezier(0.43, 1.71, 0.39, 0.92) .6s .05s',
        crawlingLine: 'crawlingLine 30s linear infinite'
      },
      keyframes: {
        backgroundPan: {
          'from': { backgroundPosition: '0% center' },
          'to': { backgroundPosition: '-200% center' }
        },
        scale: {
          'from': { transform: 'scale(0)' },
          'to': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' }
        },
        rotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(180deg)' }
        },
        buttonLeft: {
          '0%': { transform: 'trnaslateX(0)', clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' },
          '50%': { transform: 'translateX(-10px)', clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          '50.1%': { transform: 'translateX(10px)', clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
          '100%': { transform: 'translateX(0)', clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' }
        },
        buttonRight: {
          '0%': { transform: 'trnaslateX(0)', clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' },
          '50%': { transform: 'translateX(10px)', clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
          '50.1%': { transform: 'translateX(-10px)', clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          '100%': { transform: 'translateX(0)', clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' }
        },
        bounced: {
          '0%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(0)' }
        },
        crawlingLine: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom right, #05f, #21d6ef)",
        "text-gradient": "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
        'confetti-gradient': 'radial-gradient(56.8% 50% at 50% 50%, #ffeccc 0, hsla(0, 0%, 100%, 0) 100%)',
      },
    },
  },
  plugins: [],
};
