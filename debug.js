console.log('✅ debug.js loaded remotely');

function setPageBackgroundColor() {
  document.body.style.backgroundColor = 'lavender';
  console.log('✅ Page background color changed.');
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs && tabs.length > 0) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: setPageBackgroundColor,
    });
  }
});
