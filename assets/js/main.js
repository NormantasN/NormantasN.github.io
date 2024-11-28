
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const newsletter = document.getElementById("newsletter").checked ? "Yes" : "No";
  const referral = document.querySelector('input[name="referral"]:checked')?.value || "Not specified";
  const specifyOther = document.getElementById("specify-other").value;

  // Construct mailto link
  const mailtoLink = `mailto:normantas1234@gmail.com?subject=${encodeURIComponent(
      subject
  )}&body=${encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nSubscribed to Newsletter: ${newsletter}\nReferral: ${referral}\nOther Details: ${specifyOther}\n\nMessage:\n${message}`
  )}`;

  // Open mailto link
  window.location.href = mailtoLink;
}