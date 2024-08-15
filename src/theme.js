import { createTheme } from '@mui/material/styles';

// x|s, extra-small: 0px
// s|m, small: 600px
// m|d, medium: 900px
// l|g, large: 1200px
// x|l, extra-large: 1536px

export let theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 900,
            desktop: 1140,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#0E73F6',
            light: '#f4f7ff',
        },
        secondary: {
            main: '#e0e8ff',
            light: '#e0e8ff33',
        },
        info: {
            main: '#6E8BB7',
            light: '#ffffff',
        },
        error: {
            main: '#F50000',
            light: '#F5000033',
        },
        warning: {
            main: '#01CAB0',
            light: '#01CAB033',
        },
        common: {
            black: '#18191f',
        },
    },
    shadows: ['0px 12px 24px 0px #5B68713D', '0px 0px 1px 0px #E5E9EB'],
    typography: {
        fontFamily: `'InterRegular', sans-serif`,
    },
    components: {
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
                fixed: true,
                maxWidth: 'xl',
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableFocusRipple: true,
                disableRipple: true,
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 12px 24px 0px #5B68713D',
                    borderRadius: '6px',
                },
            },
        },
        MuiPopper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 12px 24px 0px #5B68713D',
                    borderRadius: '6px',
                },
            },
        },
    },
});

theme = createTheme(theme, {
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthXl: {
                    [theme.breakpoints.down('desktop')]: {
                        padding: '0 16px',
                        maxWidth: '100%',
                    },
                    [theme.breakpoints.up('desktop')]: {
                        maxWidth: '1120px',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.common.white,
                    boxShadow: theme.shadows[1],
                    borderRadius: '8px',
                    padding: '18px 0px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                sizeSmall: {
                    fontSize: 14,
                    padding: '6px 38px',
                    borderRadius: 8,
                },
                sizeMedium: {
                    fontSize: 14,
                    padding: '6px 38px',
                    borderRadius: 8,
                },
                sizeLarge: {
                    fontSize: 14,
                    padding: '6px 38px',
                    borderRadius: 8,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    [theme.breakpoints.down('tablet')]: {
                        fontSize: 24,
                        fontFamily: `'InterBold', sans-serif`,
                    },
                    [theme.breakpoints.between('tablet', 'desktop')]: {
                        fontSize: 40,
                        fontFamily: `'InterBold', sans-serif`,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontSize: 40,
                        fontFamily: `'InterBold', sans-serif`,
                    },
                },
                h2: {
                    [theme.breakpoints.down('desktop')]: {
                        fontSize: 18,
                        fontFamily: `'InterBold', sans-serif`,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontSize: 24,
                        fontFamily: `'InterRagular', sans-serif`,
                    },
                },
                h3: {
                    [theme.breakpoints.down('desktop')]: {
                        fontSize: 16,
                        fontFamily: `'InterMedium', sans-serif`,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontFamily: `'InterMedium', sans-serif`,
                        fontSize: 18,
                    },
                },
                h4: {
                    [theme.breakpoints.down('desktop')]: {
                        fontSize: 16,
                        fontFamily: `'InterRegular', sans-serif`,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontFamily: `'InterRegular', sans-serif`,
                        fontSize: 20,
                    },
                },
                body1: {
                    fontFamily: `'InterMedium', sans-serif`,
                    fontSize: 14,
                },
                body2: {
                    fontFamily: `'InterRegular', sans-serif`,
                    fontSize: 13,
                },
                subtitle1: {
                    fontFamily: `'InterRegular', sans-serif`,
                    fontSize: 12,
                    color: theme.palette.grey[600],
                },
                subtitle2: {
                    fontFamily: `'InterRegular', sans-serif`,
                    fontSize: 10,
                },
            },
        },
    },
});
