document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", scrollToSection);
    }

    function scrollToSection(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20, // Adjust scroll position as needed
                behavior: "smooth"
            });
        }
    }

    // Modal functionality for project details
    const modalBtns = document.querySelectorAll(".project-link");

    for (const btn of modalBtns) {
        btn.addEventListener("click", openModal);
    }

    const closeModalBtn = document.querySelector(".close-modal");
    const modal = document.querySelector(".modal");

    closeModalBtn.addEventListener("click", closeModal);

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});
