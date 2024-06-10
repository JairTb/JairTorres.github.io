document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".links");
  
    function handleClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", handleClick);
    }
});


