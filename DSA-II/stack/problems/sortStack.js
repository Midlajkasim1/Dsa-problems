function sortDescending(stack) {
    let tempStack = []

    while (stack.length > 0) {
        let current = stack.pop()
        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > current) {
            stack.push(tempStack.pop())
        }
        tempStack.push(current)
    }

    while (tempStack.length > 0) {
        stack.push(tempStack.pop())
    }

    return stack
}
let stack = [4, 2, 1, 78, 43, 2, 544, 56]
console.log(sortDescending(stack))