import { Button, Heading } from "@chakra-ui/react";
import LoginForm from "@modules/auth/components/organisms/login-form";
import LoginTemplate from "@modules/auth/components/templates/login.template";


const LoginPage = () => {
  return (
    <LoginTemplate
      header={(
        <Heading>Seja bem-vindo!</Heading>
      )}
      form={(
        <LoginForm />
      )}
      bottomInformation={(
        <Button variant="link">Esqueceu sua senha?</Button>
      )}
    />
  )
}

export default LoginPage