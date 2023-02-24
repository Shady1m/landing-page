
/*// Store navigation bar list in a variable
const navbarList = document.querySelector("#navbar__list");

// Store all sections in a variable
const sections = document.querySelectorAll("section");

// Create the navigation menu dynamically
for (const section of sections) {
  const li = document.createElement("li");
  li.textContent = section.getAttribute("data-nav");
  li.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });
  navbarList.appendChild(li);
}

// Add or remove active class based on the section in view
document.addEventListener("scroll", function () {
  for (const section of sections) {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop <= 50 && sectionBottom >= 50) {
      section.classList.add("your-active-class");
      const activeLink = document.querySelector(`[data-nav="${section.getAttribute("data-nav")}"]`);
      const allLinks = document.querySelectorAll("#navbar__list li");
      for (const link of allLinks) {
        link.classList.remove("active");
      }
      activeLink.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
    }
  }
});*/









// Store navigation bar list in a variable
const navbarList = document.querySelector("#navbar__list");
const f =document.querySelector("#landing__container")
// Store all sections in a variable
const sections = document.querySelectorAll("section");

// Create the navigation menu dynamically
for (const section of sections) {
  const li = document.createElement("li");
  li.textContent = section.getAttribute("data-nav");
  li.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });
  navbarList.appendChild(li);

}

// Add or remove active class based on the section in view
document.addEventListener("scroll", function () {
  for (const section of sections) {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop <= 150 && sectionBottom >= 150) {
      section.classList.add("your-active-class");
      const activeLink = document.querySelector(`[data-nav="${section.getAttribute("data-nav")}"]`);
      const allLinks = document.querySelectorAll("#navbar__list li");
      for (const link of allLinks) {
        link.classList.remove("active");
      }
      activeLink.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      
    }
  }
});

// Create new section
const newSection = document.createElement("section");
newSection.id = "section3";
newSection.setAttribute("data-nav", "Section5");
newSection.innerHTML = `
  <div class="landing__container">
    <h2>Section 5</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>
`;

// Append the new section to the end of the main tag
const main = document.querySelector("main");
main.appendChild(newSection);

// Add the new section to the navigation menu dynamically
const newLi = document.createElement("li");
newLi.textContent = newSection.getAttribute("data-nav");
newLi.addEventListener("click", function () {
  newSection.scrollIntoView({ behavior: "smooth" });
});
navbarList.appendChild(newLi);

