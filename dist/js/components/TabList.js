import React from 'react';
import { TabItem } from './TabItem';
export const TabList = ({ tabs, todoId, removeTab, selectedTabId, onTabSelect }) => (React.createElement("div", { style: { marginLeft: "24px", marginBottom: "8px", fontSize: "0.9em" } },
    React.createElement("div", { style: { fontWeight: "bold", marginBottom: "4px" } }, "Related Tabs:"),
    React.createElement("ul", { style: { margin: 0, paddingLeft: "16px" } }, tabs.map((tab) => (React.createElement(TabItem, { key: tab.id, tab: tab, todoId: todoId, removeTab: removeTab, isSelected: selectedTabId === tab.id, onSelect: () => onTabSelect(selectedTabId === tab.id ? null : tab.id) }))))));
