# Waitable

This module was created to help with the transition to es7 was async and await functions. While it can be used in any situation where a promise instead of a callback would be used.

How to use this module:

        var waitable = require("waitable");
        var fs = require("fs");

        waitable(fs.readFile,filename,"utf8").then(function(result));

It can be used with not modules that doesn't support a promise callback.

This library requires that the Promise object is available.

If you are working on an older version of node where Promises are not availabled you need to pass it a promise library once.


        var waitable = require("waitable");
        waitable.config(promiseLib);

Any A+ library can be used.


This can also be used with es7 async/await functions


        async function(filename){
          let content = await waitable(fs.readFile,filename,"utf8");
          //proceed to use content
        }
