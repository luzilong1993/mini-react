import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement(virtualDOM, container,oldDOM) {
    let newElement = createDOMElement(virtualDOM);
    // 将转换之后的dom对象转换到页面中
    container.appendChild(newElement)
    if(oldDOM) {
        container.insertBefore(newElement, oldDOM);
    } else {
        container.appendChild(newElement)
    }
    // 判断旧的dom是否存在，如果存在删除
    if(oldDOM) {
        unmountNode(oldDOM)
    }

    let component = virtualDOM.component;

    if(component) {
        component.setDom(newElement)
    }
}