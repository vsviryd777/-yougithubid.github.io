/*! HTMLInclude v1.1.1 | MIT License | github.com/paul-browne/HTMLInclude 
short virsion
!function(l,d){l.HTMLInclude||(l.HTMLInclude=function(){function r(t,e){return t.getBoundingClientRect().top<=+e+l.innerHeight}function a(t,e){var o=new XMLHttpRequest;o.onreadystatechange=function(){4==o.readyState&&200==o.status&&e.forEach(function(t){var e=t.getAttribute("data-replace"),n=o.responseText;e&&e.split(",").forEach(function(t){var e=t.trim().split(":");n=n.replace(new RegExp(e[0],"g"),e[1])}),t.outerHTML=n;for(var r=(new DOMParser).parseFromString(n,"text/html").querySelectorAll("SCRIPT"),a=0,i=r.length;a<i;){var c=d.createElement("SCRIPT");r[a].src?c.src=r[a].src:c.innerHTML=r[a].innerHTML,d.head.appendChild(c),a++}})},o.open("GET",t,!0),o.send()}function t(e,n){l.addEventListener("scroll",function t(){r(e,n)&&(l.removeEventListener("scroll",t),a(e.getAttribute("data-include"),[e]))})}for(var e={},n=d.querySelectorAll("[data-include]:not([data-in])"),i=n.length;i--;){var c=n[i].getAttribute("data-include"),o=n[i].getAttribute("data-lazy");n[i].setAttribute("data-in",""),!o||o&&r(n[i],o)?(e[c]=e[c]||[],e[c].push(n[i])):t(n[i],o)}for(var u in e)a(u,e[u])}),l.HTMLInclude()}(window,document);
*/ 
!function(w, d) {
	if (!w.HTMLInclude) {
		 w.HTMLInclude = function() {
			  function isInViewport(element, offset) {
					return element.getBoundingClientRect().top <= (+offset + w.innerHeight);
			  }
			  function ajax(url, elements) {
					var xhr = new XMLHttpRequest();
					xhr.onreadystatechange = function() {
						 if (xhr.readyState == 4 && xhr.status == 200) {
							  elements.forEach(function(element) {
									var dataReplace = element.getAttribute("data-replace");
									var z = xhr.responseText;
									if (dataReplace) {
										 dataReplace.split(",").forEach(function(el) {
											  var o = el.trim().split(":");
											  z = z.replace(new RegExp(o[0], "g"), o[1]);
										 });
									}
									element.outerHTML = z;
									var scripts = new DOMParser().parseFromString(z, 'text/html').querySelectorAll("SCRIPT");
									var i = 0;
									var j = scripts.length;
									while (i < j) {
										 var newScript = d.createElement("SCRIPT");
										 scripts[i].src ? newScript.src = scripts[i].src : newScript.innerHTML = scripts[i].innerHTML;
										 d.head.appendChild(newScript);
										 i++;
									}
							  });
						 }
					};
					xhr.open("GET", url, true);
					xhr.send();
			  }
			  function lazyLoad(element, offset) {
					w.addEventListener("scroll", function scrollFunc() {
						 if (isInViewport(element, offset)) {
							  w.removeEventListener("scroll", scrollFunc);
							  ajax(element.getAttribute("data-include"), [element]);
						 }
					})
			  }
			  var store = {};
			  var dis = d.querySelectorAll('[data-include]:not([data-in])');
			  var i = dis.length;
			  while (i--) {
					var di = dis[i].getAttribute('data-include');
					var laziness = dis[i].getAttribute('data-lazy');
					dis[i].setAttribute("data-in", "");
					if (!laziness || (laziness && isInViewport(dis[i], laziness))) {
						 store[di] = store[di] || [];
						 store[di].push(dis[i]);
					} else {
						 lazyLoad(dis[i], laziness);
					}
			  }
			  for (var key in store) {
					ajax(key, store[key]);
			  }
		 }
	}
	w.HTMLInclude();
}(window, document)