This folder will have axios stuff involved
To Set it all up

1) tsc --init to get our tsconfig.json
  - Uncomment outDir and set file to ./dist
  - Tsc to create it

2) We run npm to get our axios. Be mindful of what folder you are currently in when installing
  - npm init -y (For package.json)
  - npm install axios
  - run tsc -w

3) Installing types separately
  - npm install lodash