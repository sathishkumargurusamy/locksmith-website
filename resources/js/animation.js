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

  $("#counter1").waypoint(
    function () {
      initializeCounters();
      this.destroy();
    },
    {
      offset: "75%",
    }
  );

  function initializeCounters() {
    const target1 = 900;
    const target2 = 460;
    const target3 = 16;

    // Function to update the each counters
    function updateCounters() {
      let current1 = parseInt($("#counter1").text());
      let current2 = parseInt($("#counter2").text());
      let current3 = parseInt($("#counter3").text());

      if (current1 < target1) {
        current1 += Math.floor(Math.random() * 5) + 1;
      }

      if (current2 < target2) {
        current2 += Math.floor(Math.random() * 5) + 1;
      }

      if (current3 < target3) {
        current3 += Math.floor(Math.random() * 5) + 1;
      }

      $("#counter1").text(current1);
      $("#counter2").text(current2);
      $("#counter3").text(current3);

      if (current1 >= target1 && current2 >= target2 && current3 >= target3) {
        clearInterval(intervalId);
      }
    }
    const interval = 0.1;
    const intervalId = setInterval(updateCounters, interval);
  }
});
