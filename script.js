var child = require("child_process").exec;

var v = "v0.02";

child("git show-ref "+v, function(err, stdout, stderr){
	if (err){
		console.log("issue with the git show-ref script");
	}
	var commitID = stdout.split(" ")[0];
	console.log(commitID);
	
	child("git merge "+commitID, function(err, stdout, stderr){
		if (err){ 
			console.log(err);
		}
		console.log(stdout);
		process.exit();
	});
	
});