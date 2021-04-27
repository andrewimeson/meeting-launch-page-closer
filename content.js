/* global chrome */
setTimeout(function () {
  chrome.runtime.sendMessage({}, function () {})
}, 6000)
