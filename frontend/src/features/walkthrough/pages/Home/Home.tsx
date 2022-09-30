import { ReactElement } from "react";
import Container from "core/components/Container";
import * as Styled from "./styles";
import { useUser } from "core/providers/UserProvider";

const Home = (): ReactElement => {
  const { user, token, logout } = useUser();
  return (
    <main>
      <Container flexDirection={"column"} width={"100%"} alignItems={"center"}>
        <Styled.Header>Welcome to location tracker app!</Styled.Header>

        {!token ? (
          <>
            <Styled.Title>
              To see your pins please login to your account
            </Styled.Title>
            <Container my={"10px"}>
              <Styled.Button link={"/login"}>Login</Styled.Button>
              <Styled.Button link={"/register"}>Register</Styled.Button>
            </Container>
          </>
        ) : user ? (
          <>
            <Styled.Title>Hi {user.email}</Styled.Title>
            <Container my={"10px"}>
              <Styled.Button link={"/dashboard"}>Dashboard</Styled.Button>
              <Styled.Button link={"/location"}>Add Location</Styled.Button>
              <Styled.Button onClick={() => logout()}>Logout</Styled.Button>
            </Container>
          </>
        ) : null}
      </Container>
    </main>
  );
};

export default Home;
