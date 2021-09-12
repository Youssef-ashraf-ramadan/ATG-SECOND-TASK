gsap.to(
  ".pizza1image,.pizza2image,.pizza3image,.pizza4image,.pizza5image,.pizza6image,.pizza7image,.karvanimg1, .karvanimg2, .karvanimg3, .karvanimg3, .karvanimg4, .karvanimg5, .erp-app, .veme11, .veme12, .nextgtv11, .nextgtv12, .melto11, .melto12",
  {
    duration: 0,
    opacity: 0,
  }
);

gsap.to(".fitnesstrackingmobile1, .fitnesstrackingmobile2", {
  duration: 0,
  opacity: 1,
});

// trig 1
new ScrollMagic.Scene({
  triggerElement: ".trigger1",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".fitnesstrackingmobile1, .fitnesstrackingmobile2", {
      duration: 0,
      opacity: 1,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger1",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(
      ".pizza1image,.pizza2image,.pizza3image,.pizza4image,.pizza5image,.pizza6image,.pizza7image",
      {
        duration: 0,
        opacity: 0,
      }
    );
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger1",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.from(".fitnesstrackingmobile1", {
      duration: 1.5,
      y: 600,
      ease: "expo.out",
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger1",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.from(".fitnesstrackingmobile2", {
      duration: 1.5,
      y: -400,
      ease: "expo.out",
    });
  });

// trig 2
new ScrollMagic.Scene({
  triggerElement: ".trigger2",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(".fitnesstrackingmobile1, .fitnesstrackingmobile2", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(
      ".pizza1image,.pizza2image,.pizza3image,.pizza4image,.pizza5image,.pizza6image,.pizza7image",
      {
        duration: 0,
        opacity: 1,
      }
    );

    gsap.from(".pizza7image,.pizza6image", {
      duration: 1,
      y: 600,
    });

    gsap.from(".pizza5image,.pizza4image", {
      duration: 1,
      y: -600,
    });

    gsap.from(".pizza1image,.pizza2image,.pizza3image", {
      duration: 0.8,
      x: 400,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger2",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(
      ".pizza1image,.pizza2image,.pizza3image,.pizza4image,.pizza5image,.pizza6image,.pizza7image",
      {
        duration: 0,
        opacity: 1,
      }
    );
  });

// trig 3
new ScrollMagic.Scene({
  triggerElement: ".trigger3",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(
      ".fitnesstrackingmobile1, .fitnesstrackingmobile2, .pizza1image,.pizza2image,.pizza3image,.pizza4image,.pizza5image,.pizza6image,.pizza7image",
      {
        duration: 0,
        opacity: 0,
      }
    );

    gsap.to(
      ".karvanimg1,.karvanimg2,.karvanimg3,.karvanimg4,.karvanimg5",
      {
        duration: 0,
        opacity: 1,
      }
    );

    gsap.from(".karvanimg3,.karvanimg5", {
      duration: 1,
      y: -400,
    });

    gsap.from(".karvanimg1,.karvanimg2", {
      duration: 1,
      y: 400,
    });

    gsap.from(".karvanimg4", {
      duration: 1,
      x: 400,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger3",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(
      ".pizza1image,.pizza2image,.pizza3image,.pizza4image,.pizza5image,.pizza6image,.pizza7image",
      {
        duration: 0,
        opacity: 1,
      }
    );

    gsap.to(
      ".karvanimg1,.karvanimg2,.karvanimg3,.karvanimg4,.karvanimg5",
      {
        duration: 0,
        opacity: 0,
      }
    );

    gsap.from(".pizza1image,.pizza2image,.pizza3image", {
      duration: 0.8,
      x: 400,
    });

    gsap.from(".pizza7image,.pizza6image", {
      duration: 1,
      y: 600,
    });

    gsap.from(".pizza5image,.pizza4image", {
      duration: 1,
      y: -600,
    });
  });

// trig 4
new ScrollMagic.Scene({
  triggerElement: ".trigger4",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(
      ".karvanimg1,.karvanimg2,.karvanimg3,.karvanimg4,.karvanimg5",
      {
        duration: 0,
        opacity: 0,
      }
    );

    gsap.to(".erp-app", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".erp-app", {
      duration: 0.7,
      y: 200,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger4",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".erp-app", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(
      ".karvanimg1,.karvanimg2,.karvanimg3,.karvanimg4,.karvanimg5",
      {
        duration: 0,
        opacity: 1,
      }
    );

    gsap.from(".karvanimg3,.karvanimg5", {
      duration: 1,
      y: -400,
    });

    gsap.from(".karvanimg1,.karvanimg2", {
      duration: 1,
      y: 400,
    });

    gsap.from(".karvanimg4", {
      duration: 1,
      x: 400,
    });
  });

// trig 5
new ScrollMagic.Scene({
  triggerElement: ".trigger5",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(".erp-app", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".veme11, .veme12", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".veme11", {
      duration: 0.7,
      y: 200,
    });

    gsap.from(".veme12", {
      duration: 0.7,
      y: -200,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger5",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".veme12, .veme11", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".erp-app", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".erp-app", {
      duration: 0.7,
      y: 200,
    });
  });

// trig 6
new ScrollMagic.Scene({
  triggerElement: ".trigger6",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(".veme12, .veme11", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".nextgtv11, .nextgtv12", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".nextgtv11", {
      duration: 0.7,
      x: -200,
    });

    gsap.from(".nextgtv12", {
      duration: 0.7,
      x: 200,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger6",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".nextgtv11, .nextgtv12", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".veme11, .veme12", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".veme11", {
      duration: 0.7,
      y: 200,
    });

    gsap.from(".veme12", {
      duration: 0.7,
      y: -200,
    });
  });

// trig 7
new ScrollMagic.Scene({
  triggerElement: ".trigger7",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(".nextgtv11, .nextgtv12", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".melto11, .melto12", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".melto11", {
      duration: 0.7,
      y: 200,
    });

    gsap.from(".melto12", {
      duration: 0.7,
      y: 400,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trigger7",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".melto11, .melto12", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".nextgtv11, .nextgtv12", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".nextgtv11", {
      duration: 0.7,
      x: -200,
    });

    gsap.from(".nextgtv12", {
      duration: 0.7,
      x: 200,
    });
  });
