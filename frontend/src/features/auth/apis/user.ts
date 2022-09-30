import { ApiResponse, get } from "core/helpers/axios";
import { User } from "features/auth/types";

export default function getUser(): Promise<User> {
  return get<ApiResponse<User>>("/users").then((res) => res.data.data);
}
