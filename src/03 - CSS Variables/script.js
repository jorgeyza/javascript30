"use strict";
const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    // 'dataset' refers to all 'data-' custom attributes
    const suffix = this.dataset.sizing || '';
    // Change :root custom css properties
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach((input) => input.addEventListener('change', handleUpdate));
