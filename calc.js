export default function(){
  /** 计算位置 */
  calcPosition(ref, width, height) {
    /** 取 node 节点 */
    let el = ref.current

    /** 取节点与视窗的距离 */
    let { right, bottom } = el.getBoundingClientRect()

    let x = 'right', y = 'bottom'

    /** 节点要显示的元素与视窗宽高比较 */
    if (window.innerHeight < bottom + height) {
      y = 'top'
    }

    if (window.innerWidth < right + width) {
      x = 'left'
    }

    /** 吐出 left right top bottom 四个方向的字符串 */
    return [x, y].join(' ')

    /** 通过类的方式输出,其实是合理的方式 */
  }
}