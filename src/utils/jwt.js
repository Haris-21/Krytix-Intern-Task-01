import { jwtDecode } from "jwt-decode";

export function decodeJWT(token) {
  return jwtDecode(token);
}
