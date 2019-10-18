class Compile {
  constructor(el, vm) {
    this.vm = vm
    /* 保存传入的dom节点 */
    this.el = document.querySelector(el)
    /* 初始化fragment用于保存虚拟节点对象 */
    this.fragment = null
    /* 用于保存多个 {{ }} 中的值合集 */
    this.val = this.texts = ''

    /* 初始化 */
    this.init()
  }

  init() {
    if(this.el) {
      /* 初始化fragment虚拟节点, 将所有Dom移入其中处理 */
      this.fragment = this.nodeToFragment(this.el)
      /* 处理虚拟节点内的内容 */
      this.compileElement(this.fragment)
      /* 处理完后再将节点移入原Dom节点 */
      this.el.appendChild(this.fragment)
    } else {
      console.log('Dom元素不存在')
    }
  }

  /* 将节点转换为fragment虚拟节点 */
  nodeToFragment (el) {
    let fragment = document.createDocumentFragment()
    let child = el.firstChild
    while (child) {
      /* 将Dom节点移入fragment中 */
      fragment.appendChild(child)
      /* append会将Dom从原Dom树中移除 */
      child = el.firstChild
    }
    return fragment
  }

  /* 处理传入的fragment节点 */
  compileElement(el) {
    let childNodes = el.childNodes
    Array.prototype.slice.call(childNodes).forEach(node => {
      /* 将Dom节点中的 {{ }} 匹配出来 */
      let reg = new RegExp(/\{\{((?:.|\n)+?)\}\}/g),
      text = node.textContent,
      /* 处理多个 {{ }} 的情况 */
      texts = node.textContent

      /* 保存正则匹配结果, exec会从当前匹配到的字符之后继续匹配, g为全局匹配标识 */
      let flag = reg.exec(text)
      if(this.isElement(node)) {
        this.compile(node)
      } else if(this.isTextNode(node) && flag) {
        /* 匹配文本内所有的 {{ }} */
        while(flag) {
          /* 处理 {{ }} 中的空格 */
          if(flag[1].includes(' ')) flag[1] = flag[1].split(' ').join('')
          this.compileText(node, flag[1])
          texts = texts.replace(flag[0], this.texts)
          flag = reg.exec(text)
        }
        if(texts) node.textContent = texts
        this.val = this.texts = ''
        
      }

      /* 递归遍历Dom下所有子节点 */
      if(node.childNodes && node.childNodes.length) {
        this.compileElement(node)
      }
    })
  }

  /* 初始化文本内容, node为Text节点, exp为绑定的key */
  compileText(node, exp) {
    let initText = this.vm[exp]

    /* 更新文本数据 */
    this.updateText(node, initText)
    new Watcher(this.vm, exp, value => {
      this.updateText(node, value)
    })
  }

  compile(node) {
    /* element上的属性 */
    let attrs = node.attributes
    Array.prototype.forEach.call(attrs, attr => {
      /* attr的value对应data中的key值 */
      let exp = attr.value
      this.attrType(node, this.vm, exp, attr)
      // if(this.attrType(node, this.vm, exp, attr)) {

      // }
    })
  }

  /* 判断当前属性类型 */
  attrType(node, vm, exp, attr) {
    /* on: 与 : 判断冲突, 优先判断是否为v-on: */
    let event = this.isEventDirective(attr)
    let atr = this.isDirective(attr)
    let dir = attr.name.substring(event)
    if(event) {
      this.compileEvent(node, vm, exp, dir)
    } else if(atr) {
      attr.name.substring(atr)
      this.compileModel(node, vm, exp, dir)
    }
  }

  /* 当前类型为事件 */
  compileEvent(node, vm, exp, dir) {
    /* 判断当前事件在methods中是否存在 */
    let cb = vm.methods && vm.methods[exp]
    if(dir && cb) {
      /* 若使用call会立即执行cb函数, 而bind是将Vue的vm实例(this)绑定到cb函数中, 若不绑定则调用methods中方法时会取不到Vue实例中this里的值 */
      node.addEventListener(dir, cb.bind(vm), false)
    }
  }

  compileModel(node, vm, exp, dir) {
    let modelVal = this.vm[exp]
    if(~dir.indexOf('model')) this.updateModel(node, modelVal)
    new Watcher(this.vm, exp, value => {
      this.updateModel(node, value)
    })
    node.addEventListener('input', e => {
      /* 判断当前的值与输入后input的值是否相等 */
      let newVal = e.target.value
      if (modelVal === newVal) {
        return
      }
      this.vm[exp] = modelVal = newVal
    }, false)
  }

  /* 更新当前节点内 {{ }} 的值, 将其绑定vm实例中的data里对应属性 */
  updateText(node, value) {
    /* 单个 {{ }} */
    node.textContent = typeof value === 'undefined' ? '' : value
    /* 多个 {{ }} 时处理方案 */
    this.val += typeof value === 'undefined' ? '' : value
    this.texts = typeof value === 'undefined' ? '' : value
  }

  /* 更新双向绑定中model的值 */
  updateModel(node, value, oldValue) {
    /* 判断value(vm实例中对应的变量)当前是否有值 */
    return node.value = value === 'undefined' ? '' : value
  }

  /* 判断属性是否为 v- 开头 */
  isDirective(attr) {
    // && !~attr.name.indexOf('on:')
    return (!!~attr.name.indexOf('v-') ? 2 : false)
      ||  (!!~attr.name.indexOf(':') ? 1 : false)
      ||  false
  }

  /* 判断属性是否为事件 */
  isEventDirective(attr) {
    return (!!~attr.name.indexOf('on:') ? 5 : false)
      ||  (!!~attr.name.indexOf('@') ? 1 : false)
      ||  false
  }

  /* 判断当前节点是否为Element标签 */
  isElement(node) {
    return node.nodeType === 1
  }
  /* 判断当前节点是否为Text */
  isTextNode(node) {
    return node.nodeType === 3
  }
}