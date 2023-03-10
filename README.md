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
 
 
 
 Midterm notes
 DNS stand for Domain name system. It translates from human lagnuage to IP language (more or less)
 CNAME is a DNS recrod type that points to another DNS
 DOM textContent sets the child text for an element
 Map function creates a new array populated with the results of calling a provided function on every element in the calling array
 Reduce function takes an array and reduces down to one value
 Filter function filters a vector and returns the filtered vector according to the parameters provided
 
 
 

Carson: Something I learned was more about github in general. I've never used it before extensively and it looks like in this class we will, and I know that we will need to use it in the future in jobs and what not. Just learning how to navigate the site and how everything works was very interesting. 

Things I learned from the simon HTML:
More about tables in html. The table in scores.html used <.table>, <.thead>, <.tbody>, <.tr>, <.th>, and <.td>. That's a lot of tags for one element, but I guess I'll have this assignment to reference if I have trouble in the future. Also, I haven't used vscode much in the past, so learning better how to clone, push, and commit with git was good. 

Things I learned from the simon CSS:
I was going through copy+pasting code from the css project into my html one, and css really isn't all that much extra code. It doesn't really add any extra lines besides <.div> stuff, and just lengthens html ones. The biggest difference I saw was in the <.header> stuff. It didn't make a huge difference in result, like it works pretty much the same, but it definitely polished up some rough edges and made the website feel more legit and professional. 

Things I learned from the simon JS:
Similar, but more so than last time, JavaScript barely impacts the html file. It was really one or two lines changed, with the rest of the changes being in the .js files. At one point I got stuck, where I had all the correct code but the game wasn't working for some reason. It's because I had forgotten to copy the sounds files over, and since those files were involved in promise stuff, the game froze. I got stuck on that for a while. Promises really are pretty cool, but I can definetely see how they can mess up your code and the IDE won't alert you to them. 

<br><br><br>


Elevator pitch:
You love to play soccer. But finding places and people to play with can be so hard. With my website, you will be able to find and schedule times and places to play pickup soccer. All you have to do is enter in your zip code or city and a calender will pop up and show you where and when pickup games are happening and it will show you how many people are planning on going to play. And if you want to get a group together to play you can creat your own event that others near by will be able to see. Now you will have no problem being able to play the game you love.
[Pick up soccer group schedule.pdf](https://github.com/bchfonz/Startup/files/10514302/Pick.up.soccer.group.schedule.pdf)




Pair programming:
Ben Fonbuena
Carson Koehle
