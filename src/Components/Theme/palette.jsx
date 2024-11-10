import { alpha } from '@mui/material/styles';

export const grey = {
    100: '#D2D3D3',
    500: '#838488',
    900: '#22242C',
};

export const primary = {
    light: '#EEF0FF',
    main: '#20265B',
    dark: '#12184A',
};
export const secondary = {
    light: '#D0CAC4',
    main: '#613C18',
    dark: '#54300D',
};
export const info = {
    light: '#F5FDFF',
    main: '#0DCAF0',
    dark: '#00ABCD',
};
export const success = {
    light: '#F4FFFA',
    main: '#198754',
    dark: '#0D7142',
};
export const error = {
    light: '#FFF6F7',
    main: '#DC3545',
    dark: '#C22635',
};
export const warning = {
    light: '#FFFCF3',
    main: '#FFC107',
    dark: '#E4AB00',
};

const base = {
    primary,
    secondary,
    grey,
    success,
    error,
    info,
    warning
};

// ------------------------------------------------------------

export function palette(mode = 'light') {
    return {
        ...base,
        text: {
            primary: mode === 'light' ? grey[900] : '#ECEDEE',
            secondary: grey[500],
            disabled: alpha(grey[900], 0.24)
        },
        background: {
            default: mode === 'light' ? '#FFFFFF' : '#111114', // white for light mode, grey for dark mode
            paper: mode === 'light' ? '#FFFFFF' : '#111114',  // optional: you can adjust this if you need different backgrounds for cards, etc.
        },
    };
}

