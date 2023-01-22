import { Card, Form, Input, Button } from "./form";

const LoginForm = () => {
  return (
    <Card>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit"> Button </Button>
      </Form>
    </Card>
  );
};

export default LoginForm;
