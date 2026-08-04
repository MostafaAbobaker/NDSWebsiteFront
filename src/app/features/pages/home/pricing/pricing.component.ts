import { Component, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  imports: [TranslatePipe],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  isFixed: boolean = false;

  isHidden = false;
  lastScrollTop = 0;

  activeSection: string = '';
  activeLink: HTMLElement | null = null;



  scrollToTop(event: Event) {
    event.preventDefault();
    const section = document.getElementById('homePlus');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // fallback لو مفيش section بالـ id ده
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScrollTop() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isFixed = scrollY > 150;
  }

  setActive(event: Event) {
    debugger
    event.preventDefault();
    const target = event.target as HTMLElement;
    const fragment =
      target.getAttribute('fragment') ||
      target.getAttribute('href')?.replace('#', '');

    if (fragment) {
      this.activeSection = fragment; // هنا بس بنحدث المتغير
      const section = document.getElementById(fragment);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id; // نفس المتغير
          }
        });
      },
      { threshold: 0.3 }, // قللها شوية علشان يلتقط الـ section أسرع
    );

    sections.forEach((section) => observer.observe(section));
  }

}
