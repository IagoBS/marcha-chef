export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}
export function updateProfileSucess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCESS',
    payload: { profile },
  };
}
export function updateProfileFail() {
  return {
    type: '@user/UPDATE_PROFILE_FAIL',
  };
}
