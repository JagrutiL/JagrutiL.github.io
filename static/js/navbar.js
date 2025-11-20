fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;

        // ============================
        // Activate Dropdown After Load
        // ============================
        const dropdownLinks = document.querySelectorAll(".dropdown-toggle");

        dropdownLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                const menu = this.nextElementSibling;

                // Close other dropdowns
                document.querySelectorAll(".dropdown-menu").forEach(m => {
                    if (m !== menu) m.style.display = "none";
                });

                // Toggle current dropdown
                menu.style.display =
                    menu.style.display === "block" ? "none" : "block";
            });
        });

        // Close when clicking outside
        document.addEventListener("click", function (e) {
            if (!e.target.closest(".dropdown")) {
                document.querySelectorAll(".dropdown-menu")
                    .forEach(menu => menu.style.display = "none");
            }
        });

    });
