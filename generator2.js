#!/usr/bin/env node

var fs = require('fs'),
    path = require('path');

var first = process.argv[2];
var second = process.argv[3] || '';
var third = process.argv[4] || '';

console.log( first );
console.log( second );
console.log( third );

console.log( first + second + third);
countup(6);

mangle( first );

function mangle(str){
  var str2; // = new String(str);
  uppercase = str.toUpperCase();
  lowercase = str.toLowerCase();

  console.log( uppercase );
  console.log( lowercase );

  for(var i=0; i<str.length; i++){
    var s1 = str.substr(0,i);
    var s2 = str[i].toUpperCase();
    var s3 = str.substr(i+1,str.length);

    console.log( s1 + s2 + s3 );
  }

  console.log('');

  for(var i=0; i<str.length-1; i++){
    var s1 = str.substr(0,i);
    var s2 = str[i].toUpperCase() + str[i+1].toUpperCase();
    var s3 = str.substr(i+2,str.length);

    console.log( s1 + s2 + s3 );
  }
}

function countup(m){
  var num = Number(third);
  for(var i=0; i<m; i++){
    num = num + 1;
    console.log( num );
  }
}
