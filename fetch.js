/**
 * Created by RobertHoehn on 7/30/2020.
 */

var exec = require("child_process").exec;

exec("fetch.sh", function(err, stdout, stderr){
    console.log(err);
    console.log(stdout);
    console.log(stderr);
    process.exit();
});