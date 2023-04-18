document.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data
    })
      .then(response => {
        return response.text();
      })
      .then(html => {
        document.open();
        document.write(html);
        document.close();
      });
  });
  