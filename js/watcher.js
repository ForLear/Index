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

  /* 更新数据, data数据变更时触发, 在observer中的set会调用notify, 若Dep列表中有值(Watcher实例), 则调用update函数 */
  update() {
    this.run()
  }

  run() {
    /* this.vm.data[this.exp]指向当前更新的值, this.value为初始化页面时的值 */
    let value = this.vm.data[this.exp],
    oldVal = this.value
    if(value !== oldVal) {
      this.value = value
      /* Watcher实例中储存了构造函数Compile中的回调函数updateText/updateModel */
      this.cb.call(this.vm, value, oldVal)
    }
  }

  get() {
    /* Dep的静态属性target, 缓存自己, 只有在页面上被调用的属性才会添加到观察者列表Dep中, target中储存当前的属性名称与它原本的值 */
    Dep.target = this
    /* 此处赋值 this.vm.data[this.exp] 会调用data中属性的get函数, 将当前实例this (Dep.target) 添加到观察者Dep的subs列表(数组)中, 后续更改时触发set属性, notify中遍历this.subs便会拥有当前的实例 */
    let value = this.vm.data[this.exp]
    /* Dep的静态属性target, 释放自己, 工具人使用完毕, 初始化它 */
    Dep.target = null
    /* 返回当前属性的初始值 */
    return value
  }
}