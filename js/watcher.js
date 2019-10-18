class Watcher {
  /**
   *Creates an instance of Watch.
   * @param {object}    vm    指向Vue实例this
   * @param {string}    exp   data对象的key
   * @param {function}  cb    更新text/model回调
   * @memberof Watch
   */
  constructor(vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    /* 将自己添加到订阅器 */
    this.value = this.get()
  }

  /* 更新数据, data数据变更时触发 */
  update() {
    this.run()
  }

  run() {
    /* this.vm.data[this.exp]指向当前更新的值, this.value为初始化页面时的值 */
    let value = this.vm.data[this.exp],
    oldVal = this.value
    if(value !== oldVal) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  }

  get() {
    /* Dep的静态属性target, 缓存自己 */
    Dep.target = this
    /* 此处赋值 this.vm.data[this.exp] 会调用data中属性的get函数 */
    let value = this.vm.data[this.exp]
    /* Dep的静态属性target, 释放自己 */
    Dep.target = null
    return value
  }
}