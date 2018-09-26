/** 网格视图的计算 */
export function() {
    var colCount = Math.floor(((containerWidth - scrollBarWidth - extraPadding) / cardWidth) - 0.5);
    var rowCount = Math.floor(containerHeight / cardHeight);
}