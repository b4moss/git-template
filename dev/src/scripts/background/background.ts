/// <reference types="chrome"/>

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener((payload, _sender, sendResponse) => {
  console.log("background message", payload);
  sendResponse({ ok: true });
  return true;
});
