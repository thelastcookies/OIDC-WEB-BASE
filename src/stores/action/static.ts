import type { ActionRecordRaw } from '@/types/action';

export const staticActions = createTree<ActionRecordRaw>([
  {
    id: '1336647905518030848',
    actionId: 'menu',
    title: '示例菜单',
    type: MenuTypeEnum.MENU,
    icon: 'i-mdi-format-list-text',
    sort: 1,
    showInMenu: true,
    url: 'page',
    children: [{
      id: '1336647905518030849',
      pId: '1336647905518030848',
      actionId: 'page',
      title: '示例页面',
      type: MenuTypeEnum.PAGE,
      sort: 11,
      showInMenu: true,
      url: '',
      resource: 'pages/SamplePage.vue',
      meta: {
        title: '示例页面的示例标题',
        subTitle: '副标题',
        backEnable: true,
      },
    }],
  },
]);
