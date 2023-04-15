# Startup
Ben: 
Basic commands:
git commit -am "merge(notes) combined both edits"
git push
 - Sends changes to the repository
 git pull
 - Pulls changes from the repository

use "git add <file>..." to update what will be committed
use "git restore <file>..." to discard changes in working directory

Make sure to save the file before trying to commit and push changes

Deploying my website ./deployFiles.sh -k scheduleproduction.pem -h sports260.click -s startup;

chmod +x deployWebsite.sh fixes this--> zsh: permission denied: ./deployWebsite.sh

<script> tag --> use to include JS code



I've learned more about merging conlficts which is really helpful. I also didn't I could fork a repository which seems really helpful. I found the DadJokesAPI very interesting haha

Things I learned from the simon HTML:
Tags like div and header aren't always neccessary but they help keep everything organized
HTML can nest some of the things I've been learning about. For example you can use an svg as a button
br and hr can be used to style the website a little bit

<br>
 
 SIMON: Ben
 <script src='.js'></script> is how you add the JS file to an HTML file. add the .js file at the end of the body of the HTML file
onclick="class.function(parameters)" is how to add JS functionality to your HTML

document.querySelector pulls certain items from the DOM (HTML code) document.createElement('html tag') allows you to create HTML elements via javascript. This is useful for things like displaying the scores localStorage.setItem creates a new item in the local storage. This is used for the login page as well as a way to keep track of the scores localStorage.getItem gets items from the local storage. Use JSON.parse to then convert it into a string for JS

View JS almost as a little editor. There is all this HTML that breaks down into nodes and a tree of nodes and the JS picks nodes and edits and adds to the nodes.
 
 <br><br>
 
 Node.js notes:
 Note that when you start installing package dependencies NPM will create an additional file named package-lock.json and a directory named node-modules in your project directory. The node-modules directory contains the actual JavaScript for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do not want to check this directory into your source control system since it is so large and can be rebuilt using the information contained in the package.json and package-lock.json files. So make sure you include node-modules in your .gitignore file.

When you clone your source code from GitHub to a new location, just run npm install in the project directory. This will cause NPM to download all of the previously installed packages and recreate the node-modules directory. The package-lock.json file tracks the version of the package that you installed. That way if rebuild your node-modules directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible your code.
 
 
 
 Midterm notes
 DNS stand for Domain name system. It translates from human lagnuage to IP language (more or less)
 CNAME is a DNS recrod type that points to another DNS
 DOM textContent sets the child text for an element
 Map function creates a new array populated with the results of calling a provided function on every element in the calling array
 Reduce function takes an array and reduces down to one value
 Filter function filters a vector and returns the filtered vector according to the parameters provided
 
 <br><br>
 
 Simon service notes:
 Download and require express
 Make an express object
 You can then use the objects for HTML calls like .get, .listen, .use, and .post 
 express.Router() allows you to use service endpoints
 
  <br><br>
 
 Simon DB notes:
 Save credentials on production environment using dotenv package
 Save credentials on a .env or .profile text file and export them
 Add the link to your data base in the JS file
 
 <br><br>
 
 Simon Login notes:
 Error 409(conflict) checks to see if there is already a user with the same email adress when someone tries to make new account
 Error 401(unauthorized) is to check to see if the password is wrong or there isn't a user with the given email
 Use endpoints to create and authorize the cookie containing the username and password
 
  <br><br>
 
 Simon webSocket notes:
 Websocket allows for allows data to be efficiently sent from peer to peer much quicker than previous technologies.
 "send" functions sends messages
 callback "onmessage" recevies messages
 Websocket improves communication
 
  <br><br>
 Simon React notes:
 Move backend code into service
src directory has react components from react-template
 use the dive tag and set the id = to root and then we select and use in the react component/js code
 npm download bootstrap and react-bootstrap to use bootstrap in react
 bring html code into react code
 import function from different react components
 install react-router-dom
 use Navlink nd to= instead of the anchor tags that we've been using for links
 use className instead of class in react
 
 
 
 
<br><br><br>
<h3>Carson</h3> 
Something I learned was more about github in general. I've never used it before extensively and it looks like in this class we will, and I know that we will need to use it in the future in jobs and what not. Just learning how to navigate the site and how everything works was very interesting.
<br>
<h5>Simon</h5>
 
>HTML:
>>More about tables in html. The table in scores.html used <.table>, <.thead>, <.tbody>, <.tr>, <.th>, and <.td>. That's a lot of tags for one element, but I guess I'll have this assignment to reference if I have trouble in the future. Also, I haven't used vscode much in the past, so learning better how to clone, push, and commit with git was good. 

>CSS:
>>I was going through copy+pasting code from the css project into my html one, and css really isn't all that much extra code. It doesn't really add any extra lines besides <.div> stuff, and just lengthens html ones. The biggest difference I saw was in the <.header> stuff. It didn't make a huge difference in result, like it works pretty much the same, but it definitely polished up some rough edges and made the website feel more legit and professional. 

>JS:
>>Similar, but more so than last time, JavaScript barely impacts the html file. It was really one or two lines changed, with the rest of the changes being in the .js files. At one point I got stuck, where I had all the correct code but the game wasn't working for some reason. It's because I had forgotten to copy the sounds files over, and since those files were involved in promise stuff, the game froze. I got stuck on that for a while. Promises really are pretty cool, but I can definetely see how they can mess up your code and the IDE won't alert you to them. 

>service:
>>Something I wished we learn was why you need a deploy service instead of just the deploy files script. I mostly understand whats going on in the file, but wish we learned why those things go there. Something I learned is in the index.js file is why we needed to put all the files in the public folder. There's an order in which stuff is executed, and having one call for all the static things is much prettier and better than to individually call every file with the app.use(express.static('public')); line, but instead of public it'd be every file. 

>DB
>>When running on local host, for simon you have to use port 3000 and for the startup I'll have to use port 4000. This is something I didn't understand until I met with the TAs and made it go by way quicker. Using the default go live thing with vscode works when you only have a frontend, but not when you have a front and backend.

>Login
>>I think the cookies are pretty cool. They pretty much validate everything the user does and tracks it. Logging onto websites before never really seemed like that much work to me, but while you are logged in, the site can pretty much track everything you do and store it in a database. Scary but mostly cool!
 
>Websocket
>> I've always heard 'ping', like in reference to video game connection and what not. I never knew, although it makes a whole lot of sense, to have a 'pong' that the user sends back to the client or what have you to make sure it is still wanting a connection.

>React
>> I had a lot of issues with this one. I wasn't able to test anything locally because I think there was an issue with port 3000 and 3001 not communicating correctly with each other? A ta helped me for like an hour and a half, and even then the problem didn't get resolved. But, I got a lot more comfortable with the npm commands and what they do and why you would want to use a command in a specific instance. For this to work, you really had to change the entire structure of the code, like changing most of the js files to jsx and all the new folders, as well as making css files for each individual jsx. 

<br>
<h5>Startup</h5>
 
>HTML and CSS
>>I learned how to use both html and css better. The main page looks good and we need to update them for sure, but professor said it was fine to submit what's there. I learned that not everything has a have a css reference, and that tags in html can function as designing criteria without the need for css. 

<br><br><br>


Elevator pitch:
You love to play soccer. But finding places and people to play with can be so hard. With my website, you will be able to find and schedule times and places to play pickup soccer. All you have to do is enter in your zip code or city and a calender will pop up and show you where and when pickup games are happening and it will show you how many people are planning on going to play. And if you want to get a group together to play you can creat your own event that others near by will be able to see. Now you will have no problem being able to play the game you love.
[Pick up soccer group schedule.pdf](https://github.com/bchfonz/Startup/files/10514302/Pick.up.soccer.group.schedule.pdf)




Pair programming:
Ben Fonbuena
Carson Koehle
