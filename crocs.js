var access_token = localStorage.getItem("access_token");
var name1, email;
if(access_token)
  {
    fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`)
      .then(response => response.json())
      .then(data => {
        email = data.email;
        name1 = data.name;
    
        console.log(`Email: ${email}`);
        console.log(`Name: ${name1}`);
        document.getElementById('login').innerText = `Welcome, ${name1}`;
      })
      .catch(error => console.error('Error fetching user info', error));
  };

var client;
var access_token;

// function initClient() {
    
    client = google.accounts.oauth2.initTokenClient({
        client_id: '404161196997-2ormafv61tcsd7iadveilcd9s8or1n9g.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/calendar.readonly \
                https://www.googleapis.com/auth/contacts.readonly',
        callback: (tokenResponse) => {
            access_token = tokenResponse.access_token;
            localStorage.setItem("access_token", access_token);
        },
      });
//   }
  function getToken() {
      client.requestAccessToken();
    }
      
  const signinButton = document.getElementById('login');
  
  signinButton.addEventListener('click', async () => {
    client.requestAccessToken()   
    // Make an HTTP GET request to the userinfo endpoint to retrieve the user's profile information
  const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`);
  const data = await response.json();

  // Extract the user's email address and display name from the response data
  const email = data.email;
  const name = data.name;

  console.log(`Email: ${email}`);
  console.log(`Name: ${name}`);
    });
  console.log(access_token);