$w.onReady(function () {
  // Crea lo <script> per caricare Lenis
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
  script.onload = () => {
    // Solo dopo il caricamento, inizializza Lenis
    const lenis = new window.Lenis({
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