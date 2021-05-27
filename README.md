# Portfolio

## What, Why, and HOW
With this assignment, I was motivated to figure out how to make my web applications not only functional offline, but also donwloadable as an application. Something like this seemed impossible just a few weeks ago, but now it's not only possible, but something I've actually accomplished with this assignment. The code seems pretty complex from the outside looking in, but once I understood that a lot of the code is just boiler plate to be reused over and over, it completing the assignment a lot simpler. I did run into some issues with making sure my service-worker was set up correctly, but once I cached the files correctly and used the correct route to store them, everything worked great. 
To achieve the end result, I:
1. Linked the manifest in index.html, and then actually created that manifest file (titled "manifest.webmanifest"). 
2. Added the service-worker "if" statement at the bottom of my index.html file
3. Created the service-worker,js file, in which I specified which files I wanted to cache and what route I wanted to use
4. Linked the db into my index.html file

The assignment wasn't particularly hard, but there were a bunch of tiny issues that were difficult to bug fix. Having gone through those issues, though, I have a lot more confidence creating web applications like this going forward. 

# Links
Link to GitHub repo: https://github.com/andrew1835/Online-Offline-Budget
<br>
Link to deployed application: https://mighty-eyrie-87189.herokuapp.com/

# Screenshot
This screenshot shows what the application looks like once a few deposits/withdrawals have been made

<img src = "./assets/budget.jpg" alt = "Main menu">