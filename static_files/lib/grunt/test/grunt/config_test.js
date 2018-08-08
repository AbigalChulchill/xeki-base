"use strict";var grunt=require("../../lib/grunt");exports.config={setUp:function(o){this.origData=grunt.config.data,grunt.config.init({meta:grunt.file.readJSON("test/fixtures/test.json"),foo:"<%= meta.foo %>",foo2:"<%= foo %>",obj:{foo:"<%= meta.foo %>",foo2:"<%= obj.foo %>",Arr:["foo","<%= obj.foo2 %>"],arr2:["<%= arr %>","<%= obj.Arr %>"]},bar:"bar",arr:["foo","<%= obj.foo2 %>"],arr2:["<%= arr %>","<%= obj.Arr %>"],buffer:new Buffer("test")}),o()},tearDown:function(o){grunt.config.data=this.origData,o()},"config.escape":function(o){o.expect(2),o.equal(grunt.config.escape("foo"),"foo","Should do nothing if no . chars."),o.equal(grunt.config.escape("foo.bar.baz"),"foo\\.bar\\.baz","Should escape all . chars."),o.done()},"config.getPropString":function(o){o.expect(4),o.equal(grunt.config.getPropString("foo"),"foo","Should do nothing if already a string."),o.equal(grunt.config.getPropString("foo.bar.baz"),"foo.bar.baz","Should do nothing if already a string."),o.equal(grunt.config.getPropString(["foo","bar"]),"foo.bar","Should join parts into a dot-delimited string."),o.equal(grunt.config.getPropString(["foo.bar","baz.qux.zip"]),"foo\\.bar.baz\\.qux\\.zip","Should join parts into a dot-delimited string, escaping . chars in parts."),o.done()},"config.getRaw":function(o){o.expect(4),o.equal(grunt.config.getRaw("foo"),"<%= meta.foo %>","Should not process templates."),o.equal(grunt.config.getRaw("obj.foo2"),"<%= obj.foo %>","Should not process templates."),o.equal(grunt.config.getRaw(["obj","foo2"]),"<%= obj.foo %>","Should not process templates."),o.deepEqual(grunt.config.getRaw("arr"),["foo","<%= obj.foo2 %>"],"Should not process templates."),o.done()},"config.process":function(o){o.expect(7),o.equal(grunt.config.process("<%= meta.foo %>"),"bar","Should process templates."),o.equal(grunt.config.process("<%= foo %>"),"bar","Should process templates recursively."),o.equal(grunt.config.process("<%= obj.foo %>"),"bar","Should process deeply nested templates recursively."),o.deepEqual(grunt.config.process(["foo","<%= obj.foo2 %>"]),["foo","bar"],"Should process templates in arrays."),o.deepEqual(grunt.config.process(["<%= arr %>","<%= obj.Arr %>"]),[["foo","bar"],["foo","bar"]],"Should expand <%= arr %> and <%= obj.Arr %> values as objects if possible.");var e=grunt.config.process("<%= buffer %>");o.ok(Buffer.isBuffer(e),"Should retrieve Buffer instances as Buffer."),o.deepEqual(e,new Buffer("test"),"Should return buffers as-is."),o.done()},"config.get":function(o){o.expect(10),o.equal(grunt.config.get("foo"),"bar","Should process templates."),o.equal(grunt.config.get("foo2"),"bar","Should process templates recursively."),o.equal(grunt.config.get("obj.foo2"),"bar","Should process deeply nested templates recursively."),o.equal(grunt.config.get(["obj","foo2"]),"bar","Should process deeply nested templates recursively."),o.deepEqual(grunt.config.get("arr"),["foo","bar"],"Should process templates in arrays."),o.deepEqual(grunt.config.get("obj.Arr"),["foo","bar"],"Should process templates in arrays."),o.deepEqual(grunt.config.get("arr2"),[["foo","bar"],["foo","bar"]],"Should expand <%= arr %> and <%= obj.Arr %> values as objects if possible."),o.deepEqual(grunt.config.get(["obj","arr2"]),[["foo","bar"],["foo","bar"]],"Should expand <%= arr %> and <%= obj.Arr %> values as objects if possible.");var e=grunt.config.get("buffer");o.ok(Buffer.isBuffer(e),"Should retrieve Buffer instances as Buffer."),o.deepEqual(e,new Buffer("test"),"Should return buffers as-is."),o.done()},"config.set":function(o){o.expect(6),o.equal(grunt.config.set("foo3","<%= foo2 %>"),"<%= foo2 %>","Should set values."),o.equal(grunt.config.getRaw("foo3"),"<%= foo2 %>","Should have set the value."),o.equal(grunt.config.data.foo3,"<%= foo2 %>","Should have set the value."),o.equal(grunt.config.set("a.b.c","<%= foo2 %>"),"<%= foo2 %>","Should create interim objects."),o.equal(grunt.config.getRaw("a.b.c"),"<%= foo2 %>","Should have set the value."),o.equal(grunt.config.data.a.b.c,"<%= foo2 %>","Should have set the value."),o.done()},"config.merge":function(o){o.expect(4),o.deepEqual(grunt.config.merge({}),grunt.config.getRaw(),"Should return internal data object."),grunt.config.set("obj",{a:12}),grunt.config.merge({foo:"test",baz:"123",obj:{a:34,b:56}}),o.deepEqual(grunt.config.getRaw("foo"),"test","Should overwrite existing properties."),o.deepEqual(grunt.config.getRaw("baz"),"123","Should add new properties."),o.deepEqual(grunt.config.getRaw("obj"),{a:34,b:56},"Should deep merge."),o.done()},config:function(o){o.expect(10),o.equal(grunt.config("foo"),"bar","Should retrieve processed data."),o.equal(grunt.config("obj.foo2"),"bar","Should retrieve processed data."),o.equal(grunt.config(["obj","foo2"]),"bar","Should retrieve processed data."),o.deepEqual(grunt.config("arr"),["foo","bar"],"Should process templates in arrays."),o.equal(grunt.config("foo3","<%= foo2 %>"),"<%= foo2 %>","Should set values."),o.equal(grunt.config.getRaw("foo3"),"<%= foo2 %>","Should have set the value."),o.equal(grunt.config.data.foo3,"<%= foo2 %>","Should have set the value."),o.equal(grunt.config("a.b.c","<%= foo2 %>"),"<%= foo2 %>","Should create interim objects."),o.equal(grunt.config.getRaw("a.b.c"),"<%= foo2 %>","Should have set the value."),o.equal(grunt.config.data.a.b.c,"<%= foo2 %>","Should have set the value."),o.done()},"config.requires":function(o){o.expect(8),grunt.log.muted=!0,o.doesNotThrow(function(){grunt.config.requires("foo")},"This property exists."),o.doesNotThrow(function(){grunt.config.requires("obj.foo")},"This property exists."),o.doesNotThrow(function(){grunt.config.requires("foo","obj.foo","obj.foo2")},"These properties exist."),o.doesNotThrow(function(){grunt.config.requires("foo",["obj","foo"],["obj","foo2"])},"These properties exist."),o.throws(function(){grunt.config.requires("xyz")},"This property does not exist."),o.throws(function(){grunt.config.requires("obj.xyz")},"This property does not exist."),o.throws(function(){grunt.config.requires("foo","obj.foo","obj.xyz")},"One property does not exist."),o.throws(function(){grunt.config.requires("foo",["obj","foo"],["obj","xyz"])},"One property does not exist."),grunt.log.muted=!1,o.done()}};