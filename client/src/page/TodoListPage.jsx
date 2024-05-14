import TodoList from '../component/todolist/TodoListApp'
import Nav from '../component/todolist/Nav'
import FloatBottom from '../component/todolist/FloatBottom'

const TodoListPage = () => {
    return (
        <>
            <Nav />
            <TodoList />
            <FloatBottom />
        </>
    )
}

export default TodoListPage;