import {useCallback, useState} from 'react'
import './App.css'

import type {Task} from './types.ts'
import {TaskCreator, TaskList, Stats} from './components'

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = useCallback((task: Task) => setTasks(tasks => [...tasks, task]), [])

    const handleChangeTask = useCallback(({id, ...rest}: Task) => setTasks(tasks => tasks.map((task) => task.id === id ? {id, ...rest} : task)), [])

    return <div>
        <TaskCreator onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onChange={handleChangeTask} />
        <Stats tasks={tasks} />
    </div>

}

export default App
