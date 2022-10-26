// Going to the tsconfig.json; at the bottom, we can decalre what files we want to compile.
// If it is absent, it will assume to do all, but we can specify which files we want to compile. 

// Include will compile whatever is in the array, while exclude will not compile them.

// You would put a node modules in the exclude to not compile dependencies 


// We can organize our JS files into dist. But we need to go into the json to select the folder we want to put it in
// outDir is what will we look for  

// target in JSON is the type of JS that will be compiled. 

// Strict in json checks for errors. It can be situational, it is better to leave as true. 