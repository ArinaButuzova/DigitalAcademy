document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("fade-in");

    const links = document.querySelectorAll("a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("http")
        ) {

            link.addEventListener("click", function (e) {

                e.preventDefault();

                document.body.classList.remove("fade-in");
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = href;
                }, 400);

            });

        }

    });

});