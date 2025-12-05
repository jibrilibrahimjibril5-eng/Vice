// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ===== Smooth Scroll Animation =====
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===== Active Nav Highlighting While Scrolling =====
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navItems.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});

// ===== Intersection Animation =====
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});

revealElements.forEach(el => observer.observe(el));

// ===== Contact Form (EmailJS) =====
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        document.getElementById("send-btn").innerText = "Sending...";

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        try {
            await emailjs.send(
                "service_lpmq1v9",
                "template_6d49n9b",
                params,
                "c6UP8nIoe5xpREoya"
            );

            document.getElementById("send-btn").innerText = "Sent ✔️";
            alert("Message Sent Successfully!");
            contactForm.reset();
        } catch (error) {
            console.log(error);
            document.getElementById("send-btn").innerText = "Failed ❌";
            alert("Failed to send your message. Try again.");
        }
    });
}