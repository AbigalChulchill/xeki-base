$.validator.addMethod("ziprange",function(x,t){return this.optional(t)||/^90[2-5]\d\{2\}-\d{4}$/.test(x)},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx");