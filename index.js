#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const component = require('./emptyComponent.js')

var currentDirectory = process.cwd();


var componentName = process.argv.slice(2)[0];

if (!fs.existsSync(componentName)){
    fs.mkdirSync(componentName);
} else {
    console.log('Component with such name already exist!');
}


fs.writeFile(componentName + "/"+ componentName +".jsx", component.init(componentName));