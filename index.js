// // Replace "FORM_ID" with the ID of your Google Form
// const formId = "1FAIpQLSfBk0bfsyJelyYYrdFQDwvFLI_ywnavrb8jVy-yNhJGwjusUw";

// // Get the HTML form element
// var htmlForm = document.getElementById("myform");

// // Add an event listener for form submissions
// htmlForm.addEventListener("submit", async (event) => {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Get the form data as an object
//   var formData = new FormData(htmlForm);

//   // Submit the form data to the Google Forms API
//   const response = await fetch(`https://docs.google.com/forms/u/0/d/e/${formId}/formResponse`, {
//     method: "POST",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     body: formData,
//   });

//   // Handle the response (optional)
//   console.log("Form response submitted:", formData);
//   console.log(response);
// });

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
  // Open a new window or redirect the user to the OAuth provider's login page
  window.location.href = 'http://127.0.0.1:5500/oauth/authorize?client_id=404161196997-2ormafv61tcsd7iadveilcd9s8or1n9g.apps.googleusercontent.com&redirect_uri=http://127.0.0.1:5500/&response_type=token';
});

// Handle OAuth redirect
const handleOAuthRedirect = () => {
  const { access_token } = parseQueryString(window.location.hash.substring(1));

  // Store access token in local storage
  localStorage.setItem('access_token', access_token);

  // Redirect to dashboard or protected page
  window.location.href = '/dashboard';
};

// Utility function to parse query string
const parseQueryString = (queryString) => {
  const params = {};
  const regex = /([^&=]+)=([^&]*)/g;

  let match;

  while ((match = regex.exec(queryString))) {
    const key = decodeURIComponent(match[1]);
    const value = decodeURIComponent(match[2]);

    params[key] = value;
  }

  return params;
};

// Call handleOAuthRedirect when the page loads
if (window.location.hash) {
  handleOAuthRedirect();
}
