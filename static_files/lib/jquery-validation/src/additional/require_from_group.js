$.validator.addMethod("require_from_group",function(a,e,t){var d=$(t[1],e.form),i=d.eq(0),r=i.data("valid_req_grp")?i.data("valid_req_grp"):$.extend({},this),l=d.filter(function(){return r.elementValue(this)}).length>=t[0];return i.data("valid_req_grp",r),$(e).data("being_validated")||(d.data("being_validated",!0),d.each(function(){r.element(this)}),d.data("being_validated",!1)),l},$.validator.format("Please fill at least {0} of these fields."));