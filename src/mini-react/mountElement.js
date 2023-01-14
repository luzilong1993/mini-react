import mountNativeElement from "./mountNativeElement"
import isFunction from "./isFunction"
import mountComponent from "./mountComponent"

export default function mountElement(virtualDOM, container,oldDOM) {
    if(isFunction(virtualDOM)) {
        // 组件
        mountComponent(virtualDOM,container,oldDOM)
    } else {
        // 普通jsx元素
        mountNativeElement(virtualDOM, container,oldDOM)
    }
    
}