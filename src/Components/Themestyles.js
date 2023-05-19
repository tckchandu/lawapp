import React from 'react';

function swapStyleSheet(sheet) {
  const themeStylesheet = document.getElementById('theme-stylesheet');
  if (themeStylesheet) {
    themeStylesheet.setAttribute('href', sheet);
  }
}

function ThemeStyles() {
  return (
    <div>
      <button onClick={() => swapStyleSheet('custom.css')}>
        Light Theme
      </button>
      <button onClick={() => swapStyleSheet('dark.css')}>
        Dark Theme
      </button>
    </div>
  );
}

export default ThemeStyles;