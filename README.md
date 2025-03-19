#Running requirements
Install python

Create virtual enviroment in sprint1 directory

Install files in requirements folder:
pip install -r requirements.txt 

Host backend while in backend directory: 
Python manage.py runserver 

Host frontend in a different terminal with: 
npm run dev

Interact on local host

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
    ;taken to: url: http://localhost:5175/login
    
    
