'use strict'
var should = require("chai").should();
var waitable = require("../");
describe("Node Implementation",function () {
  var fs = require("fs");
  var path= require("path");
  before(function(){

  });

  it("should be able to read file with async/await", async function(done){
    this.timeout(5000);
    try {
      var file = path.resolve(__dirname,__filename);
    var content = await waitable(fs.readFile,file,"utf8");
    content.should.be.a("string");
    done();
    } catch (e) {
      done(e);
    }
  });
})
