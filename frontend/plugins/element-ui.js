import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import Vue from 'vue'

export default () => {
  Vue.use(Element, { locale })
}
