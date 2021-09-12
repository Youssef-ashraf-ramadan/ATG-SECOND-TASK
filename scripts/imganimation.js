gsap.to(
  ".pizza1Desk,.pizza2Desk,.pizza3Desk,.pizza4Desk,.pizza5Desk,.pizza6Desk,.pizza7Desk,.karvan1Desk, .karvan2Desk, .karvan3Desk, .karvan3Desk, .karvan4Desk, .karvan5Desk, .int2Desk, .veme1Desk, .veme2Desk, .nextgtv1Desk, .nextgtv2Desk, .melltoo1Desk, .melltoo2Desk",
  {
    duration: 0,
    opacity: 0,
  }
);

gsap.to(".fitnessImg1Desk, .fitnessImg2Desk", {
  duration: 0,
  opacity: 1,
});

// trig 1
new ScrollMagic.Scene({
  triggerElement: ".trig0",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".fitnessImg1Desk, .fitnessImg2Desk", {
      duration: 0,
      opacity: 1,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trig0",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(
      ".pizza1Desk,.pizza2Desk,.pizza3Desk,.pizza4Desk,.pizza5Desk,.pizza6Desk,.pizza7Desk",
      {
        duration: 0,
        opacity: 0,
      }
    );
  });

new ScrollMagic.Scene({
  triggerElement: ".trig0",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.from(".fitnessImg1Desk", {
      duration: 1.5,
      y: 600,
      ease: "expo.out",
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trig0",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.from(".fitnessImg2Desk", {
      duration: 1.5,
      y: -400,
      ease: "expo.out",
    });
  });

// trig 2
new ScrollMagic.Scene({
  triggerElement: ".trig1",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(".fitnessImg1Desk, .fitnessImg2Desk", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(
      ".pizza1Desk,.pizza2Desk,.pizza3Desk,.pizza4Desk,.pizza5Desk,.pizza6Desk,.pizza7Desk",
      {
        duration: 0,
        opacity: 1,
      }
    );

    gsap.from(".pizza7Desk,.pizza6Desk", {
      duration: 1,
      y: 600,
    });

    gsap.from(".pizza5Desk,.pizza4Desk", {
      duration: 1,
      y: -600,
    });

    gsap.from(".pizza1Desk,.pizza2Desk,.pizza3Desk", {
      duration: 0.8,
      x: 400,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trig1",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(
      ".pizza1Desk,.pizza2Desk,.pizza3Desk,.pizza4Desk,.pizza5Desk,.pizza6Desk,.pizza7Desk",
      {
        duration: 0,
        opacity: 1,
      }
    );
  });

// trig 3
new ScrollMagic.Scene({
  triggerElement: ".trig2",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(
      ".fitnessImg1Desk, .fitnessImg2Desk, .pizza1Desk,.pizza2Desk,.pizza3Desk,.pizza4Desk,.pizza5Desk,.pizza6Desk,.pizza7Desk",
      {
        duration: 0,
        opacity: 0,
      }
    );

    gsap.to(
      ".karvan1Desk,.karvan2Desk,.karvan3Desk,.karvan4Desk,.karvan5Desk",
      {
        duration: 0,
        opacity: 1,
      }
    );

    gsap.from(".karvan3Desk,.karvan5Desk", {
      duration: 1,
      y: -400,
    });

    gsap.from(".karvan1Desk,.karvan2Desk", {
      duration: 1,
      y: 400,
    });

    gsap.from(".karvan4Desk", {
      duration: 1,
      x: 400,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trig2",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(
      ".pizza1Desk,.pizza2Desk,.pizza3Desk,.pizza4Desk,.pizza5Desk,.pizza6Desk,.pizza7Desk",
      {
        duration: 0,
        opacity: 1,
      }
    );

    gsap.to(
      ".karvan1Desk,.karvan2Desk,.karvan3Desk,.karvan4Desk,.karvan5Desk",
      {
        duration: 0,
        opacity: 0,
      }
    );

    gsap.from(".pizza1Desk,.pizza2Desk,.pizza3Desk", {
      duration: 0.8,
      x: 400,
    });

    gsap.from(".pizza7Desk,.pizza6Desk", {
      duration: 1,
      y: 600,
    });

    gsap.from(".pizza5Desk,.pizza4Desk", {
      duration: 1,
      y: -600,
    });
  });

// trig 4
new ScrollMagic.Scene({
  triggerElement: ".trig3",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(
      ".karvan1Desk,.karvan2Desk,.karvan3Desk,.karvan4Desk,.karvan5Desk",
      {
        duration: 0,
        opacity: 0,
      }
    );

    gsap.to(" .int2Desk", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".int2Desk", {
      duration: 0.7,
      y: 200,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trig3",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".int2Desk", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(
      ".karvan1Desk,.karvan2Desk,.karvan3Desk,.karvan4Desk,.karvan5Desk",
      {
        duration: 0,
        opacity: 1,
      }
    );

    gsap.from(".karvan3Desk,.karvan5Desk", {
      duration: 1,
      y: -400,
    });

    gsap.from(".karvan1Desk,.karvan2Desk", {
      duration: 1,
      y: 400,
    });

    gsap.from(".karvan4Desk", {
      duration: 1,
      x: 400,
    });
  });

// trig 5
new ScrollMagic.Scene({
  triggerElement: ".trig4",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(".int2Desk", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".veme1Desk, .veme2Desk", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".veme1Desk", {
      duration: 0.7,
      y: 200,
    });

    gsap.from(".veme2Desk", {
      duration: 0.7,
      y: -200,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trig4",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".veme2Desk, .veme1Desk", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(" .int2Desk", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".int2Desk", {
      duration: 0.7,
      y: 200,
    });
  });

// trig 6
new ScrollMagic.Scene({
  triggerElement: ".trig5",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(".veme2Desk, .veme1Desk", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".nextgtv1Desk, .nextgtv2Desk", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".nextgtv1Desk", {
      duration: 0.7,
      x: -200,
    });

    gsap.from(".nextgtv2Desk", {
      duration: 0.7,
      x: 200,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trig5",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".nextgtv1Desk, .nextgtv2Desk", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".veme1Desk, .veme2Desk", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".veme1Desk", {
      duration: 0.7,
      y: 200,
    });

    gsap.from(".veme2Desk", {
      duration: 0.7,
      y: -200,
    });
  });

// trig 7
new ScrollMagic.Scene({
  triggerElement: ".trig6",
})
  .addTo(controller)
  .on("enter", () => {
    gsap.to(".nextgtv1Desk, .nextgtv2Desk", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".melltoo1Desk, .melltoo2Desk", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".melltoo1Desk", {
      duration: 0.7,
      y: 200,
    });

    gsap.from(".melltoo2Desk", {
      duration: 0.7,
      y: 400,
    });
  });

new ScrollMagic.Scene({
  triggerElement: ".trig6",
})
  .addTo(controller)
  .on("leave", () => {
    gsap.to(".melltoo1Desk, .melltoo2Desk", {
      duration: 0,
      opacity: 0,
    });

    gsap.to(".nextgtv1Desk, .nextgtv2Desk", {
      duration: 0,
      opacity: 1,
    });

    gsap.from(".nextgtv1Desk", {
      duration: 0.7,
      x: -200,
    });

    gsap.from(".nextgtv2Desk", {
      duration: 0.7,
      x: 200,
    });
  });
