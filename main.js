// ==========================================================================
// TechVyrn Interactive Engine (Supports all 4 pages)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('mobile-open');
      mobileMenuBtn.textContent = isOpen ? '✕' : '☰';
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileMenuBtn.textContent = '☰';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (navLinks.classList.contains('mobile-open')) {
          navLinks.classList.remove('mobile-open');
          mobileMenuBtn.textContent = '☰';
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // 2. Active Navbar Item based on current path
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      const href = link.getAttribute('href');
      if (
        (currentPath.endsWith('solutions.html') && href.includes('solutions.html')) ||
        (currentPath.endsWith('about.html') && href.includes('about.html') && !href.includes('#careers')) ||
        (currentPath.endsWith('contact.html') && href.includes('contact.html')) ||
        ((currentPath.endsWith('index.html') || currentPath === '/' || currentPath === '') && href.includes('index.html'))
      ) {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    }
  });

  // 3. Contact Form & Interest Pills Logic
  const contactForm = document.getElementById('contactFormMain');
  const interestPills = document.querySelectorAll('.interest-pill-btn');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  if (interestPills.length > 0) {
    interestPills.forEach(pill => {
      pill.addEventListener('click', () => {
        interestPills.forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('contactFullName');
      const emailInput = document.getElementById('contactWorkEmail');
      const name = nameInput ? nameInput.value : 'there';
      const email = emailInput ? emailInput.value : 'your email';

      contactForm.reset();

      // Reset pill to first
      if (interestPills.length > 0) {
        interestPills.forEach((p, idx) => {
          if (idx === 0) p.classList.add('selected');
          else p.classList.remove('selected');
        });
      }

      if (toast && toastMessage) {
        toastMessage.textContent = `Thanks ${name}! Your enquiry has been received. We'll reply to ${email} within one business day.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 5000);
      }
    });
  }

  // 4. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');

          // Close other items
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('open');
            const toggleIcon = otherItem.querySelector('.faq-toggle-icon');
            if (toggleIcon) toggleIcon.textContent = '+';
          });

          // Toggle current item
          if (!isOpen) {
            item.classList.add('open');
            const toggleIcon = item.querySelector('.faq-toggle-icon');
            if (toggleIcon) toggleIcon.textContent = '−';
          }
        });
      }
    });
  }

  // 5. Subtle 3D Tilt Effect on Hero and Product Illustrations
  const cardsToTilt = document.querySelectorAll('.hero-visual-card, .about-orbit-wrapper, .product-illustration-wrapper');
  if (cardsToTilt.length > 0 && window.matchMedia('(min-width: 1024px)').matches) {
    cardsToTilt.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // 6. Smooth Scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
