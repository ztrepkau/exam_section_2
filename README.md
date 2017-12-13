# exam section 2 - take home coding section of exam THIS IS ZACH TREPKAU'S VERSION OF EXAM SECTION 2

## setup
+ create project directory and its sub directories
```
mkdir -p /c/fdu/csci3444/projects/exam_section_2
cd /c/fdu/csci3444/projects/exam_section_2
mkdir -p src/common/util/math
mkdir -p test/common/util/math
mkdir -p views/pages
mkdir -p views/partials
```
+ create package.json
```
npm init --yes
```
+ make project a git version controlled project
+ copy/create proper .gitignore file (for example from my ex8 in github)
+ install prod dependencies and add them to package.json
```
npm install express ejs --save
```
+ to avoid restarting the server every time we change JS code, install nodemon as a dev dependency, which will watch our app and restart the server when needed
```
npm install nodemon --save-dev 
```
+ Install dev dependencies (meaning they are not needed for prod, just for dev) of Mocha, Chai, Istanbul, Nyc and let them be auto added to package.json. Also installing istanbul, nyc, opn-cli globally too 
```
npm install mocha chai istanbul nyc --save-dev
```
+ Install related helpfull tools globally
```
npm install -g istanbul nyc opn-cli 
```
+ Modify package.json's "scripts" element to have things to;
    - run unit tests only via mocha (like "testOnly" of ex7)
    - run unit tests, generate/show coverage report on console and then pop coverage report on browser (like "testAndCoverageAndReport" of ex7)
    - start web application via nodemon (like "start_express_ejs_bootstrap_with_nodemon" of ex8)

## common JS modules
+ Create mySquare.js, myCube.js, myPowers.js unser src/common/util/math directory (like ex7 myMath.js)
+ Let mySqure.js implement toSquare(inpNumber) function, which can take in a number like 2 or a string form of a number like "2" and return square of input as a number like 4.  
+ Let myCube.js implement toCube(inpNumber) function, which can take in a number like 3 or a string form of a number like "3" and return cube of input as a number like 27.
+ Let myPower.js implement toSquare(inpNumber), toCube(inpNumber) function, which can take in a number like 3 or a string form of a number like "3" and return its square or cube as number like 9 or 27. Let myPower.js import (via require) mySquare and myCube modules created above. And let 2 functions of myPower call appropriate function in above 2 modules.

## unit testing suites for common JS modules
+ Create mySquareTest.js, myCubeTest.js, myPowersTest.js unser test/common/util/math directory (like ex7 myMathTest.js)
+ Let mySqureTest.js create a suite that contains a suite for toSquare(inpNumber) function, with 3 "it"(test case) (like ex7 myMathTest.js);
    - it taking in a number like 2 and asserting that it returns number 4
    - it taking in a string form of a number like "2" and asserting that it returns number 4.
    - it returning a number
+ Let myCubeTest.js create a suite that contains a suite for toCube(inpNumber) function, with 3 "it"(test case) (like ex7 myMathTest.js);
    - it taking in a number like 3 and asserting that it returns number 27
    - it taking in a string form of a number like "3" and asserting that it returns number 27.
    - it returning a number
+ Let myPowersTest.js create a suite that contains a suite for toSquare(inpNumber), toCube(inpNumber) functions, with 3 "it"(test case) for each (like ex7 myMathTest.js);
    - them taking in a number like 3 and asserting that it returns number 9 or 27
    - them taking in a string form of a number like "3" and asserting that it returns number 9 or 27.
    - them returning a number

## web site setup
+ Create main_webServer.js file (like in ex8) under src directory that will have main express app code
+ Let main_webServer.js use (via require) myPowers module created above 
+ Create page templates "home.ejs", "square.ejs", "cube.ejs", "about.html", "error.ejs" under src/views/pages (like ex8)
+ Create partial templates "head.ejs", "header.ejs", "footer.ejs" under src/views/partials (like ex8)
+ Let "head.ejs" use bootstrap and use head.title passed to it (like ex8)
+ Let "header.ejs" have nav elements per screen capture (like ex8)
+ Let "footer.ejs" have some html (like ex8)
+ Let every ejs page have an h2 element with your name, lastname
+ Let every ejs page template include "head.ejs", "header.ejs", "footer.ejs" (like ex8) 
+ Add code for handling routes "/", "/square", "/cube", "/about", "/*" for http action GET in main_webServer.js
+ Let "/" route use "home.ejs" template passing {head.title} object with some title like "Hello express".
+ Let "/square" route;
    - use "square.ejs" template passing {head.title, inpNumber, resultNumber} object.
    - pass "Square page" for head.title, value of 2 for inpNumber and output of myPowers.toSquare(inpNumber) for resultNumber 
+ Let "/cube" route;
    - use "cube.ejs" template passing {head.title, inpNumber, resultNumber} object.
    - pass "Cube page" for head.title, value of 3 for inpNumber and output of myPowers.toCube(inpNumber) for resultNumber
+ Let "/about" route set 200 as status code and render about.html that has some html things about site (like ex8)
+ Let all other urls, set 404 as status code and render "error.ejs" passing "Error" as head.title value (like ex8)
+ Configure express app to listen on port 8015 in main_webServer.js and print a console statement specifying which port number it is listening on (like ex8)

## running code 
+ run just the unit tests, screen capture its output on git bash console
+ run unit tests and coverage report. Capture its output of coverage report on git bash console
+ screen capture coverage output in a browser
+ start up the app, screen capture home ("/"), square, cube, about, error page views
+ be ready to run it on your laptop and demo it to ilker# exam2
