window.addEventListener('popstate', () => {
  window.parent.postMessage({url: window.location.href}, '*');
});
