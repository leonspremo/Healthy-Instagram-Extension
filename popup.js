document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('#blik').addEventListener('click', likes, false)
  document.querySelector('#bcom').addEventListener('click', comments, false)
  document.querySelector('#bsto').addEventListener('click', story, false)
  document.querySelector('#bdms').addEventListener('click', dms, false)

  function likes () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'EDfFK ygqzn')
    })
  }
  function comments () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'EtaWk')
    })
  }
  function story () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'zGtbP IPQK5 VideM')
    })
  }
  function dms () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'xWeGp')
    })
  }

}, false)