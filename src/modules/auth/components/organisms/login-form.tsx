import { Button } from "@chakra-ui/react";
import { login } from "@modules/auth/api";
import InputField from "@modules/common/components/molecules/input-field";
import PasswordField from "@modules/common/components/molecules/password-field";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LoginFormData = {
    email: string;
    password: string;
}

const LoginForm = () => {
    const [loggingIn, setLoggingIn] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

    const onSubmit = async (data: LoginFormData) => {
        console.log(`DATA => `, data);
        setLoggingIn(true);
        await login(data.email, data.password);
        setLoggingIn(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                label="E-mail"
                register={register}
                name="email"
                error={errors["email"]?.message}
            />
            <PasswordField
                label="Senha"
                register={register}
                name="password"
                error={errors["password"]?.message}
                containerStyle={{ mt: 2 }}
            />
            <Button type="submit" mt={3} w="100%" isLoading={loggingIn}>Acessar</Button>
        </form>
    )
}

export default LoginForm