/**
 * Created by RobertHoehn on 7/30/2020.
 */

var exec  = require("child_process").exec;
var spawn = require("child_process").spawn;

exec("fetch.sh", function(err, stdout, stderr){
    console.log(err);
    console.log(stdout);
    console.log(stderr);
    process.exit();
});


/**
var s = spawn("fetch.sh");

s.stdout.on("data", function(data){
    console.log(data);
});

s.stderr.on("data", function(data){
    console.log(data);
});

s.on("close", function(code){
    console.log(code);
});

s.on("error", function(err){
    console.log(err);
});
 */