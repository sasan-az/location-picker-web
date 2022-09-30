import { ApiResponse, post } from "core/helpers/axios";
import { LoginResponse } from "features/auth/apis/types";

export default function login(params: {
  email: string;
  password: string;
}): Promise<string> {
  return post<ApiResponse<LoginResponse>>("/auth/login", params).then(
    (res) => res.data.data.token
  );
}
