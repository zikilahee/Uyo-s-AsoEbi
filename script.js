document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('asoEbiForm');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Submitting...';

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = '✅ Thank you! Your payment confirmation has been received.';
        form.reset();
      } else {
        const result = await response.json();
        status.textContent = result.error || '❌ Oops! Something went wrong.';
      }
    } catch (error) {
      status.textContent = '❌ Network error. Please try again.';
    }
  });
});