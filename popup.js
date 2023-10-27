import replaceHeadlinesWithRhymes from "./content";
document.getElementById('transform-button').addEventListener('click', () => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: replaceHeadlinesWithRhymes,
    });
  });
  