import { useCallback, useMemo } from "react";
import { FormikHelpers } from "formik/dist/types";
import { AuthType } from "features/auth/types";
import { useMutation } from "react-query";
import { login, register } from "features/auth/apis";
import { useUser } from "core/providers/UserProvider";
import { useRouter } from "next/router";

type AuthForm = {
  email: string;
  password: string;
  confirmPassword?: string;
};

type UseAuthForm = {
  initialValues: AuthForm;
  handleSubmit: (
    values: AuthForm,
    formikHelpers: FormikHelpers<AuthForm>
  ) => void;
};

export default function useAuthForm(authType: AuthType): UseAuthForm {
  const { setToken } = useUser();
  const { replace } = useRouter();

  const { mutateAsync: mutateLogin } = useMutation(login, {
    onSuccess: async (token) => {
      await setToken(token);
      await replace("/");
    },
  });
  const { mutateAsync: mutateRegister } = useMutation(register, {
    onSuccess: async (token) => {
      await setToken(token);
      await replace("/");
    },
  });

  const initialValues = useMemo(
    (): AuthForm => ({
      email: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );

  const handleSubmit = useCallback(
    async (
      { email, password, confirmPassword }: AuthForm,
      formikHelpers: FormikHelpers<AuthForm>
    ) => {
      try {
        authType === AuthType.REGISTER
          ? await mutateRegister({ email, password, confirmPassword })
          : await mutateLogin({ email, password });
      } catch (e: any) {
        const error = e.response.data.error;
        if (e.response.status === 400) {
          formikHelpers.setErrors(error);
        } else {
          alert(error);
        }
      }
    },
    [authType]
  );

  return { initialValues, handleSubmit };
}
