# Assignment 4 – Interactive Feedback Form

This project implements an **interactive feedback form** with full client-side validation, dynamic UI behavior, and a built-in AI-style FAQ assistant.

---

## 📌 Features Implemented

### 🔹 Core Requirements
1. **Form Validations**
   - All required fields checked (not null).
   - Min/Max length enforced.
   - Alphanumeric restrictions (no special characters for names/addresses).
   - Regex validation for:
     - **Email**: must be `@northeastern.edu`.
     - **Phone**: must match `(XXX) XXX-XXXX`.
     - **Zip**: must be exactly 5 digits.
   - Errors shown **live on input** (not only at submit).
   - Submit button **disabled** until all validations pass.

2. **Form Fields**
   - Title (radio button: Miss, Mr., Mrs.).
   - First/Last Name.
   - Email ID.
   - Phone Number.
   - Zip Code.
   - Street Address 1 (mandatory).
   - Street Address 2 (optional, with live counter).
   - How did you hear (checkboxes: Facebook, Google, Yelp).
   - Category (single select dropdown with 5 options).
   - Comments.

3. **Dynamic Elements**
   - Dropdown selection triggers a **dynamic checkbox**.
   - If checkbox is enabled → a new **text field** appears and becomes mandatory.
   - If checkbox is disabled → text field disappears.

4. **Form Submission**
   - On submit:
     - A **results table** is generated below the form.
     - Each submission is appended (previous data preserved).
     - Form fields are cleared and reset.

5. **Email Validation**
   - Restricted to Northeastern domain only (`@northeastern.edu`).

6. **Street Address 2**
   - Optional field.
   - If left blank, it shows as blank in the results table.

---

### 🔹 Additional Features
1. **Input Masking**  
   - Phone number auto-formats into `(XXX) XXX-XXXX` while typing.

2. **Dynamic Error Highlighting**  
   - Each field shows a **red inline error message** that disappears when corrected.

3. **Live Character Counter**  
   - Street Address 2 shows `"x/20 characters used"` below the input.

4. **AI Assistant (FAQ Chatbot)**
   - Button above the form opens a simple chat window.
   - Predefined Q&A for:
     - Email requirements.
     - Phone format.
     - Zip code length.
     - Which fields are required.
     - Street Address 2 optionality.
   - Matches by keywords; if unknown, responds with a default message.
   - Chat history persists until window is closed.

---

## 📂 Project Structure
Assignment-4/
│── Form.html # Main form structure
│── style.css # Styles (form layout, errors, chatbot UI)
│── script.js # JavaScript (validations, dynamic behavior, chatbot)
│── README.md # Documentation

---

## 🚀 How to Run
1. Clone this repository or download the ZIP.
2. Open **Form.html** in any modern browser (Chrome/Firefox/Edge).
3. Interact with the form:
   - Fill required fields → Submit button enables.
   - Submit → Data table appears below.
   - Use the **AI Assistant** button for form-related FAQs.

---

## ✅ Assignment Compliance Checklist
- [x] Validations for all fields.  
- [x] Submit disabled until validations pass.  
- [x] Regex for email, phone, zip.  
- [x] Live validation (not only on submit).  
- [x] Single select list (5 elements).  
- [x] Dropdown triggers dynamic checkbox + input.  
- [x] Extra input mandatory when enabled.  
- [x] Submissions append to results table.  
- [x] Form clears after submit.  
- [x] Email restricted to `@northeastern.edu`.  
- [x] Street Address 2 optional.  
- [x] Input masking for phone.  
- [x] Dynamic error highlighting.  
- [x] Live character counter (Address 2).  
- [x] AI Assistant FAQ chatbot.  

---

## 👨‍💻 Author
- **Name**: Laksh Dhamija  
- **Email**: dhamija.l@northeastern.edu

