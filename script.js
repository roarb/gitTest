var child = require("child_process").exec;

var v = "v0.01";

function updateSource(v, cb){

	child("git show-ref "+v, function(err, stdout, stderr){
		if (err){
			return cb(true);
		}
		var commitID = stdout.split(" ")[0];	
		child("git merge "+commitID, function(err, stdout, stderr){
			if (err){ 
				return cb(true);
			}
			return cb(false);
		});
		
	});	
}

updateSource(v, function(err){
	if (err){
		console.log("it didn't work out");
	} else {
		console.log("updated dood!");
	}
	process.exit();
});