/**
 * 定义 枚举
 */

/**
 * 加载 Action 模式
 * FRONTEND 模式从 static-actions.ts 中加载
 * BACKEND 模式向接口请求加载
 */
export enum LoadActionTypeEnum {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
}

/**
 * 菜单页面类型
 */
export enum MenuTypeEnum {
  // 菜单类型
  MENU = 0,
  // 页面类型，实际关联 .vue 文件
  PAGE = 1,
  // 权限类型
  PERM = 2,
  // 外链
  LINK = 3,
  // iframe
  IFRAME = 4,
}

export enum EditEnum {
  ADD,
  EDIT,
  VIEW
}
