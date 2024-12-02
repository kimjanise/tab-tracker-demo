import React from 'react';
export const TabItem = ({ tab, todoId, removeTab, isSelected, onSelect }) => (React.createElement("li", { style: {
        marginBottom: "4px",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    } },
    React.createElement("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px",
            backgroundColor: isSelected ? "#f0f0f0" : "transparent",
            borderRadius: "4px",
            cursor: "pointer"
        }, onClick: onSelect },
        React.createElement("a", { href: tab.currentUrl, onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                chrome.tabs.create({ url: tab.currentUrl });
            }, style: { color: "#0066cc", textDecoration: "none", flex: 1, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" } }, tab.title),
        React.createElement("span", { style: { fontSize: "0.8em", color: "#666", flex: 1 } }),
        React.createElement("button", { onClick: (e) => {
                e.stopPropagation();
                removeTab(todoId, tab.id);
            }, style: {
                fontSize: "0.8em",
                padding: "2px 4px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#666",
                justifySelf: "flex-end"
            } }, "\u00D7")),
    isSelected && tab.history && tab.history.length > 0 && (React.createElement("ul", { style: {
            margin: "4px 0 0 20px",
            padding: 0,
            fontSize: "0.9em",
            color: "#666",
            listStyle: "none"
        } }, tab.history.map((url, index) => (React.createElement("li", { key: index, style: {
            marginBottom: "2px",
            padding: "2px 4px"
        } },
        React.createElement("a", { href: url, onClick: (e) => {
                e.preventDefault();
                chrome.tabs.create({ url });
            }, style: {
                color: "#666",
                textDecoration: "none",
                fontSize: "0.9em",
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            }, title: url }, url))))))));
