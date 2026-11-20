/** OIDC 服务端统一响应格式 */
export interface OidcResponseBody<T = any> {
  success: boolean;
  code: number;
  msg: string;
  data?: T;
  detail?: string | null;
}

/** 当前用户信息（roles 为角色编码数组，与 claims 中的 roles 一致） */
export interface OidcUserInfo {
  sub: number;
  name: string;
  username: string;
  realName: string;
  roles: string[];
}

/** 自助修改密码请求体 */
export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
