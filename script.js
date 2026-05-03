window.addEventListener('load', () => { gsap.to('#loader', { opacity: 0, duration: 0.5, delay: 0.5, onComplete: () => document.getElementById('loader').style.display = 'none' }); });
document.addEventListener('mousemove', (e) => { const cursor = document.getElementById('custom-cursor'); if (cursor) { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; } });
document.getElementById('menu-toggle').addEventListener('click', () => { document.getElementById('mobile-menu').classList.toggle('hidden'); });
document.querySelectorAll('#mobile-menu a').forEach(link => { link.addEventListener('click', () => { document.getElementById('mobile-menu').classList.add('hidden'); }); });

// Tab functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.classList.remove('bg-coffee', 'text-white'); b.classList.add('border', 'border-coffee', 'text-coffee'); });
    this.classList.add('active', 'bg-coffee', 'text-white');
    this.classList.remove('border', 'border-coffee', 'text-coffee');
    const category = this.dataset.category;
    document.querySelectorAll('.menu-item').forEach(item => {
      if (item.dataset.category === category) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// Reveal animations (GSAP ScrollTrigger)
gsap.utils.toArray('[data-reveal]').forEach(el => {
  gsap.fromTo(el, { opacity: 0, y: 30 }, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
  });
});