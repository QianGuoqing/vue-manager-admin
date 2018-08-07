import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/home-page/HomePage.vue'

import UIPage from '../views/ui-page/UiPage.vue'
import ButtonView from '../views/ui-page/button-view/ButtonView.vue'
import ModalView from '../views/ui-page/modal-view/ModalView.vue'
import LoadingView from '../views/ui-page/loading-view/LoadingView.vue'
import NotificationView from '../views/ui-page/notification-view/NotificationView.vue'
import MessageView from '../views/ui-page/message-view/MessageView.vue'
import TabView from '../views/ui-page/tab-view/TabView.vue'
import GalleryView from '../views/ui-page/gallery-view/GalleryView.vue'
import CarouselView from '../views/ui-page/carousel-view/CarouselView.vue'

import FormPage from '../views/form-page/FormPage.vue'
import LoginView from '../views/form-page/login-view/LoginView.vue'
import RegisterView from '../views/form-page/register-view/RegisterView.vue'

import TablePage from '../views/table-page/TablePage.vue'
import BasicTable from '../views/table-page/basic-table/BasicTable.vue'
import AdvaceTable from '../views/table-page/advance-table/AdvanceTable.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ui',
      name: 'UIPage',
      component: UIPage,
      children: [
        {
          path: 'button',
          name: 'ButtonView',
          component: ButtonView
        },
        {
          path: 'modal',
          name: 'ModalView',
          component: ModalView
        },
        {
          path: 'loading',
          name: 'LoadingView',
          component: LoadingView
        },
        {
          path: 'notification',
          name: 'NotificationView',
          component: NotificationView
        },
        {
          path: 'message',
          name: 'MessageView',
          component: MessageView
        },
        {
          path: 'tab',
          name: 'TabView',
          component: TabView
        },
        {
          path: 'gallery',
          name: 'GalleryView',
          component: GalleryView
        },
        {
          path: 'carousel',
          name: 'CarouselView',
          component: CarouselView
        }
      ]
    },
    {
      path: '/form',
      name: 'FormPage',
      component: FormPage,
      children: [
        {
          path: 'login',
          name: 'LoginView',
          component: LoginView
        },
        {
          path: 'register',
          name: 'RegisterView',
          component: RegisterView
        }
      ]
    },
    {
      path: '/table',
      name: 'TablePage',
      component: TablePage,
      children: [
        {
          path: 'basic',
          name: 'BasicTable',
          component: BasicTable
        },
        {
          path: 'advance',
          name: 'AdvanceTable',
          component: AdvaceTable
        }
      ]
    }
  ]
})
