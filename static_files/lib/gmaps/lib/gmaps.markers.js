GMaps.prototype.createMarker=function(e){if(void 0==e.lat&&void 0==e.lng&&void 0==e.position)throw"No latitude or longitude defined.";var r=this,t=e.details,i=e.fences,n=e.outside,a={position:new google.maps.LatLng(e.lat,e.lng),map:null},o=extend_object(a,e);delete o.lat,delete o.lng,delete o.fences,delete o.outside;var s=new google.maps.Marker(o);if(s.fences=i,e.infoWindow){s.infoWindow=new google.maps.InfoWindow(e.infoWindow);for(var d=["closeclick","content_changed","domready","position_changed","zindex_changed"],l=0;l<d.length;l++)!function(r,t){e.infoWindow[t]&&google.maps.event.addListener(r,t,function(r){e.infoWindow[t].apply(this,[r])})}(s.infoWindow,d[l])}for(var h=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],c=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],l=0;l<h.length;l++)!function(r,t){e[t]&&google.maps.event.addListener(r,t,function(){e[t].apply(this,[this])})}(s,h[l]);for(l=0;l<c.length;l++)!function(r,t,i){e[i]&&google.maps.event.addListener(t,i,function(t){t.pixel||(t.pixel=r.getProjection().fromLatLngToPoint(t.latLng)),e[i].apply(this,[t])})}(this.map,s,c[l]);return google.maps.event.addListener(s,"click",function(){this.details=t,e.click&&e.click.apply(this,[this]),s.infoWindow&&(r.hideInfoWindows(),s.infoWindow.open(r.map,s))}),google.maps.event.addListener(s,"rightclick",function(t){t.marker=this,e.rightclick&&e.rightclick.apply(this,[t]),void 0!=window.context_menu[r.el.id].marker&&r.buildContextMenu("marker",t)}),s.fences&&google.maps.event.addListener(s,"dragend",function(){r.checkMarkerGeofence(s,function(e,r){n(e,r)})}),s},GMaps.prototype.addMarker=function(e){var r;if(e.hasOwnProperty("gm_accessors_"))r=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined.";r=this.createMarker(e)}return r.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(r),this.markers.push(r),GMaps.fire("marker_added",r,this),r},GMaps.prototype.addMarkers=function(e){for(var r,t=0;r=e[t];t++)this.addMarker(r);return this.markers},GMaps.prototype.hideInfoWindows=function(){for(var e,r=0;e=this.markers[r];r++)e.infoWindow&&e.infoWindow.close()},GMaps.prototype.removeMarker=function(e){for(var r=0;r<this.markers.length;r++)if(this.markers[r]===e){this.markers[r].setMap(null),this.markers.splice(r,1),this.markerClusterer&&this.markerClusterer.removeMarker(e),GMaps.fire("marker_removed",e,this);break}return e},GMaps.prototype.removeMarkers=function(e){var r=[];if(void 0===e){for(i=0;i<this.markers.length;i++)(n=this.markers[i]).setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(n),GMaps.fire("marker_removed",n,this);this.markers=r}else{for(i=0;i<e.length;i++){var t=this.markers.indexOf(e[i]);t>-1&&((n=this.markers[t]).setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(n),GMaps.fire("marker_removed",n,this))}for(var i=0;i<this.markers.length;i++){var n=this.markers[i];null!=n.getMap()&&r.push(n)}this.markers=r}};