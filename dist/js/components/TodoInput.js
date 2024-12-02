import React from 'react';
export const TodoInput = ({ newTodo, setNewTodo, addTodo }) => (React.createElement("form", { onSubmit: addTodo },
    React.createElement("input", { type: "text", value: newTodo, onChange: (e) => setNewTodo(e.target.value), placeholder: "Add a new todo", style: { width: "100%", marginBottom: "8px", padding: "4px" } })));
