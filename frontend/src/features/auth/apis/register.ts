import { ApiResponse, post } from "core/helpers/axios";
import { RegisterResponse } from "features/auth/apis/types";

export default function register(params: {
  email: string;
  password: string;
  confirmPassword?: string;
}): Promise<string> {
  return post<ApiResponse<RegisterResponse>>("/auth/register", params).then(
    (res) => res.data.data.token
  );
}
