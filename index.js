/**
 * Author:Toti
 * Mail:mr.totihuang@gmail.com
 */
import { dedup } from './array'
import { byteTransfer } from './byteTransfer'
import { addBigNum } from './bignumber'
import { calcPosition } from './calc'
import { dragger, chunk } from './drag'
import { AttachEvent } from './eventTarget'
import { shuffle, generatePoker, dealPoker } from './shuffle'
import { getNumberStr, toCamel, countLetter, toMoney, trim } from './string'
import { curry1, curry2, debounce, throttle } from './curry'


export { dedup } from './array'
export { byteTransfer } from './array'
export { addBigNum } from './bignumber'
export { calcPosition } from './calc'
export { dragger, chunk } from './drag'
export { AttachEvent } from './eventTarget'
export { shuffle, generatePoker, dealPoker } from './shuffle'
export { getNumberStr, toCamel, countLetter, toMoney, trim } from './string'
export { curry1, curry2, debounce, throttle } from './curry'

export default {
  dedup: dedup,
  byteTransfer: byteTransfer,
  addBigNum: addBigNum,
  calcPosition: calcPosition,
  dragger: dragger,
  chunk: chunk,
  AttachEvent: AttachEvent
}