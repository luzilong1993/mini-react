import diff from './diff';
/**
 * 虚拟DOM转换为真实DOM
 * @param {*} virtualDOM 虚拟DOM
 * @param {*} container 容器
 * @param {*} oldDOM 旧的dom
 */
export default function render(virtualDOM, container, oldDOM = container.firstChild) {
    diff(virtualDOM, container, oldDOM)
}