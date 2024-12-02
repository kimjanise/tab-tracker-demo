interface TabMetadata {
    universalId: string;
    url: string;
    title: string;
    lastSeen: number;
    taskId?: string;
}

export class TabRegistry {
    static async getTab(tab: chrome.tabs.Tab): Promise<TabMetadata | null> {
        if (!tab.url) return null;
        const storage = await chrome.storage.local.get('tabRegistry');
        return storage.tabRegistry?.[tab.url] || null;
    }

    static async trackTab(tab: chrome.tabs.Tab): Promise<TabMetadata> {
        if (!tab.url) throw new Error('Tab has no URL');

        const storage = await chrome.storage.local.get('tabRegistry');
        const registry = storage.tabRegistry || {};

        // Update existing tab
        if (registry[tab.url]) {
            registry[tab.url].lastSeen = Date.now();
            registry[tab.url].title = tab.title || registry[tab.url].title;
        } else {
            // Create new tab entry
            registry[tab.url] = {
                universalId: crypto.randomUUID(),
                url: tab.url,
                title: tab.title || '',
                lastSeen: Date.now()
            };
        }

        await chrome.storage.local.set({ tabRegistry: registry });
        return registry[tab.url];
    }
}