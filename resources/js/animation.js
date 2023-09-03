$(document).ready(function () {
  const animationClasses = [
    {
      initialClass: ".animated-element--fade-in",
      animatedClass: "animate-translate-final",
    },
    {
      initialClass: ".animated-element--slide-in-left",
      animatedClass: "animate-translate-final",
    },
    {
      initialClass: ".animated-element--slide-in-right",
      animatedClass: "animate-translate-final",
    },
    {
      initialClass: ".animated-element--scale-up",
      animatedClass: "animate-scale-final",
    },
  ];
  animationClasses.forEach((className) => {
    $(className.initialClass).waypoint(
      function () {
        $(this.element).addClass(className.animatedClass);
        this.destroy();
      },
      {
        offset: "75%",
      }
    );
  });
});
