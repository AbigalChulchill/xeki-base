"object"==typeof window.google&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(t){for(var e,o=new google.maps.LatLngBounds,n=this.getPaths(),g=0;g<n.getLength();g++){e=n.getAt(g);for(var r=0;r<e.getLength();r++)o.extend(e.getAt(r))}return o}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(t){var e=this.getBounds();if(null!==e&&!e.contains(t))return!1;for(var o=!1,n=this.getPaths().getLength(),g=0;n>g;g++)for(var r=this.getPaths().getAt(g),a=r.getLength(),s=a-1,l=0;a>l;l++){var i=r.getAt(l),p=r.getAt(s);(i.lng()<t.lng()&&p.lng()>=t.lng()||p.lng()<t.lng()&&i.lng()>=t.lng())&&i.lat()+(t.lng()-i.lng())/(p.lng()-i.lng())*(p.lat()-i.lat())<t.lat()&&(o=!o),s=l}return o}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(t){return!google.maps.geometry||google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),t)<=this.getRadius()}),google.maps.LatLngBounds.prototype.containsLatLng=function(t){return this.contains(t)},google.maps.Marker.prototype.setFences=function(t){this.fences=t},google.maps.Marker.prototype.addFence=function(t){this.fences.push(t)},google.maps.Marker.prototype.getId=function(){return this.__gm_id}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){"use strict";if(null==this)throw new TypeError;var e=Object(this),o=e.length>>>0;if(0===o)return-1;var n=0;if(arguments.length>1&&((n=Number(arguments[1]))!=n?n=0:0!=n&&n!=1/0&&n!=-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=o)return-1;for(var g=n>=0?n:Math.max(o-Math.abs(n),0);o>g;g++)if(g in e&&e[g]===t)return g;return-1});