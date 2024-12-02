import React, { useState } from 'react';
import { TabList } from './TabList';
export const TodoItem = ({ todo, toggleActive, toggleTodo, deleteTodo, removeTab }) => {
    const [selectedTabId, setSelectedTabId] = useState(null);
    return (React.createElement("li", { key: todo.id },
        React.createElement("div", { onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleActive(todo.id);
            }, style: {
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                padding: "8px",
                backgroundColor: todo.active ? "#e0e0e0" : "transparent",
                cursor: "pointer",
                borderRadius: "4px"
            } },
            React.createElement("input", { type: "checkbox", checked: todo.completed, onChange: (e) => {
                    e.stopPropagation();
                    toggleTodo(todo.id);
                } }),
            React.createElement("span", { style: {
                    marginLeft: "8px",
                    textDecoration: todo.completed ? "line-through" : "none",
                    flex: 1
                } }, todo.text),
            React.createElement("button", { onClick: (e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                }, style: { marginLeft: "8px" } }, "Delete")),
        todo.active && todo.tabs && todo.tabs.length > 0 && (React.createElement(TabList, { tabs: todo.tabs, todoId: todo.id, removeTab: removeTab, selectedTabId: selectedTabId, onTabSelect: setSelectedTabId }))));
};
