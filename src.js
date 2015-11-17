var P;

function config(promise) {
  P = promise || Promise;
}

module.exports = exports = function(func,...args) {
  if(typeof P==="undefined"){
    config();
  }
  return new P(function(resolve,reject){
    args.push(function(err,data){
      if(err){
        reject(err)
      }else{
        resolve(data);
      }
    })
    func.apply(null,args);
  });
}


exports.config = config;
