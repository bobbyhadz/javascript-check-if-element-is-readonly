console.log('bobbyhadz.com');

const element = document.getElementById('first_name');

console.log(element.readOnly); // 👉️ true

if (element.readOnly) {
  console.log('✅ element is read-only');
} else {
  console.log('⛔️ element is not read-only');
}

// ✅ Set attribute readonly
// element.setAttribute('readonly', '')

// ✅ Remove attribute readonly
// element.removeAttribute('readonly');
