const images = [
  "/assets/bell.png",
  "/assets/cherry.png",
  "/assets/seven.png",
  "/assets/takahashi.jpg"
];
const spin = () => {
  class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');
      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();
      this.timeoutId = undefined;
      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');
      this.stop.addEventListener('click', () => {
        clearTimeout(this.timeoutId);
      });
      section.appendChild(this.img);
      section.appendChild(this.stop);
      const main = document.querySelector('main');
      main.appendChild(section);
    }
    getRandomImage() {
      return images[Math.floor(Math.random() * images.length)];
    }
    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 70);
    }
  }
  const panels = [
    new Panel(),
  ];
  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    panels.forEach(panel => {
      panel.spin();
    });
  });
}
window.addEventListener("load", spin);