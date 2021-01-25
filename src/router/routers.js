
// 无权限公用路由表
export const constantRouterMap = [
  {
    path: '/',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import( '@/views/index/index.vue'),
  },
  {
    path: '*',
    name: 'error404',
    component: () => import('@/views/error-pages/error404.vue'),
  },
];

// 404需要在挂载完动态路由后，最后挂载
export const error404Router = [
  
];



