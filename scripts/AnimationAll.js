let controller = new ScrollMagic.Controller();

var bar = new ProgressBar.Path("#Opaque_Ring", {
  easing: "easeInOut",
  duration: 800,
});

// page2
new ScrollMagic.Scene({
  triggerElement: ".trig1",
})
  .setTween(".mainText", 1, { backgroundColor: "#213046" })
  .addTo(controller)
  .on("enter", () => {
    bar.set(0);
    bar.animate(0.16);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig1",
})
  .setTween(".svgCont", 1, { backgroundColor: "#213046" })
  .addTo(controller)
  .on("leave", () => {
    bar.set(0.16);
    bar.animate(0.0);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig1",
})
  .setTween(".mainImg", 1, { backgroundColor: "#121a26" })
  .addTo(controller);

// page3
new ScrollMagic.Scene({
  triggerElement: ".trig2",
})
  .setTween(".mainText", 1, { backgroundColor: "rgb(61, 6, 68)" })
  .addTo(controller)
  .on("enter", () => {
    bar.set(0.16);
    bar.animate(0.35);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig2",
})
  .setTween(".svgCont", 1, { backgroundColor: "rgb(61, 6, 68)" })
  .addTo(controller)
  .on("leave", () => {
    bar.set(0.35);
    bar.animate(0.16);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig2",
})
  .setTween(".mainImg", 1, { backgroundColor: "rgb(121, 3, 121)" })
  .addTo(controller);

// page4
new ScrollMagic.Scene({
  triggerElement: ".trig3",
})
  .setTween(".mainText", 1, { backgroundColor: "rgba(204, 158, 9)" })
  .addTo(controller)
  .on("enter", () => {
    bar.set(0.35);
    bar.animate(0.5);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig3",
})
  .setTween(".svgCont", 1, { backgroundColor: "rgba(204, 158, 9)" })
  .addTo(controller)
  .on("leave", () => {
    bar.set(0.5);
    bar.animate(0.35);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig3",
})
  .setTween(".mainImg", 1, { backgroundColor: "rgba(170, 132, 6)" })
  .addTo(controller);

// page5
new ScrollMagic.Scene({
  triggerElement: ".trig4",
})
  .setTween(".mainText", 1, { backgroundColor: "rgb(45, 17, 63)" })
  .addTo(controller)
  .on("enter", () => {
    bar.set(0.5);
    bar.animate(0.65);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig4",
})
  .setTween(".svgCont", 1, { backgroundColor: "rgb(45, 17, 63)" })
  .addTo(controller)
  .on("leave", () => {
    bar.set(0.65);
    bar.animate(0.5);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig4",
})
  .setTween(".mainImg", 1, { backgroundColor: "rgb(98, 4, 160)" })
  .addTo(controller);

// page6
new ScrollMagic.Scene({
  triggerElement: ".trig5",
})
  .setTween(".mainText", 1, { backgroundColor: "rgb(124, 39, 79)" })
  .addTo(controller)
  .on("enter", () => {
    bar.set(0.65);
    bar.animate(0.83);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig5",
})
  .setTween(".svgCont", 1, { backgroundColor: "rgb(124, 39, 79)" })
  .addTo(controller)
  .on("leave", () => {
    bar.set(0.83);
    bar.animate(0.65);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig5",
})
  .setTween(".mainImg", 1, { backgroundColor: "rgb(223, 67, 140)" })
  .addTo(controller);

// page7
new ScrollMagic.Scene({
  triggerElement: ".trig6",
})
  .setTween(".mainText", 1, { backgroundColor: "rgb(33, 85, 56)" })
  .addTo(controller)
  .on("enter", () => {
    bar.set(0.83);
    bar.animate(1);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig6",
})
  .setTween(".svgCont", 1, { backgroundColor: "rgb(33, 85, 56)" })
  .addTo(controller)
  .on("leave", () => {
    bar.set(1);
    bar.animate(0.83);
  });

new ScrollMagic.Scene({
  triggerElement: ".trig6",
})
  .setTween(".mainImg", 1, { backgroundColor: "rgb(83, 235, 151)" })
  .addTo(controller);
