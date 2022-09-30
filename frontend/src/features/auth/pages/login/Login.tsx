import { ReactElement } from "react";
import * as Styled from "./styles";
import Input from "core/components/Input";
import Container from "core/components/Container";
import { AuthType } from "features/auth/types";
import { Form, Formik } from "formik";
import useAuthForm from "features/auth/hooks/useAuthForm";

type Prop = {
  authType: AuthType;
};

const Login = (prop: Prop): ReactElement => {
  const { authType } = prop;

  const { initialValues, handleSubmit } = useAuthForm(authType);

  return (
    <main>
      <Container alignItems={"center"} flexDirection={"column"}>
        <Styled.FormContainer>
          <Styled.Header>
            <span>Please inter your credentials</span>
          </Styled.Header>
          <Container mx={"50px"} my={"20px"} flexDirection={"column"}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values, errors, touched, handleBlur, handleChange }) => (
                <Form>
                  <Input
                    placeholder={"Email"}
                    container={{ my: "5px" }}
                    value={values.email}
                    error={errors.email}
                    name={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Input
                    placeholder={"Password"}
                    container={{ my: "5px" }}
                    value={values.password}
                    error={errors.password}
                    name={"password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {authType === AuthType.REGISTER && (
                    <Input
                      placeholder={"Confirm Password"}
                      container={{ my: "5px" }}
                      value={values.confirmPassword}
                      error={errors.confirmPassword}
                      name={"confirmPassword"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                  <Styled.Button type="submit">
                    {authType === AuthType.REGISTER ? "Register" : "Login"}
                  </Styled.Button>
                </Form>
              )}
            </Formik>
          </Container>
        </Styled.FormContainer>
      </Container>
    </main>
  );
};

export default Login;
