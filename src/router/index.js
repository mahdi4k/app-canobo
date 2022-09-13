import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TableView from '../views/TableView.vue'
import Loading from '../views/Loading.vue'
import ChartView from '../views/ChartView.vue'
import DotPlot from '../views/DotPlot.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
};
Vue.use(VueRouter)
Vue.use(Toast, options);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
  {
    path: '/loading',
    name: 'loading',
    component: Loading
  },
  {
    path: '/chart',
    name: 'chart',
    component: ChartView
  },
  {
    path: '/dot-plot',
    name: 'DotPlot',
    component: DotPlot
  }
]

const router = new VueRouter({
  routes
})

export default router
