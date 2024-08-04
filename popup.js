document.getElementById('protanopia').addEventListener('click', () => applyFilter('protanopia'));
document.getElementById('deuteranopia').addEventListener('click', () => applyFilter('deuteranopia'));
document.getElementById('tritanopia').addEventListener('click', () => applyFilter('tritanopia'));
document.getElementById('reset').addEventListener('click', () => applyFilter('reset'));

function applyFilter(type) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: setColorFilter,
      args: [type]
    });
  });
}

function setColorFilter(type) {
  const svgFilters = `
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="protanopia">
          <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0
                                                0.558, 0.442, 0, 0, 0
                                                0, 0.242, 0.758, 0, 0
                                                0, 0, 0, 1, 0" />
        </filter>
        <filter id="deuteranopia">
          <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0
                                                0.7, 0.3, 0, 0, 0
                                                0, 0.3, 0.7, 0, 0
                                                0, 0, 0, 1, 0" />
        </filter>
        <filter id="tritanopia">
          <feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0
                                                0, 0.433, 0.567, 0, 0
                                                0, 0.475, 0.525, 0, 0
                                                0, 0, 0, 1, 0" />
        </filter>
      </defs>
    </svg>
  `;
  
  const existingDiv = document.getElementById('color-blindness-filters');
  if (existingDiv) {
    existingDiv.remove();
  }

  const div = document.createElement('div');
  div.id = 'color-blindness-filters';
  div.style.display = 'none';
  div.innerHTML = svgFilters;
  document.body.appendChild(div);

  let filterValue = '';
  switch (type) {
    case 'protanopia':
      filterValue = 'url(#protanopia)';
      break;
    case 'deuteranopia':
      filterValue = 'url(#deuteranopia)';
      break;
    case 'tritanopia':
      filterValue = 'url(#tritanopia)';
      break;
    default:
      filterValue = '';
      break;
  }
  document.documentElement.style.filter = filterValue;
}
