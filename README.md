# Mednet Challenge - Create a form with validation

This is not completed but the intent was to in create an API that allows teachers and instructors to enter, complile and retrieve student grades.

4 propmts are required to be edited before submissions can be saved. A teachers, student and two temperature units must be select. The input fields accept numberical characters with the options of the "-" or "+" symbol. 

Users can select from the following temperatures:
    -Kelvin
    -Celcius
    -Fahrenheit
    -Rakine

After all inputs and selections have been designed to know whether a question is valid or not.  Prompt will display based on the scenarios below:
    - If the student answer are checked against the teacher's and the system's answer, if matched a "valid" indicator will appear
    - If the student's answer matches the teacher's answer but fail the system check, an "incorrect" indicatior will appear,
    - All other cases will result in an "invalid" indicator.

## Misc. information
    - The program utilizes and relies heavily on node.js, express, react    
    - There is a "npm run dev" script for development purposes.
    - The project was designed to be hosted on Heroku and can be accessed with [link].
    - The Postman web application was used to send successful get and posts operations.
    - The connection to Mongo was successful but no documents have been created.

