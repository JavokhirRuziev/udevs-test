import { TextField as MuiTextField } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type TextFieldProps = {
    placeholder?: string;
    InputProps?: any;
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
    variant?: 'outlined' | 'filled' | 'standard';
};

const TextField = ({
    placeholder,
    InputProps,
    fullWidth,
    sx,
    variant = 'outlined',
}: TextFieldProps) => {
    return (
        <MuiTextField
            color='secondary'
            placeholder={placeholder}
            InputProps={InputProps}
            fullWidth={fullWidth}
            variant={variant}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '6px',
                    fontFamily: `'Manrope-Regular', sans-serif`,
                    fontSize: 14,
                    lineHeight: '20px',
                    bgcolor: 'common.white',
                    p: 0,
                    px: 1.2,
                    '&:hover': {
                        fieldset: {
                            borderColor: 'grey.200',
                        },
                    },
                    fieldset: {
                        borderColor: 'grey.200',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'grey.200',
                    },
                },
                '& .MuiOutlinedInput-input': {
                    py: 1,
                    '&::placeholder': {
                        fontFamily: `'Manrope-Regular', sans-serif`,
                        fontSize: 16,
                        opacity: 1,
                        color: 'grey.600',
                    },
                },

                ...sx,
            }}
        />
    );
};

export default TextField;
