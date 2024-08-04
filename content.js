const svgFilters = `
<svg xmlns="http://www.w3.org/2000/svg">
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
</svg>
`;
const div = document.createElement('div');
div.innerHTML = svgFilters;
document.body.appendChild(div);
