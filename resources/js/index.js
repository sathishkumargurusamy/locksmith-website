$(document).ready(function () {
  let autoMobileServices = [
    "Car lockout",
    "Car key replacement",
    "Transponder key",
    "Trunk lockout",
    "Car key extraction",
    "Car ignition repair",
  ];
  let homeServices = [
    "House Lockout",
    "Lockout Change",
    "Locker key",
    "Lock installation",
    "Broken key extraction",
    "Safe Lockout",
  ];
  let commercialServices = [
    "Business lookout",
    "Lock Change",
    "Lock Rekey",
    "Master key systems",
    "High Security Locks",
    "Lock Box Change",
  ];
  autoMobileServices.forEach((el) =>
    $("#auto-service").append(
      `<div class='list-item'><i style="color: #ff932e" class="fa-solid fa-xs fa-check"></i>${el}</div>`
    )
  );
  homeServices.forEach((el) =>
    $("#home-service").append(
      `<div class='list-item'><i style="color: #ff932e" class="fa-solid fa-xs fa-check"></i>${el}</div>`
    )
  );
  commercialServices.forEach((el) =>
    $("#commercial-service").append(
      `<div class='list-item'><i style="color: #ff932e" class="fa-solid fa-xs fa-check"></i>${el}</div>`
    )
  );

  // About us section
  // Show the default tab (e.g., Tab 1) when the page loads
  openTab("tab1");

  // Click event handler for tab buttons
  $(".tab-heading").click(function () {
    let tabId = $(this).data("tab");
    openTab(tabId);
  });

  function openTab(tabId) {
    // Hide all tab content elements
    $(".tab-content").hide();

    // Deactivate all tab heading active classes
    $(".tab-heading").removeClass("tab-heading--active");

    // Show the selected tab content
    $("#" + tabId).show();

    // Activate the clicked tab button
    $(".tab-heading[data-tab='" + tabId + "']").addClass("tab-heading--active");
  }

  //FAQ section
  const queries = [
    {
      question: "How to create customer panel?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "Can a locksmith come to my location?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "How the affliate program works?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "How to delete my account?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "How to invite people with referral link?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "Is the ios app available for the phone?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "How to create customer panel?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  queries.forEach((query) => {
    $(".faq-section .cards-container").append(
      ` <div class="card cursor-pointer">
    <h2>
      <i class="fa-solid fa-plus fa-xs"></i>
      </i>${query.question}
    </h2>
    <div class="answer-content">
    ${query.answer}
    </div>
  </div>`
    );
  });
  $(".faq-section .cards-container .card").on({
    click: function () {
      // Toggle classes in answer section to display it
      $(".answer-content", this).toggleClass("answer-content--visible");
      // Toggle icons in the question section
      $(".fa-plus", this).length
        ? $(".fa-plus", this).removeClass("fa-plus").addClass("fa-minus")
        : $(".fa-minus", this).removeClass("fa-plus").addClass("fa-plus");
    },
  });

  // Testimonial Carousel section
  const testimonials = [
    {
      message:
        "Just simply amazing. Feel lucky use their service. Highly appriciate their service & Highly recommend to others.",
      customerImage: "./resources/images/testimonial-1.png",
      customerName: "Jimmy Klien",
      customerPlace: "California, USA",
    },
    {
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      customerImage: "./resources/images/testimonial-2.png",
      customerName: "John babardy",
      customerPlace: "New York, USA",
    },
  ];

  let currentIndex = 0;

  displayCurrentItem();

  /**
   * Used to display the current item's message and other stuffs.
   */
  function displayCurrentItem() {
    $(".carousel-container").fadeOut();
    $(".carousel-container").fadeIn(100, function () {
      $("#message").html(testimonials[currentIndex].message);
      $("#message").append(`<div id="customer-name" class="customer-name">
      ${testimonials[currentIndex].customerName}, <span id="customer-place">${testimonials[currentIndex].customerPlace}</span></div>`);
      $("#customer-image").attr(
        "src",
        testimonials[currentIndex].customerImage
      );
    });
  }
  /**
   * Used to update the current index based on
   * the number of testimonials present to display next item.
   */
  function showNextItem() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    displayCurrentItem();
  }
  /**
   * Used to update the current index based on
   * the number of testimonials present to display previous item.
   */
  function showPreviousItem() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    displayCurrentItem();
  }

  $("#next").click(function () {
    showNextItem();
  });
  $("#prev").click(function () {
    showPreviousItem();
  });

  // Contact form
  function isValidEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  }

  $("#contact-form").submit(function (e) {
    e.preventDefault();
    let formData = {
      name: $("#name").val(),
      number: $("#phone").val(),
      email: $("#email").val(),
      service: $("#service").val(),
    };

    if (
      formData.name === "" ||
      formData.number === "" ||
      formData.email === "" ||
      formData.service === null
    ) {
      $(".form-message").html(
        "<p class='error'><i class='fa-solid fa-circle-exclamation fa-sm fa-shake' style='color: #ff0000;'></i> All fields are required.</p>"
      );
      return;
    }
    if (!isValidEmail(formData.email)) {
      $(".form-message").html(
        "<p class='error'><i class='fa-solid fa-circle-exclamation fa-sm fa-shake' style='color: #ff0000;'></i> Invalid email address.</p>"
      );
      return;
    }
    if (formData.number.length != 10) {
      $(".form-message").html(
        "<p class='error'><i class='fa-solid fa-circle-exclamation fa-sm fa-shake' style='color: #ff0000;'></i> Invalid mobile number.</p>"
      );
      return;
    }
    $(".form-message").html("");

    $.ajax({
      type: "POST",
      url: "https://public.herotofu.com/v1/e7658f70-4a3c-11ee-ac97-dda96a2aa48a",
      data: formData,
      success: function () {
        $(".form-message").html(
          "<p class='success'><i class='fa-solid fa-circle-check fa-sm' style='color: #00ff1e;'></i>Email sent successfully.</p>"
        );
        $("#name, #number, #email, #service").val("");
      },
    });
  });

  // Project Counters section
  $("#counter1").waypoint(
    function () {
      setProjectCounts();
      this.destroy();
    },
    {
      offset: "75%",
    }
  );

  function setProjectCounts() {
    const target1 = 900;
    const target2 = 460;
    const target3 = 16;

    // Function to update the project counters
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
