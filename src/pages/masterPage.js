import wixLocation from 'wix-location';

$w.onReady(() => {
  wixLocation.onChange((location) => {
    window.parent.postMessage({ url: location.url }, "*");
  });
});
