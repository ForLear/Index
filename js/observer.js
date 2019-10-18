class Observer {
  constructor(value) {
     
  }
}

let observer = (value, vm) => {
  if(!value || typeof value !== 'object') return
  return new Observer(value)
}

/* Dep */
class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => {
      /* 更新sub */
      // sub.update()
    })
  }
}
/* 定义Dep的静态属性target */
Dep.target = null