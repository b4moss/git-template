/// <reference types="chrome"/>

console.log("Content script loaded");

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  console.log("content script message", message);
  sendResponse({ ok: true });
  return true;
});
