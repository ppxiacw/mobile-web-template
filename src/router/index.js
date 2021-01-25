import Vue from 'vue';
import Router from 'vue-router';
import { constantRouterMap } from './routers';

Vue.use(Router);

const createRouter = () => new Router({
  routes: constantRouterMap,
  mode: 'hash',
});

const router = createRouter();


router.beforeEach(async (to, from, next) => {
    next()
});

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
