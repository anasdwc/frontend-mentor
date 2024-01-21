window.__unocss = {
    theme: {
        fontFamily: {
            'work-sans': "'Work Sans', sans-serif",
        },
        colors: {
            'light-pink': 'hsl(275, 100%, 97%)',
            'grayish-purple': 'hsl(292, 16%, 49%)',
            'dark-purple': 'hsl(292, 42%, 14%)',
            purple: '#8e23b7',
        },
        size: {
            // Utopia.fyi
            '2xs': 'clamp(0.64rem, 0.7135rem + -0.0817vw, 0.6944rem)',
            xs: 'clamp(0.8rem, 0.8448rem + -0.0498vw, 0.8331rem)',
            sm: 'clamp(1rem, 1rem + 0vw, 1rem)',
            md: 'clamp(1.2rem, 1.1824rem + 0.0751vw, 1.25rem)',
            lg: 'clamp(1.44rem, 1.3969rem + 0.184vw, 1.5625rem)',
            xl: 'clamp(1.7281rem, 1.6489rem + 0.338vw, 1.9531rem)',
            '2xl': 'clamp(2.0738rem, 1.9443rem + 0.5521vw, 2.4413rem)',
            '3xl': 'clamp(2.4881rem, 2.2896rem + 0.8469vw, 3.0519rem)',
        },
        breakpoints: {
            // Bootstrap Breakpoint
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1400px',
        },
    },
    rules: [
        [
            /^text-(.*)$/,
            ([, c], { theme }) => {
                if (theme.colors[c]) {
                    return { color: theme.colors[c] };
                }
                if (theme.size[c]) {
                    return { 'font-size': theme.size[c] };
                }
            },
        ],
        [
            /^font-(.+)$/,
            ([, c], { theme }) => {
                if (theme.fontFamily[c]) {
                    return { 'font-family': theme.fontFamily[c] };
                }
            },
        ],
        // [
        //     /^p-?([xy])(?:-?(-?.+))?$/,
        // ]
    ],
    preset: [],
};
