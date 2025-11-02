document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header');
  const contents = document.querySelectorAll('.accordion-content');

  headers.forEach((header, idx) => {
    const content = contents[idx];
    const subButtons = content.querySelectorAll('.sub-button');

    // Accordion ochish/yopish
    header.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');

      // Barcha boshqa accordionlarni yopish
      contents.forEach((c, i) => {
        if (c !== content) {
          c.classList.remove('open');
          headers[i].classList.remove('active');
        }
      });

      // Joriy accordionni o'zgartirish
      content.classList.toggle('open', !isOpen);
      header.classList.toggle('active', !isOpen);
    });

    // Sub-button bosilganda active (faqat o'z guruhida)
    subButtons.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation(); // Header bosilmasin

        // Faqat shu guruhdagi buttonlardan active olib tashlash
        subButtons.forEach(b => b.classList.remove('active'));

        // Joriy buttonni active qilish (matn + dot rangi o'zgaradi)
        btn.classList.add('active');
      });
    });
  });
});