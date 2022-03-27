/*************************
 * Start
 * HiverGo
 * Copyright 2022
 * Version: 22.03.27
 * Developed by Emie Chilis
*************************/
	z = (a) => {return a[a.length - 1]};
	$ = a => {return document.querySelector(a)};
	__ = a => {return document.createElement(a)};
	_ = (a, b) => {return a.classList.contains(b)};
	
	start = {
		/*** Universal ***/
		key(a){return Object.keys(a)},
		nod(a, b = __(`div`)){b.innerHTML = a; return b.firstChild},
		tag(a, b = __(`script`)){b.async = !1; b.src = a; $(`body`).append(b); return b},
		mix(a, b){return Array.isArray(a) || Array.isArray(b) ? a.concat(b) : {...a, ...b}},
		for(a, b){(Array.isArray(a) ? a : this.key(a)).map(e => Array.isArray(a) ? b(e) : b(e, a[e]))},
		/*** End Universal ***/
		
		/*** Firebase ***/
		fire: `8.10.1`,
		of(a, b){return a == `app` || a == `init` ? window[b] : firebase[b]()},
		if(a){return a == `init` ? `firebaseConfig` : a == `app` ? `firebase` : a},
		do(){6 == (this.int += 1) && this.device.go(e => this.open(this.mix(e, this.device.data())))},
		link(a, b){return a != `init` ? `/__/${b}/${this.fire}/${b}-${a}.js` : `/__/${b}/${a}.js?useEmulator=true`},
		200(a){
			// this.void(a);
			this.of(a, this.if(a)) ? this.void(a) : this.void(`reload page`);
		},
		go(){this.int = 0; this.for([`app`, `init`, `auth`, `storage`, `firestore`, `functions`], e => this.tag(this.link(e, `firebase`)).onload = () => this[2e2](e))},
		
		/*** End Firebase ***/
		
		/*** Device ***/
		device: {
			all: [`model`, `platform`, `platformVersion`, `uaFullVersion`, `architecture`],
			go(a){return navigator.userAgentData.getHighEntropyValues(this.all).then(e => a(e))},
			data(a = window, b = navigator, x = a.screen, y = a.performance, z = y.memory, i = a.visualViewport){
				return {
					script: {used: z.usedJSHeapSize, limit: z.jsHeapSizeLimit, total: z.totalJSHeapSize},
					online: {live: b.onLine, ping: b.connection.rtt, speed: b.connection.downlink, type: b.connection.effectiveType},
					screen: {scale: i.scale, width: [a.innerWidth, i.width, x.width], height: [a.innerHeight, i.height, x.height], top: x.availTop, color: x.colorDepth, pixel: x.pixelDepth, way: x.orientation.type},
					device: {vendor: b.vendor, pixelRatio: a.devicePixelRatio, product: b.product, name: b.appName, platform: b.platform, language: b.languages, productSub: b.productSub, codename: b.appCodeName, memory: b.deviceMemory, event: y.eventCounts.size, cpu: b.hardwareConcurrency, agent: b.userAgent.slice(` `), version: b.appVersion.slice(` `)}
				}
			},
		},
		/*** End Device ***/
		
		/*** Testing ***/
		feature: [`contacts`, `serial`],
		type: [`Win32`, `Mac68K`, `MacPPC`, `MacIntel`, `iPod`],
		null(a, b){return a == `serial` ? b[a] ? true : !1 : !b[a]},
		all(a, b){return [b.maxTouchPoints > 1, this.mode(a, `portrait`, window), this.type.indexOf(a) < 0]},
		mode(a, b, x){return a == `iPhone` ? x.matchMedia(`(orientation: ${b})`).matches : x.screen.orientation.type === `${b}-primary`},
		
		open(a, b = true){
			this.var = a;
			this.for(a.screen.width, e => e > 760 && (b = !1));
			this.for(this.feature, e => this.null(e, navigator) && (b = !1));
			this.for(this.all(a.device.platform, navigator), e => !e && (b = !1));
			this.void(b);
			// b ? this.continue(a) : this.void(`no access!`);
		},
		
		continue(a){
			alert(a);
		},
		
		void(a){$(`body`).append(this.xml(a))},
		xml(a){return this.nod(`<strong style="font-size:90px; background: #ffe2e2; margin: 20px;">${a}</strong>`)},
		/*** End Testing ***/
	};
	
	start.go();
/*************************
 * Start
 * HiverGo
 * Copyright 2022
 * Version: 22.03.27
 * Developed by Emie Chilis
*************************/
