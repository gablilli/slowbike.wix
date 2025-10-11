$w.onReady(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      window.parent.postMessage({ url: window.location.href }, '*');
    });
  }
});
