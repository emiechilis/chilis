/*************************
 * Start
 * HiverGo
 * Copyright 2022
 * Version: 22.06.16
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
		
		/*** Temporary ***/
		byte(a){console.log(a)},
		void(a){$(`body`).append(this.xml(a))},
		get(){go.upload(`text/javascript`).go(e => this.setBOX(e.file))},
		setURL(a, b){go.web(`system`).url(`class`).then(e => console.log(e)).catch(e => console.log(e))},
		xml(a){return this.nod(`<strong style="font-size:90px; background: #ffe2e2; margin: 20px;">${a}</strong>`)},
		setBOX(a, b){go.web(`system`).box({doc: `class`, var: a, byte: this.byte}).then(e => this.setURL(e, b)).catch(e => console.log(e))},
		devs(a){this.for([`svg`, `class`, `go`], e => this.tag(`${e}.js`).onload = e => `go.js` == z(e.composedPath()[0].src.split(`/`)) && go.continue(a))},
		/*** End Temporary ***/
		
		/*** Firebase ***/
		fire: `8.10.1`,
		200(a){this.of(a, this.if(a)) && this.do(a)},
		let: [`app`, `init`, `auth`, `storage`, `firestore`, `functions`],
		of(a, b){return a == `app` || a == `init` ? window[b] : firebase[b]()},
		if(a){return a == `init` ? `firebaseConfig` : a == `app` ? `firebase` : a},
		do(a){(this.int -= 1) == 0 && this.device.go(e => this.test(this.mix(e, this.device.data())))},
		link(a, b){return a == `init` ? `/__/${b}/${a}.js?useEmulator=true` : `/__/${b}/${this.fire}/${b}-${a}.js`},
		go(){this.int = 6; this.for(this.let, e => this.tag(this.link(e, `firebase`)).onload = () => this[2e2](e))},
		call(a, b, x = firebase.functions().httpsCallable(a[0])){return x(a[1]).then(e => b(e.data)).catch(e => console.log(e))},
		/*** End Firebase ***/
		
		/*** Testing ***/
		type: [`Win32`, `Mac68K`, `MacPPC`, `MacIntel`, `iPod`],
		null(a, b){return [b.maxTouchPoints > 1, this.mode(a, `portrait`, window), this.type.indexOf(a) < 0]},
		mode(a, b, x){return a == `iPhone` ? x.matchMedia(`(orientation: ${b})`).matches : x.screen.orientation.type === `${b}-primary`},
		
		test(a, b = true){			
			this.var = a;
			`serial` in navigator && (b = !1);
			z(a.screen.width) >= 760 && (b = !1);
			this.for(this.null(a.device.platform, navigator), e => !e && (b = !1));
			!b ? navigator.onLine ? this.sign(a) : this.idb.open(`code`, !1, e => this.else(e)) : this.void(`no access!`);
		},
		/*** End Testing ***/
		
		/*** Login ***/
		user(a){this.call([`user`, a], e => this.case(e))},
		sign(a){firebase.auth().signInAnonymously().then(e => this.user(this.mix(a, this.all(e.user)))).catch(e => console.log(e))},
		all(a){return {id: a.uid, email: a.email, photo: a.photoURL, time: eval(a.metadata.a), name: a.displayName, phone: a.phoneNumber, anonymous: a.isAnonymous, verified: a.emailVerified}},
		/*** End Login ***/
		
		/*** Startup ***/
		case(a){this.eval(a.go, a.class, a)},
		else(a){this.eval(a.go.all, a.class.all)},
		eval(a, b, x){
			console.log(b);
			go = eval(atob(a));
			/******** temporary offline solution **********/
			this.tag(`/class.js`).onload = () => go.continue(x);
		},
		/*** End Startup ***/
		
		/*** Device ***/
		device: {
			all: [`model`, `platform`, `platformVersion`, `uaFullVersion`, `architecture`],
			go(a){return navigator.userAgentData.getHighEntropyValues(this.all).then(e => a(e))},
			data(a = window, b = navigator, x = a.screen, y = a.performance, z = y.memory, i = a.visualViewport){
				return {
					app: location.hostname,
					box: [`apps`, `card`, `chat`, `code`, `data`, `hive`, `user`, `text`, `own`],
					script: {used: z.usedJSHeapSize, limit: z.jsHeapSizeLimit, total: z.totalJSHeapSize},
					online: {live: b.onLine, ping: b.connection.rtt, speed: b.connection.downlink, type: b.connection.effectiveType},
					screen: {scale: i.scale, width: [a.innerWidth, i.width, x.width], height: [a.innerHeight, i.height, x.height], top: x.availTop, color: x.colorDepth, pixel: x.pixelDepth, way: x.orientation.type},
					device: {vendor: b.vendor, pixelRatio: a.devicePixelRatio, product: b.product, name: b.appName, platform: b.platform, language: b.languages, productSub: b.productSub, codename: b.appCodeName, memory: b.deviceMemory, event: y.eventCounts.size, cpu: b.hardwareConcurrency, agent: b.userAgent.slice(` `), version: b.appVersion.slice(` `)}
				}
			},
		},
		/*** End Device ***/
		
		/*** IndexedDB ***/
		idb: {
			idb(a, b, x, y = {key: a.key, map: a.value, out: !1}){b && b(y); x.new[y.key] = y.map; y.out ? x.new[y.key].delete = true : !1; (y.out ? a.delete() : a.update(y.map)).onsuccess = e => {x.data = x.new}; a.continue()},
			open(a, b, x, y = indexedDB.open(location.hostname), i){
				y.onsuccess = e => {
					this.new = {};
					(i = e.target.result[`transaction`](a, `readwrite`).objectStore(a)).openCursor().onsuccess = e => e.target.result ? this.idb(e.target.result, b, this) : !1;
					i[`transaction`].oncomplete = e => x && x(e.data = this.data);
				};
			},
		},
		/*** End IndexedDB ***/
	};
	
	start.go();
/*************************
 * Start
 * HiverGo
 * Copyright 2022
 * Version: 22.06.16
 * Developed by Emie Chilis
*************************/
