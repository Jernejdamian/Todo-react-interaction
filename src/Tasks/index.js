import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {
            tasks.map(task => (
                <li className={`task ${task.done && hideDone ? "tasks__item--hidden" : ""}`}>
                    <button
                        onClick={() => toggleTaskDone(task.id)}
                        className="task__button task__button--done js-done">{task.done ? "✔️" : ""}</button>
                    <span className={`task__content ${task.done ? "task__content--done" : ""}`}>{task.id} - {task.content}</span>
                    <button
                        onClick={() => removeTask(task.id)}
                        className="task__button task__button--remove js-remove">🗑</button>
                </li>
            ))
        }
    </ul>
)

export default Tasks;