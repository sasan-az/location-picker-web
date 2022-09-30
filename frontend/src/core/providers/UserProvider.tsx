import React, { ReactNode, useCallback } from "react";
import { User } from "features/auth/types";
import useStateStorage from "core/hooks/useStateStorage";
import { userKey } from "core/constants/localStorage";
import { getUser } from "features/auth/apis";
import { useQuery, useQueryClient } from "react-query";
import useStateCookie from "core/hooks/useStateCookie";
import { userTokenKey } from "core/constants/cookies";

type UserContext = {
  user: User | null;
  setUser: (user: User) => Promise<void>;
  token: string | null;
  setToken: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const UserContext = React.createContext<UserContext | undefined>(
  undefined
);

type Prop = {
  children: ReactNode;
};

const UserProvider = (prop: Prop): JSX.Element => {
  const queryClient = useQueryClient();

  const [user, setUser] = useStateStorage<User | null>(userKey, null);

  const [token, setToken] = useStateCookie<string | null>(userTokenKey, null);

  const {} = useQuery("user", getUser, {
    onSuccess: async (data) => await setUser(data),
    enabled: token !== null,
  });

  const logout = useCallback(async () => {
    await Promise.all([setUser(null), setToken(null)]);
    await queryClient.removeQueries();
  }, [queryClient, setUser, setToken]);

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        setUser,
        setToken,
        token,
      }}
    >
      {prop.children}
    </UserContext.Provider>
  );
};

function useUser(): UserContext {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export { UserProvider, useUser };
