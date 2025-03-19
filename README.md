README Currently Unformated click to edit file for more readable formatting

#Running requirements
Install python

Create virtual enviroment in sprint1 directory

Install files in requirements folder:
pip install -r requirements.txt 

Host backend while in backend directory: 
Python manage.py runserver 

Host frontend in a different terminal with: 
npm run dev

Click the local host link that is outputed after running npm run dev

#Functionality testing instructions

1. Register a new user

  -Upon launch taken to a login screen
  -Click Register here to go to register page
    ;taken to: url: http://localhost:5175/register
  -Set a username and passwork (current convetion: name-userX password: X) 
    Ex: Username: user1, Password: 1
    ;taken to: url: http://localhost:5175/login
  Restricitons:  
    -User can not be registered if there is another user with the same name
2. Login with registered user
    -With any user you register type the corresponding name and password into text     
     fields
    -Click login button
    ;taken to: url: http://localhost:5175/ (home page)
    Restrictions:
    -Cant login with empty profile
    -Cant login with user that does not exist
    -Cant login with a username and password that don't go together
3.User functions walkthrough
  -Greeted with Welcome <username>
  -Favorite songs list is intialized as empty
  **Add song**
  -Enter text into song name box
  -Enter text into artist box
  -Click submit
  Text under "Favorite songs" updated based on input.
  No limit on the number of songs that can be added 
  Requiremnts:
    -Both fields must be filled out
   **Delete Song**
   -Click delete button under correspnding song
   Song gets deleted from users favorite song list
   **Logout**
     -Click logout button
     
    Takes user back to login screen, clearing local storage to protect users         
    access token
    ;taken to: url: http://localhost:5175/login
   

4. Program memory notes
   No functioning external database so any users registered are unique to the systems      local storage.
   Any functions performed by a User in the "home" page are saved after loggin out
   Ex:
   -User adds song
   -User logs out
   -User signs back in
   The song that was added should still be displayed under favorite song 
   
   
  
  
  
  
    
    
