import { FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, InputProps, InputRightAddon } from '@chakra-ui/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type InputFieldProps<T extends FieldValues> = InputProps & {
    register: UseFormRegister<T>;
    name: Path<T>;
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    containerStyle?: FormControlProps;
}

const InputField = <T extends FieldValues>({
    name,
    register,
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    containerStyle,
    ...rest
}: InputFieldProps<T>) => {
    return (
        <FormControl {...containerStyle} isInvalid={!!error}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                {leftIcon && (
                    <InputLeftAddon>{leftIcon}</InputLeftAddon>
                )}
                <Input {...register(name)} {...rest} name={name} />
                {rightIcon && (
                    <InputRightAddon>{rightIcon}</InputRightAddon>
                )}
            </InputGroup>
            {helperText && !error && (
                <FormHelperText>
                    {helperText}
                </FormHelperText>
            )}
            {error && (
                <FormErrorMessage>{error}</FormErrorMessage>
            )}
        </FormControl>
    )
}

export default InputField