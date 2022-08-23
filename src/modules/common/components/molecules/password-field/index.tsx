import InputField, { InputFieldProps } from '@modules/common/components/molecules/input-field';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type PasswordFieldProps<T extends FieldValues> = InputFieldProps<T>;

const PasswordField = <T extends FieldValues>({
    name,
    register,
    label,
    ...rest
}: PasswordFieldProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => setShowPassword((prev) => !prev);

    return (
        <InputField
            {...rest}
            name={name}
            register={register}
            label={label}
            type={showPassword ? 'text' : 'password'}
            rightIcon={showPassword ? <FaEye onClick={toggleVisibility} /> : <FaEyeSlash onClick={toggleVisibility} />}
        />
    )
}

export default PasswordField