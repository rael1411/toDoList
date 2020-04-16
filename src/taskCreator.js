//factory function to create tasks
const taskCreator = (name, description, dueDate, priority) => {
    if (!priority) {
        priority = 2;
    }
    return { name, description, dueDate, priority };
};

export { taskCreator }