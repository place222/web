/* istanbul ignore next */
const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
/* istanbul ignore next */
export function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
};
/* istanbul ignore next */
export function addClass (el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
};

/* istanbul ignore next */
export function removeClass (el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
};

export default {
  name: 'CollapseTransition',
  functional: true,
  render (h, {
    children
  }) {
    const data = {
      on: {
        beforeEnter: function (el) {
          if (!el.dataset) el.dataset = {}
          //scrollHeight+paddingTop+paddingBottom = 实际的高度
          el.dataset.oldPaddingTop = el.style.paddingTop
          el.dataset.oldPaddingBottom = el.style.paddingBottom

          el.classList.add('collapse-transition')

          el.style.height = '0';
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        },
        enter: function (el) {
          el.dataset.oldOverflow = el.style.overflow
          if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
          } else {
            el.style.height = '';
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
          }
          el.style.overflow = 'hidden'; // 防止子元素提早显示
        },
        afterEnter: function (el) {
          el.classList.remove('collapse-transition')
          el.style.height = '';
          el.style.overflow = el.dataset.oldOverflow
        },
        beforeLeave: function (el) {
          if (!el.dataset) el.dataset = {}

          el.dataset.oldPaddingTop = el.style.paddingTop
          el.dataset.oldPaddingBottom = el.style.paddingBottom
          el.dataset.oldOverflow = el.style.overflow

          el.style.height = el.scrollHeight + 'px';
          el.style.overflow = 'hidden';
        },
        leave: function (el) {
          if (el.scrollHeight !== 0) {
            el.classList.add('collapse-transition')
            el.style.height = 0
            el.style.paddingTop = 0
            el.style.paddingBottom = 0
          }
        },
        afterLeave: function (el) {
          el.classList.remove('collapse-transition')
          el.style.height = '';
          el.style.overflow = el.dataset.oldOverflow
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        }
      }
    }
    return h('transition', data, children)
  }
}
