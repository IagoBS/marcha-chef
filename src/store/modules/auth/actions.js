export function signInRequest(email, password) {
  return {
    type: '@auth/SINGIN_REQUEST',
    payload: { email, password },
  };
}
export function signInSucess(token, user) {
  return {
    type: '@auth/SINGIN_SUCESS',
    payload: { token, user },
  };
}
export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SINGUP_REQUEST',
    payload: { name, email, password },
  };
}
export function signFail() {
  return {
    type: '@auth/SIGN_FAIL',
  };
}
export function singOut() {
  return {
    type: '@user/SIGN_OUT',
  };
}
