chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ colorFilter: 'none' });
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const currentFilter = document.documentElement.style.filter;
        if (currentFilter) {
          document.documentElement.style.filter = '';
        } else {
          document.documentElement.style.filter = 'url(#protanopia)';
        }
      }
    });
  });
  