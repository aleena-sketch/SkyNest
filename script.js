
document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation
    const menu = document.querySelector('.menu');
    const links = document.querySelector('.nav-links');

    if (menu && links) {
        menu.addEventListener('click', () => {
            const open = links.classList.toggle('open');
            menu.setAttribute('aria-expanded', open);
        });

        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                menu.setAttribute('aria-expanded', false);
            });
        });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq button').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const open = item.classList.toggle('open');
            btn.setAttribute('aria-expanded', open);
        });
    });

    // Contact Form Validation
    const form = document.querySelector('#contactForm');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            let ok = true;

            form.querySelectorAll('[required]').forEach(field => {
                field.style.borderColor = field.value.trim() ? '#cfdedb' : '#d85c5c';

                if (!field.value.trim()) {
                    ok = false;
                }
            });

            // Email Validation
            const email = form.querySelector('#email');

            if (email && !/^\S+@\S+\.\S+$/.test(email.value.trim())) {
                email.style.borderColor = '#d85c5c';
                ok = false;
            }

            // Confirmation Message
            const note = document.querySelector('#formNotice');

            if (note) {
                note.style.display = 'block';

                if (ok) {
                    note.style.color = '#2e7d32';
                    note.textContent = 'Thank you! Your enquiry has been checked successfully. This demonstration form does not send or store messages.';
                    form.reset();
                } else {
                    note.style.color = '#d85c5c';
                    note.textContent = 'Please complete all required fields and enter a valid email address.';
                }
            }
        });
    }

    // Automatic Footer Year
    const year = document.querySelector('[data-year]');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
