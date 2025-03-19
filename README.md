README

Running Requirements

Install Python

Create a virtual environment in the sprint1 directory.

Install required dependencies from the requirements.txt file:

cmd: pip install -r requirements.txt

Start the backend (while in the backend directory):

cmd: python manage.py runserver

Start the frontend (in a different terminal):

cmd: npm run dev

Access the application:

Click the local host link that appears after running npm run dev.

Functionality Testing Instructions

1. Register a New User

Upon launch, you are taken to the login screen.

Click Register here to navigate to the registration page:

URL: http://localhost:5175/register

Set a username and password (current convention: name-userX and password: X).

Example: Username: user1, Password: 1

Redirects to: http://localhost:5175/login

Restrictions:

Cannot register if a user with the same name already exists.

2. Login with a Registered User

Enter the username and password into the text fields.

Click the login button.

Redirects to: http://localhost:5175/ (Home Page)

Restrictions:

Cannot log in with an empty profile.

Cannot log in with a non-existent user.

Cannot log in with incorrect username-password combinations.

3. User Functions Walkthrough

The home page greets the user with: "Welcome, <username>".

The Favorite Songs List is initially empty.

Add Song

Enter text into the song name input field.

Enter text into the artist input field.

Click Submit.

The song will appear under "Favorite Songs".

No limit on the number of songs that can be added.

Requirements:

Both fields must be filled out before submission.

Delete Song

Click the Delete button under the corresponding song.

The song gets removed from the user's favorite songs list.

Logout

Click the Logout button.

The user is redirected to the login screen.

Local storage is cleared to protect the access token.

Redirects to: http://localhost:5175/login

4. Program Memory Notes

There is no functioning external database; all user data is stored in the system’s local storage.

Any actions performed on the home page persist after logging out.

Example:

User adds a song.

User logs out.

User logs back in.

The previously added song is still displayed in the favorite songs list.
\
