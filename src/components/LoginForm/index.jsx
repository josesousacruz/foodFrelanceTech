import { Form, Title, Input, Button, SignUpLink } from './styles';

const LoginForm = () => {
  return (
    <Form>
      <Title>Faça login</Title>
      <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
      <Input type="password" placeholder="No mínimo 6 caracteres" />
      <Button>Entrar</Button>
      <SignUpLink>Criar uma conta</SignUpLink>
    </Form>
  );
}

export default LoginForm;
