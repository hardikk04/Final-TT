import barba from "@barba/core";

const url = new URL(window.location.href);
const index = url.searchParams.get("index");

const data = JSON.parse(localStorage.getItem("products"))[index];
console.log(data);

if (document.querySelector(".title") && document.querySelector(".img")) {
  document.querySelector(".title").textContent = data.name;
  document.querySelector(".img").src = data.image;
}

const barbaJS = () => {
  barba.init({
    transitions: [
      {
        name: "from-home-transition",
        from: {
          namespace: ["home"],
        },
        leave(data) {
          return gsap.timeline().to(data.current.container, {
            opacity: 0,
          });
        },
        enter(data) {
          return gsap.timeline().from(data.next.container, {
            opacity: 0,
          });
        },
      },
      {
        name: "from-inside-page-transition",
        from: {
          namespace: ["inside"],
        },
        leave(data) {
          return gsap
            .timeline()

            .to(".curtain", {
              top: "0",
              duration: 0.4,
            });
        },
        enter(data) {
          return gsap.timeline().to(".curtain", {
            top: "-100%",
            duration: 1,
          });
        },
      },
    ],
  });
};

barbaJS();
