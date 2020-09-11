## Get the postman collection
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/97fd00e60a22090de720)
## Our Team
-**Samuel Chabot** - Google Chatbot  
-**Colin Larke** - Alexa Skill  
-**Thomas Simoneau** - Azure Speech2Text

### Creating a profile
To create a profile we only had time to do it in postman.
1. Open postman
2. Click on `Create Profile`
3. Click on the send button

That will create a new profile with a random id	
### Putting the wav voice file to confirm the voice profile
When a profile is created, we then need to associate a voice to the profile
1. Open postman
2. Click on `Create Enrollment`
3. Click on Headers
4. Change the value next to the field: Ocp-Apim-Subscription-Key for the id of the profile that you just created
5. Click on body 
6. Insert the wav file inside the body
7. Click on the send button

this will associate a the profile with the voice inside the wav file
### Verify who is talking
We only managed to very who is talking in postman and here is the steps
1. Open postman
2. Click on `Identification`
3. Click on Params
4.  Next to the ``identificationProfileIds`` you will have a field full of id's. At the end of this field, add a comas then the id of the profile that you just created.
5. Click on Body
6. Input your wav file that you want to verify


### Retreive the list of profile
To retreive the list of profile we only managed to do it in postman
1. Open postman
2. Click on `get all` 
3. Click on the send button

This will output an array of profile

