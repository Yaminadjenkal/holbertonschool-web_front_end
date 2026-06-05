// Function to set cookies
export function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  // Cookies expire dans 10 jours
  const expiration = new Date();
  expiration.setTime(expiration.getTime() + 10 * 24 * 60 * 60 * 1000);

  document.cookie = `firstname=${firstname}; expires=${expiration.toUTCString()}`;
  document.cookie = `email=${email}; expires=${expiration.toUTCString()}`;
}

// Function to show cookies
export function showCookies() {
  const p = document.createElement("p");
  p.innerHTML = `Cookies: ${document.cookie}`;
  document.body.appendChild(p);
}

