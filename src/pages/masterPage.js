$w.onReady(function () {
  // Carica dinamicamente Lenis da CDN
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
  script.onload = () => {
    // Inizializza Lenis una volta caricato
    const lenis = new Lenis({
      lerp: 0.08,
      smooth: true,
      wheelMultiplier: 0.8
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  };
  document.head.appendChild(script);
});
