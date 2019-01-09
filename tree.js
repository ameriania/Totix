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
     * 默认为根节点的,指定节点后,只搜索节点的最小值
     */
    min(node) {
        const minNode = (node) => {
            return node ? (node.left ? minNode(node.left) : node) : null
        }

        return minNode(node || this.root)
    }

    /**
     * 最大值
     * 默认为根节点的,指定节点后,只搜索节点的最大值
     */
    max(node) {
        const maxNode = (node) => {
            return node ? (node.right ? maxNode(node.right) : node) : null
        }

        return maxNode(node || this.root)
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

    /**
     * 删除
     * @param {string} key 
     */
    remove(key) {
        const removeNode = (node, key) => {
            if (node === null) return false

            if (node.key === key) {

                /** 无子节点 */
                if (node.left === null && node.right === null) {
                    node = null
                }

                /** 有双子节点,找右子树的最小值来替换 */
                if (node.left && node.right) {
                    node.key = this.min(node.right).key
                    this.min(node.right) = null
                }

                /** 有左子节点 */
                if (node.left) {
                    node.key = node.left.key
                    node.left = null
                }

                /** 有右子节点 */
                if (node.right) {
                    node.key = node.right.key
                    node.right = null
                }
            }

            return removeNode((key < node.key) ? node.left : node.right, key)
        }

        removeNode(this.root, key)
    }
}

