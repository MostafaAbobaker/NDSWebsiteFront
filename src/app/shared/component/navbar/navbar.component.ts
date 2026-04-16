import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private readonly _languageService = inject(LanguageService)
  private readonly _themeService = inject(ThemeService);

  lang = this._languageService.language()
  isFixed: boolean = false;

  isHidden = false;
  lastScrollTop = 0;

  langRtl:boolean = false;
  themeDark:string = 'light';
  activeSection: string = '';
  activeLink: HTMLElement | null = null;


  ngOnInit(): void {
    this.themeDark = this._themeService.theme();
  }


  toggleLang(langName : string){
    this._languageService.toggleLanguage(langName);
    this.lang = langName;
    this.langRtl = !this.langRtl;
  }
  toggleTheme(themeName: 'light' | 'dark'){
    this.themeDark = themeName;
    this._themeService.changeTheme(themeName);
  }
  /* setActive(event: Event) {
    const target = event.target as HTMLElement;
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    target.classList.add('active');
  } */


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


 /*  @HostListener('window:scroll', [])
    onWindowScroll() {

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.isFixed = currentScroll > 150;
    if (currentScroll < this.lastScrollTop &&  currentScroll != 0) {
      // المستخدم بينزل لتحت + تعدى مسافة صغيرة → اخفي الـ navbar
      this.isHidden = false;

    } else  if(currentScroll != 0){
      this.isFixed = false;
    }else {
      // المستخدم بيطلع لفوق → أظهر الـ navbar

      this.isHidden = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  } */

  setActive(event: Event) {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const fragment = target.getAttribute('fragment') || target.getAttribute('href')?.replace('#','');

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
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id; // نفس المتغير
        }
      });
    },
    { threshold: 0.3 } // قللها شوية علشان يلتقط الـ section أسرع
  );

  sections.forEach(section => observer.observe(section));
}

}
