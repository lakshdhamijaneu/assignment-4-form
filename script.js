document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const submitBtn = document.getElementById("submitBtn");

  // Field references
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("emailId");
  const phone = document.getElementById("phoneNumber");
  const zip = document.getElementById("zipcode");
  const street1 = document.getElementById("street1");
  const street2 = document.getElementById("street2");
  const comments = document.getElementById("comments");

  // Error spans
  const errors = {
    firstName: document.getElementById("firstNameError"),
    lastName: document.getElementById("lastNameError"),
    email: document.getElementById("emailError"),
    phone: document.getElementById("phoneError"),
    zip: document.getElementById("zipError"),
    street1: document.getElementById("street1Error"),
    comments: document.getElementById("commentsError"),
    source: document.getElementById("sourceError"),
  };

  // Regex patterns
  const nameRegex = /^[A-Za-z0-9]{2,20}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  const zipRegex = /^\d{5}$/;

  // Validation functions
  function validateFirstName() {
    if (!nameRegex.test(firstName.value)) {
      errors.firstName.textContent = "Only letters/numbers, 2-20 chars";
      return false;
    }
    errors.firstName.textContent = "";
    return true;
  }

  function validateLastName() {
    if (!nameRegex.test(lastName.value)) {
      errors.lastName.textContent = "Only letters/numbers, 2-20 chars";
      return false;
    }
    errors.lastName.textContent = "";
    return true;
  }

  function validateEmail() {
    if (!emailRegex.test(email.value)) {
      errors.email.textContent = "Must use Northeastern email";
      return false;
    }
    errors.email.textContent = "";
    return true;
  }

  function validatePhone() {
    if (!phoneRegex.test(phone.value)) {
      errors.phone.textContent = "Format: (123) 456-7890";
      return false;
    }
    errors.phone.textContent = "";
    return true;
  }

  function validateZip() {
    if (!zipRegex.test(zip.value)) {
      errors.zip.textContent = "Zip must be 5 digits";
      return false;
    }
    errors.zip.textContent = "";
    return true;
  }

  function validateStreet1() {
    if (!nameRegex.test(street1.value)) {
      errors.street1.textContent =
        "Street Address 1 required (2-20 chars, no special chars)";
      return false;
    }
    errors.street1.textContent = "";
    return true;
  }

  function validateComments() {
    if (comments.value.trim().length < 5) {
      errors.comments.textContent = "Comments must be at least 5 chars";
      return false;
    }
    errors.comments.textContent = "";
    return true;
  }

  function validateSource() {
    const checked = form.querySelectorAll("input[name='source']:checked");
    if (checked.length === 0) {
      errors.source.textContent = "Select at least one source";
      return false;
    }
    errors.source.textContent = "";
    return true;
  }

  // Enable submit only if all pass
  function validateForm() {
    const allValid = [
      validateFirstName(),
      validateLastName(),
      validateEmail(),
      validatePhone(),
      validateZip(),
      validateStreet1(),
      validateComments(),
      validateSource(),
      validateDynamic()
    ].every(Boolean);

  submitBtn.disabled = !allValid;
}

  // Event listeners for live validation
  firstName.addEventListener("input", () => {
    validateFirstName();
    validateForm();
  });
  lastName.addEventListener("input", () => {
    validateLastName();
    validateForm();
  });
  email.addEventListener("input", () => {
    validateEmail();
    validateForm();
  });
  phone.addEventListener("input", () => {
    validatePhone();
    validateForm();
  });
  zip.addEventListener("input", () => {
    validateZip();
    validateForm();
  });
  street1.addEventListener("input", () => {
    validateStreet1();
    validateForm();
  });
  comments.addEventListener("input", () => {
    validateComments();
    validateForm();
  });
  form.querySelectorAll("input[name='source']").forEach((cb) =>
    cb.addEventListener("change", () => {
      validateSource();
      validateForm();
    })
  );

  phone.addEventListener("input", (e) => {
    let digits = e.target.value.replace(/\D/g, ""); // keep only numbers
    if (digits.length > 10) digits = digits.substring(0, 10);

    let formatted = "";
    if (digits.length > 0) {
      formatted = "(" + digits.substring(0, 3);
    }
    if (digits.length >= 4) {
      formatted += ") " + digits.substring(3, 6);
    }
    if (digits.length >= 7) {
      formatted += "-" + digits.substring(6, 10);
    }

    e.target.value = formatted;
    validatePhone();
    validateForm();
  });

  const street2Counter = document.getElementById("street2Counter");

  street2.addEventListener("input", () => {
    let len = street2.value.length;
    if (len > 20) {
      street2.value = street2.value.substring(0, 20); // hard cap at 20 chars
      len = 20;
    }
    street2Counter.textContent = `${len}/20 characters used`;
  });

  // ========== Step 4: Dynamic Checkbox + Text Field ==========
  const options = document.getElementById("options");
  const dynamicArea = document.getElementById("dynamicCheckboxArea");

  let dynamicCheckbox = null;
  let dynamicInput = null;
  let dynamicError = null;

  options.addEventListener("change", () => {
    dynamicArea.innerHTML = ""; // clear previous checkbox + input

    if (options.value) {
      // Create checkbox
      dynamicCheckbox = document.createElement("input");
      dynamicCheckbox.type = "checkbox";
      dynamicCheckbox.id = "dynamicCheck";
      dynamicCheckbox.name = "dynamicCheck";

      const cbLabel = document.createElement("label");
      cbLabel.textContent = ` Enable extra input for ${options.value}`;
      cbLabel.setAttribute("for", "dynamicCheck");

      dynamicArea.appendChild(dynamicCheckbox);
      dynamicArea.appendChild(cbLabel);
      dynamicArea.appendChild(document.createElement("br"));

      // Error span for dynamic input
      dynamicError = document.createElement("span");
      dynamicError.className = "error";
      dynamicArea.appendChild(dynamicError);

      // Handle checkbox toggle
      dynamicCheckbox.addEventListener("change", () => {
        if (dynamicCheckbox.checked) {
          dynamicInput = document.createElement("input");
          dynamicInput.type = "text";
          dynamicInput.id = "dynamicInput";
          dynamicInput.placeholder = `Enter details for ${options.value}`;
          dynamicArea.appendChild(document.createElement("br"));
          dynamicArea.appendChild(dynamicInput);

          dynamicInput.addEventListener("input", () => {
            validateDynamic();
            validateForm();
          });
        } else {
          if (dynamicInput) {
            dynamicInput.remove();
            dynamicInput = null;
          }
          dynamicError.textContent = "";
          validateForm();
        }
      });
    }
    validateForm();
  });

validateDynamic()
function validateDynamic() {
  if (dynamicCheckbox && dynamicCheckbox.checked) {
    if (!dynamicInput || dynamicInput.value.trim().length < 2) {
      dynamicError.textContent = "This field is required (min 2 chars)";
      return false;
    }
    dynamicError.textContent = "";
  }
  return true; // if no checkbox or unchecked, it's valid
}
});
