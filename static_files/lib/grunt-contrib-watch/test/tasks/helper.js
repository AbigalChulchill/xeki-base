var grunt=require("grunt"),path=require("path");module.exports=helper={},helper.fixtures=path.join(__dirname,"..","fixtures"),helper.verboseLog=function(){},-1!==grunt.util._.indexOf(process.argv,"-v")&&(helper.verboseLog=function(){console.log.apply(null,arguments)}),helper.assertTask=function(e,r){function t(e,r){var t=n(process.argv[0],u,{cwd:i}),s="";grunt.util._.isArray(e)||(e=[e]),e.push(function(){t.kill("SIGINT")}),t.stdout.on("data",function(r){r=grunt.log.uncolor(String(r)),s+=r;var t=!0;!1!==o&&(t=new RegExp(o,"gm").test(r)),t&&setTimeout(function(){var r=e.shift();"function"==typeof r&&r()},500)}),t.stderr.on("data",function(e){throw new Error(e)}),t.on("exit",function(){r(s)})}var n=require("child_process").spawn;e=e||"default";var o=(r=r||{}).trigger||".*(Waiting).*";delete r.trigger;var i=r.cwd||process.cwd();delete r.cwd;var u=[process.argv[1]];return grunt.util._.each(r,function(e,r){u.push("--"+r),u.push(e)}),u=u.concat(e),t.options=r,t},helper.cleanUp=function(e){"string"==typeof e&&(e=[e]),e.forEach(function(e){e=path.join(helper.fixtures,e),grunt.file.exists(e)&&grunt.file.delete(e)})},helper.unixify=function(e){return e.replace(/\\/g,"/").replace(/\r\n|\n/g,"\n")};