define(["./core","./var/strundefined","./var/rnotwhite","./var/hasOwn","./var/slice","./event/support","./data/var/data_priv","./core/init","./data/accepts","./selector"],function(e,t,n,i,o,r,a){function s(){return!0}function l(){return!1}function p(){try{return document.activeElement}catch(e){}}var c=/^key/,u=/^(?:mouse|pointer|contextmenu)|click/,d=/^(?:focusinfocus|focusoutblur)$/,f=/^([^.]*)(?:\.(.+)|)$/;return e.event={global:{},add:function(i,o,r,s,l){var p,c,u,d,h,v,g,m,y,b,T,w=a.get(i);if(w)for(r.handler&&(p=r,r=p.handler,l=p.selector),r.guid||(r.guid=e.guid++),(d=w.events)||(d=w.events={}),(c=w.handle)||(c=w.handle=function(n){return typeof e!==t&&e.event.triggered!==n.type?e.event.dispatch.apply(i,arguments):void 0}),o=(o||"").match(n)||[""],h=o.length;h--;)u=f.exec(o[h])||[],y=T=u[1],b=(u[2]||"").split(".").sort(),y&&(g=e.event.special[y]||{},y=(l?g.delegateType:g.bindType)||y,g=e.event.special[y]||{},v=e.extend({type:y,origType:T,data:s,handler:r,guid:r.guid,selector:l,needsContext:l&&e.expr.match.needsContext.test(l),namespace:b.join(".")},p),(m=d[y])||(m=d[y]=[],m.delegateCount=0,g.setup&&!1!==g.setup.call(i,s,b,c)||i.addEventListener&&i.addEventListener(y,c,!1)),g.add&&(g.add.call(i,v),v.handler.guid||(v.handler.guid=r.guid)),l?m.splice(m.delegateCount++,0,v):m.push(v),e.event.global[y]=!0)},remove:function(t,i,o,r,s){var l,p,c,u,d,h,v,g,m,y,b,T=a.hasData(t)&&a.get(t);if(T&&(u=T.events)){for(d=(i=(i||"").match(n)||[""]).length;d--;)if(c=f.exec(i[d])||[],m=b=c[1],y=(c[2]||"").split(".").sort(),m){for(v=e.event.special[m]||{},g=u[m=(r?v.delegateType:v.bindType)||m]||[],c=c[2]&&new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"),p=l=g.length;l--;)h=g[l],!s&&b!==h.origType||o&&o.guid!==h.guid||c&&!c.test(h.namespace)||r&&r!==h.selector&&("**"!==r||!h.selector)||(g.splice(l,1),h.selector&&g.delegateCount--,v.remove&&v.remove.call(t,h));p&&!g.length&&(v.teardown&&!1!==v.teardown.call(t,y,T.handle)||e.removeEvent(t,m,T.handle),delete u[m])}else for(m in u)e.event.remove(t,m+i[d],o,r,!0);e.isEmptyObject(u)&&(delete T.handle,a.remove(t,"events"))}},trigger:function(t,n,o,r){var s,l,p,c,u,f,h,v=[o||document],g=i.call(t,"type")?t.type:t,m=i.call(t,"namespace")?t.namespace.split("."):[];if(l=p=o=o||document,3!==o.nodeType&&8!==o.nodeType&&!d.test(g+e.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=g.indexOf(":")<0&&"on"+g,t=t[e.expando]?t:new e.Event(g,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=m.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=o),n=null==n?[t]:e.makeArray(n,[t]),h=e.event.special[g]||{},r||!h.trigger||!1!==h.trigger.apply(o,n))){if(!r&&!h.noBubble&&!e.isWindow(o)){for(c=h.delegateType||g,d.test(c+g)||(l=l.parentNode);l;l=l.parentNode)v.push(l),p=l;p===(o.ownerDocument||document)&&v.push(p.defaultView||p.parentWindow||window)}for(s=0;(l=v[s++])&&!t.isPropagationStopped();)t.type=s>1?c:h.bindType||g,(f=(a.get(l,"events")||{})[t.type]&&a.get(l,"handle"))&&f.apply(l,n),(f=u&&l[u])&&f.apply&&e.acceptData(l)&&(t.result=f.apply(l,n),!1===t.result&&t.preventDefault());return t.type=g,r||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(v.pop(),n)||!e.acceptData(o)||u&&e.isFunction(o[g])&&!e.isWindow(o)&&((p=o[u])&&(o[u]=null),e.event.triggered=g,o[g](),e.event.triggered=void 0,p&&(o[u]=p)),t.result}},dispatch:function(t){t=e.event.fix(t);var n,i,r,s,l,p=[],c=o.call(arguments),u=(a.get(this,"events")||{})[t.type]||[],d=e.event.special[t.type]||{};if(c[0]=t,t.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,t)){for(p=e.event.handlers.call(this,t,u),n=0;(s=p[n++])&&!t.isPropagationStopped();)for(t.currentTarget=s.elem,i=0;(l=s.handlers[i++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(l.namespace))&&(t.handleObj=l,t.data=l.data,void 0!==(r=((e.event.special[l.origType]||{}).handle||l.handler).apply(s.elem,c))&&!1===(t.result=r)&&(t.preventDefault(),t.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,t),t.result}},handlers:function(t,n){var i,o,r,a,s=[],l=n.delegateCount,p=t.target;if(l&&p.nodeType&&(!t.button||"click"!==t.type))for(;p!==this;p=p.parentNode||this)if(!0!==p.disabled||"click"!==t.type){for(o=[],i=0;l>i;i++)a=n[i],r=a.selector+" ",void 0===o[r]&&(o[r]=a.needsContext?e(r,this).index(p)>=0:e.find(r,this,null,[p]).length),o[r]&&o.push(a);o.length&&s.push({elem:p,handlers:o})}return l<n.length&&s.push({elem:this,handlers:n.slice(l)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,r=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||document,i=n.documentElement,o=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},fix:function(t){if(t[e.expando])return t;var n,i,o,r=t.type,a=t,s=this.fixHooks[r];for(s||(this.fixHooks[r]=s=u.test(r)?this.mouseHooks:c.test(r)?this.keyHooks:{}),o=s.props?this.props.concat(s.props):this.props,t=new e.Event(a),n=o.length;n--;)i=o[n],t[i]=a[i];return t.target||(t.target=document),3===t.target.nodeType&&(t.target=t.target.parentNode),s.filter?s.filter(t,a):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==p()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===p()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&e.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return e.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(t,n,i,o){var r=e.extend(new e.Event,i,{type:t,isSimulated:!0,originalEvent:{}});o?e.event.trigger(r,null,n):e.event.dispatch.call(n,r),r.isDefaultPrevented()&&i.preventDefault()}},e.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},e.Event=function(t,n){return this instanceof e.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?s:l):this.type=t,n&&e.extend(this,n),this.timeStamp=t&&t.timeStamp||e.now(),void(this[e.expando]=!0)):new e.Event(t,n)},e.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=s,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=s,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=s,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},e.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,n){e.event.special[t]={delegateType:n,bindType:n,handle:function(t){var i,o=this,r=t.relatedTarget,a=t.handleObj;return(!r||r!==o&&!e.contains(o,r))&&(t.type=a.origType,i=a.handler.apply(this,arguments),t.type=n),i}}}),r.focusinBubbles||e.each({focus:"focusin",blur:"focusout"},function(t,n){var i=function(t){e.event.simulate(n,t.target,e.event.fix(t),!0)};e.event.special[n]={setup:function(){var e=this.ownerDocument||this,o=a.access(e,n);o||e.addEventListener(t,i,!0),a.access(e,n,(o||0)+1)},teardown:function(){var e=this.ownerDocument||this,o=a.access(e,n)-1;o?a.access(e,n,o):(e.removeEventListener(t,i,!0),a.remove(e,n))}}}),e.fn.extend({on:function(t,n,i,o,r){var a,s;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(s in t)this.on(s,n,i,t[s],r);return this}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=l;else if(!o)return this;return 1===r&&(a=o,o=function(t){return e().off(t),a.apply(this,arguments)},o.guid=a.guid||(a.guid=e.guid++)),this.each(function(){e.event.add(this,t,o,i,n)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(t,n,i){var o,r;if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,e(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"==typeof t){for(r in t)this.off(r,n,t[r]);return this}return(!1===n||"function"==typeof n)&&(i=n,n=void 0),!1===i&&(i=l),this.each(function(){e.event.remove(this,t,i,n)})},trigger:function(t,n){return this.each(function(){e.event.trigger(t,n,this)})},triggerHandler:function(t,n){var i=this[0];return i?e.event.trigger(t,n,i,!0):void 0}}),e});