This folder and the content it has will have the quick setup process steps.

1) tsc --init in the terminal. This will give us the ts config file. 
2) Make a folder called dist and src. (Src will be our main stuff, dist is the JS file.)
3) make an index ts file in our src. 
4) go ts config file. change outDir: to "outDir": "./dist" and add include at the bottom 
5) we can do a tsc -w to go into watch mode. (So we can compile JS fast)
6) If we want to see what is happening in the browser, we can make an index.html file
  - We can do a ! to get the boilerplate.
  - Add a title to whatever we want to call it
  - add a srcirpt tag to the body
    * <script src= "dist/index.js"><script>

7) In order to do a live server, we can do npm start. I didn't do this method but just for reference just in case
  - npm init -y (Makes package.json. Make sure the name in package.json is all lowercase)
  - npm install lite-server
  - in the scripts on package.json. we can make a "start: "lite-server"
  - npm start


DOM Resources and Things I Thought Important
1) If you comment back in lib in tsconfig, it esssentailly removes all dpendenies that TS has.
  - It is a good idea to do that if you are doing Node in the backend and do not want TS to mess up something
  - You can almost just select what libraries you do want.