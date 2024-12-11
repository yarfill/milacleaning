///////////////////////////////////////////////////////////
// STICKY NAVIGATION

// const sectionHeroEls = document.querySelectorAll(".section-hero");

// sectionHeroEls.forEach((sectionHeroEl) => {
//   const obs = new IntersectionObserver(
//     function (entries) {
//       const ent = entries[0];

//       if (!ent.isIntersecting) {
//         document.body.classList.add("sticky-nav");
//       } else {
//         document.body.classList.remove("sticky-nav");
//       }
//     },
//     {
//       root: null,
//       threshold: 0,
//       rootMargin: "-80px",
//     }
//   );
//   obs.observe(sectionHeroEl);
// });

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky-nav");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky-nav");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-60px",
//   }
// );
// obs.observe(sectionHeroEl);