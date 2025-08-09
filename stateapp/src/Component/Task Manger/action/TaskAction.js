const TaskAction = (data) => {
    return {
        type: 'TASK',
        payload: data,
    }
}

export default TaskAction;