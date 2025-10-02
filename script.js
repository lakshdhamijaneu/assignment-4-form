const byId = id => document.getElementById(id);

const state = {
  title:false, firstName:false, lastName:false, emailId:false,
  phoneNumber:false, zipcode:false, address1:false, address2:true,
  source:false, comments:false
};

const setError = (id, msg) => { const el = byId(id); if (el) el.textContent = msg || ''; };
const valid = () => Object.values(state).every(Boolean);
const toggleSubmit = () => { byId('submitBtn').disabled = !valid(); };

document.addEventListener('DOMContentLoaded', () => {
  byId('submitBtn').disabled = true;

  byId('resetBtn').addEventListener('click', () => {
    setTimeout(() => { byId('submitBtn').disabled = true; }, 0);
  });
});
