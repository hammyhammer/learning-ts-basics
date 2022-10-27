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
    * <script src= "dist"><script>

