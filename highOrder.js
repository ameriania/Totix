/** 
 * forEach
 */
Array.prototype.forEach = function (fn, context) {
    for (let k = 0, length = this.length; k < length; k++) {
        if (typeof fn === 'function' && Object.prototype.hasOwnProperty.call(this, k)) {
            fn.call(context, this[k], k, this)
        }
    }
}

/**
 * map
 */
Array.prototype.map = function (fn, context) {
    let arr = []
    if (typeof fn === 'function') {
        for (let k = 0, length = this.length; k < length; k++) {
            arr.push(fn.call(context, this[k], k, this))
        }
    }
    return arr
}

/** 
 * filter
 */
Array.prototype.filter = function (fn, context) {
    let arr = []
    if (typeof fn === 'function') {
        for (let k = 0, length = this.length; k < length; k++) {
            fn.call(context, this[k], k, this) && arr.push(this[k])
        }
    }
    return arr
}

/**
 * some
 */
Array.prototype.some = function (fn, context) {
    let passed = false
    if (typeof fn === 'function') {
        for (let k = 0, length = this.length; k < length; k++) {
            if (passed === true) break;
            passed = !!fn.call(context, this[k], k, this)
        }
    }
    return passed
}

/**
 * every
 */
Array.prototype.every = function (fn, context) {
    let passed = true
    if (typeof fn === 'function') {
        for (let k = 0, length = this.length; k < length; k++) {
            if (passed === false) break;
            passed = !!fn.call(context, this[k], k, this)
        }
    }
    return passed
}

/** 
 * indexof
 */
Array.prototype.indexOf = function (searchElment, fromIndex) {
    let index = -1;
    fromIndex = fromIndex * 1 || 0

    for (k = 0, length = this.length; k < length; k++) {
        if (k >= fromIndex && this[k] === searchElment) {
            index = k
            break
        }
    }

    return index
}

/**
 * reduce
 */
Array.prototype.reduce = function (callback, initialValue) {
    let previous = initialValue, k = 0, length = this.length
    if (typeof initialValue === undefined) {
        previous = this[0]
        k = 1
    }

    if (typeof callback === 'function') {
        for (k; k < length; k++) {
            this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this))
        }
    }

    return previous
}