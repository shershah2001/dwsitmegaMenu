
const headerNavbar = document.querySelector(".header_navbar");
console.log("headerNavbar==>", headerNavbar);  // Ensure this logs your element

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting===false) {
           headerNavbar.style.transform = 'translateY(0)'
        } else {
          headerNavbar.style.transform = 'translateY(-100px)';
        }
    });
}, { root: null, threshold: 0.5 });
