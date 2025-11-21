import wixLocation from 'wix-location';

$w.onReady(() => {
  console.log('[WIX] onReady executed');
  wixLocation.onChange((location) => {
    console.log('[WIX] Location changed to:', location.url);
    window.parent.postMessage({ url: location.url }, "*");
  });
});
