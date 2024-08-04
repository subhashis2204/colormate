document.getElementById('protanopia').addEventListener('click', () => applyFilter('protanopia'));
document.getElementById('deuteranopia').addEventListener('click', () => applyFilter('deuteranopia'));
document.getElementById('tritanopia').addEventListener('click', () => applyFilter('tritanopia'));
document.getElementById('reset').addEventListener('click', () => applyFilter('reset'));

function applyFilter(type) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: setColorFilter,
      args: [type]
    });
  });
}

function setColorFilter(type) {
  switch (type) {
    case 'protanopia':
      document.documentElement.style.filter = 'url(#protanopia)';
      break;
    case 'deuteranopia':
      document.documentElement.style.filter = 'url(#deuteranopia)';
      break;
    case 'tritanopia':
      document.documentElement.style.filter = 'url(#tritanopia)';
      break;
    default:
      document.documentElement.style.filter = '';
      break;
  }
}
