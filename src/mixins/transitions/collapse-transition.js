import {
  addClass,
  removeClass
} from '../util/style'

export default {
  name: 'CollapseTransition',
  functional: true,
  render(h, {
    children
  }) {
    const data = {
      on: {
        beforeEnter: function (el) {
          if (!el.dataset) el.dataset = {}
          // scrollHeight+paddingTop+paddingBottom = 实际的高度
          el.dataset.oldPaddingTop = el.style.paddingTop
          el.dataset.oldPaddingBottom = el.style.paddingBottom

          addClass(el, 'collapse-transition')

          el.style.height = '0'
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        },
        enter: function (el) {
          el.dataset.oldOverflow = el.style.overflow
          if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px'
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
          } else {
            el.style.height = ''
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
          }
          el.style.overflow = 'hidden' // 防止子元素提早显示
        },
        afterEnter: function (el) {
          removeClass(el, 'collapse-transition')
          el.style.height = ''
          el.style.overflow = el.dataset.oldOverflow
        },
        beforeLeave: function (el) {
          if (!el.dataset) el.dataset = {}

          el.dataset.oldPaddingTop = el.style.paddingTop
          el.dataset.oldPaddingBottom = el.style.paddingBottom
          el.dataset.oldOverflow = el.style.overflow

          el.style.height = el.scrollHeight + 'px'
          el.style.overflow = 'hidden'
        },
        leave: function (el) {
          if (el.scrollHeight !== 0) {
            addClass(el, 'collapse-transition')
            el.style.height = 0
            el.style.paddingTop = 0
            el.style.paddingBottom = 0
          }
        },
        afterLeave: function (el) {
          removeClass(el, 'collapse-transition')
          el.style.height = ''
          el.style.overflow = el.dataset.oldOverflow
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom

          delete el.dataset.oldPaddingTop
          delete el.dataset.oldPaddingBottom
          delete el.dataset.oldOverflow
        }
      }
    }
    return h('transition', data, children)
  }
}
