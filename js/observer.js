class Observer {
  constructor(data) {
     this.data = data
     this.walk(data)
  }

  /* 处理data数据 */
  walk(data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  defineReactive(data, key, val) {
    let dep = new Dep()
    /* 处理data中的object */
    observe(val)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if(Dep.target) dep.addSub(Dep.target)
        return val
      },
      set(newVal) {
        if(newVal === val) return
        val = newVal

        dep.notify()
      }
    })
  }
}

let observe = (value, vm) => {
  console.log(value)
  /* 监听data数据列表 */
  if(!value || typeof value !== 'object') return
  return new Observer(value)
}

/* Dep */
class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    /* 储存的是 Dep.target */
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => {
      /* 当前sub储存的是Watcher的this指向, 详见Watcher的get函数, Dep.target = this */
      sub.update()
    })
  }
}
/* 定义Dep的静态属性target */
Dep.target = null