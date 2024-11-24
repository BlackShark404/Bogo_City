// Optimized JavaScript (main.js)
class NavMenu {
  constructor() {
    this.offcanvas = document.getElementById('navMenu');
    if (!this.offcanvas) return;

    this.links = this.offcanvas.querySelectorAll('.nav-link');
    this.divider = this.offcanvas.querySelector('.divider');

    this.init();
  }

  init() {
    this.bindEvents();
  }

  isMobile() {
    return window.innerWidth < 992;
  }

  bindEvents() {
    this.offcanvas.addEventListener('show.bs.offcanvas', () => this.onShow());
    this.offcanvas.addEventListener('hide.bs.offcanvas', () => this.onHide());
    window.addEventListener('resize', () => this.handleResize());
  }

  onShow() {
    if (this.isMobile()) {
      this.offcanvas.classList.add('glass-effect');
      this.showDivider();
      this.addMobileClasses();
    }
  }

  onHide() {
    this.offcanvas.classList.remove('glass-effect');
    this.hideDivider();
    this.removeMobileClasses();
  }

  showDivider() {
    if (!this.divider) return;
    this.divider.style.display = 'block';
    requestAnimationFrame(() => this.divider.classList.add('show'));
  }

  hideDivider() {
    if (!this.divider) return;
    this.divider.classList.remove('show');
    setTimeout(() => {
      this.divider.style.display = 'none';
    }, 150);
  }

  addMobileClasses() {
    this.links.forEach(link => link.classList.add('in-offcanvas'));
  }

  removeMobileClasses() {
    this.links.forEach(link => link.classList.remove('in-offcanvas'));
  }

  handleResize() {
    if (!this.isMobile()) {
      this.offcanvas.classList.remove('glass-effect');
    } else if (this.offcanvas.classList.contains('show')) {
      this.offcanvas.classList.add('glass-effect');
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => new NavMenu());