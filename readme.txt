Here is an implementation of the simple medical bill upload service using Node and Express.

Installation

Step - 1:
Install Node JS LTS Version from this URL : https://nodejs.org/en/

Step - 2:
Change directory into the project folder:

Step - 3:
Install dependencies so that it will install packages from package.json and generate node modules folder using:
run the following command:
npm install 

Step - 4:
To start the server, run the following command:
npm start

Step - 5:
Once you have the code for the medical bill upload service implemented, you can run it by executing the following command in your terminal:
node File.js


Assuming that you named your file File.js and that you're currently in the directory where that file is located. If you named your file something else, replace File.js with the name of your file.
Once the server is running, you can make requests to it using an HTTP client such as curl or a web browser. Here are a couple of examples of how you can make requests to the server using curl:

Step - 6:
Retrieving existing records Bills
To retrieve all medical bills then execute the following in specific path of the project and execute the command in terminal to get existing medical records
curl http://localhost:3000/items

Step - 7:
To Create Medical Records Bills execute the following command with the example record of json:
curl -d '{"patientName": "John Smith", "patientAddress": "123 Main St, Anytown USA", "hospitalName": "General Hospital", "dateOfService": "2022-02-15", "billAmount": 1500.00}' -H 'Content-Type: application/json' http://localhost:3000/items
In the above example, we're sending a POST request to http://localhost:3000/items with a JSON payload that contains the properties for a new medical bill.

Of course, there are many other ways to make requests to the server, and which method you use will depend on your specific use case. The above examples should give you a basic idea of how to interact with the server.

Step - 8:
Now hit the url http://localhost:3000/items in browser then you will be able to get the bills.


For Testing the endpoints we use following steps:
You can install the required libraries for the test cases by running the following command in your project directory:
npm install --save-dev supertest chai mocha

This will install the supertest library and the chai assertion library as development dependencies, which means they will be listed in your package.json file under the devDependencies section. This is important because development dependencies are not installed when your application is deployed to a production environment, so it's important to keep them separate from production dependencies.
Once you've installed these libraries, you can use them in your test files by requiring them at the top of the file:

const request = require('supertest');
const expect = require('chai').expect;