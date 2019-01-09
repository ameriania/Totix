/**
 * 树节点结构
 */
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

/**
 * 二叉搜索树
 */
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    /**
     * 插入操作,可以存储各种值
     * @param {any} key 
     */
    insert(key) {
        const newNode = new Node(key)

        const insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }

        if (!this.root) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }

    /**
     * 先序遍历
     * 根=>左子树=>右子树
     * @param {function} cb 
     */
    preOrderTraverse(cb) {
        const preOrderTraverseNode = (node, cb) => {
            if (node !== null) {
                cb(node.key)
                preOrderTraverseNode(node.left, cb)
                preOrderTraverseNode(node.right, cb)
            }
        }
        preOrderTraverseNode(this.root, cb)
    }

    /**
     * 中序遍历
     * 左子树=>根=>右子树
     * @param {function} cb 
     */
    inOrderTraverse(cb) {
        const traverse = (node, cb) => {
            if (node !== null) {
                traverse(node.left, cb)
                cb(node.key)
                traverse(node.right, cb)
            }
        }
        traverse(this.root, cb)
    }

    /**
     * 后序遍历
     * 左子树=>右子树=>根
     * @param {function} cb 
     */
    postOrderTraverse(cb) {
        const traverse = (node, cb) => {
            if (node !== null) {
                traverse(node.left, cb)
                traverse(node.right, cb)
                cb(node.key)
            }
        }
        traverse(this.root, cb)
    }

    /**
     * 最小值
     */
    min() {
        const minNode = (node) => {
            return node ? (node.left ? minNode(node.left) : node) : null
        }

        return minNode(this.root)
    }

    /**
     * 最大值
     */
    max() {
        const maxNode = (node) => {
            return node ? (node.right ? maxNode(node.right) : node) : null
        }

        return maxNode(this.root)
    }

    /**
     * 查找
     * @param {string} key 
     */
    search(key) {
        const searchNode = (node, key) => {
            if (node === null) return false
            if (node.key === key) return node
            return searchNode((key < node.key ? node.left : node.right), key)
        }

        searchNode(this.root, key)
    }
}

