interface Todo {
    title: string
    description: string
    completed: boolean
    click: () => void
}

// type TodoPreview = Pick<Todo, 'title' | 'completed' | 'click'>

/**
 * K extends keyof T	约束 K 必须是 T 的键的子集
 * [P in K]	映射类型：遍历 K 中的每一个属性名 P
 * T[P]	索引访问类型：获取 T 中属性 P 的类型
 */
type PickV2<T, K extends keyof T> = {
    [P in K]: T[P]
}

type TodoPreview = PickV2<Todo, 'title' | 'completed' | 'click'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
    click: () => {
        console.log('click')
    },
}
todo.click()
