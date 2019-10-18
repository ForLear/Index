class Vue {
  constructor(options) {
    this.data = options.data
    this.methods = options.methods
    
    /* 获取data对象的key */
    Object.keys(this.data).forEach(item => {
      this.proxyKey(item)
    })

    observe(this.data)
    new Compile(options.el, this)
    /* 所有事件处理完毕后执行mounted, 将this指向当前实例 */
    options.mounted.call(this)
  }

  /**
   * @param {*} key  this.data数据指向代理
   * @memberof Vue
   */
  proxyKey(key) {
    /* Object.defineProperty this指向 */
    let self = this

    /* 将options.data代理到Vue实例中的this上 */
    Object.defineProperty(this, key, {
      /* 能否被for in / Object.keys */
      enumerable: false,
      configurable: true,
      get() {
        return self.data[key]
      },
      set(val) {
        self.data[key] = val
      }
    })
  }
}