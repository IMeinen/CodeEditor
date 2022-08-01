# CodeEditor

This app implements an web code editor embased on this api: https://app.swaggerhub.com/apis/john-veezoo/Online-Editor/1.0.0 

My goal is to create a fluid UI that allows the user to access, edit, save and delete the files available from the api.

PS: The delete and update endpoints weren't working properly, so I did these operations just for the frontend context. Even so, the apis were implemented (if you check the inspect you will notice that they are being called correctly and returning status 200).

![app_running](https://github.com/IMeinen/CodeEditor/blob/master/public/screenshot_code_editor.png)

## Running the project

To run the project you just need to have nodejs 12.+ installed. Then just open the repo and run 'yarn start' or 'npm start'.
