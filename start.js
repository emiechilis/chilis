/*************************
 * Start
 * HiverGo
 * Copyright 2022
 * Version: 22.11.14
 * Developed by Emie Chilis
*************************/
	z = (a) => {return a[a.length - 1]};
	$ = a => {return document.querySelector(a)};
	__ = a => {return document.createElement(a)};
	_ = (a, b) => {return a.classList.contains(b)};
	
	start = {
		/*** Universal ***/
		key(a){return Object.keys(a)},
		enum(a){return a[Math.random() * a.length | 0]},
		json(a, b){return JSON[b ? `parse` : `stringify`](a)},
		nod(a, b = __(`div`)){b.innerHTML = a; return b.firstChild},
		tag(a, b = __(`script`)){b.async = !1; b.src = a; $(`body`).append(b); return b},
		mix(a, b){return Array.isArray(a) || Array.isArray(b) ? a.concat(b) : {...a, ...b}},
		for(a, b){(Array.isArray(a) ? a : this.key(a)).map(e => Array.isArray(a) ? b(e) : b(e, a[e]))},
		newOBJ(a, b, x, y = this.json(a)){setInterval(e => {x = this.json(a); y !== x && (b(this.json(y = x, 1)))}, 1e3)},
		/*** End Universal ***/
		
		/*** indexedDB ***/
		focus(a, b){return b.openCursor().onsuccess = (_, e = _.target.result) => e && this.self(a, e)},
		status(a, b, x){this.focus(a, x, this.new = {}); x[`transaction`].oncomplete = e => b && b(e.data = this.data)},
		open(a, b, x, y){indexedDB.open(location.hostname).onsuccess = e => this.status(b, x, y = e.target.result[`transaction`](a, `readwrite`).objectStore(a))},
		self(a, b, x = {key: b.key, map: b.value, out: !1}){a && a(y); this.new[x.key] = x.map; x.out && (this.new[x.key].delete = true); (x.out ? b.delete() : b.update(x.map)).onsuccess = e => {this.data = this.new}; b.continue()},
		/*** End indexedDB ***/
		
		/*** Firebase ***/
		fire: `8.10.1`,
		let: [`app`, `init`, `auth`, `storage`, `firestore`, `functions`],
		of(a, b){return a == `app` || a == `init` ? window[b] : firebase[b]()},
		if(a){return a == `init` ? `firebaseConfig` : a == `app` ? `firebase` : a},
		200(a, b = this.if(a)){b != `firebaseConfig` && this.of(a, b) && this.do(a)},
		link(a, b){return a == `init` ? `/__/${b}/${a}.js?useEmulator=true` : `/__/${b}/${this.fire}/${b}-${a}.js`},
		call(a, b, x = firebase.functions().httpsCallable(a[0])){return x(a[1]).then(e => b(e.data)).catch(e => console.log(e))},
		do(a){this.layer(`adding (${a})`); (this.int -= 1) == 0 && this.device.go(e => this.test(this.mix(e, this.device.data())))},
		go(){this.int = 5; this.metatag(this.style, $(`body`)); this.for(this.let, e => this.tag(this.link(e, `firebase`)).onload = () => this[2e2](e))},
		/*** End Firebase ***/
		
		/*** Signin ***/
		account(a, b, x){!x.slot && x.anonymous ? this.cloud(a, b) : this.offline()},
		event(a, b = firebase.auth()){this.reset = b.onAuthStateChanged(e => a(b, e))},
		await(a, b, x){this.layer(`signing in`); x ? this.user(a, x) : this.anonymous(a, b)},
		oldUSER(a, b){this.open(`mine`, !1, e => e ? this.account(a, b, e[this.key(e)[0]]) : this.cloud(a, b))},
		anonymous(a, b){return b.signInAnonymously().then(e => this.user(a, e.user)).catch(e => console.log(e))},
		cloud(a, b){this.layer(`getting icons`); this.call([`user`, this.mix(a, this.all(b))], e => this.case(e))},
		user(a, b){this.reset(); indexedDB.databases().then(e => e.length <= 1 ? this.cloud(a, b) : this.oldUSER(a, b)).catch(e => console.log(e))},
		all(a, b){return {id: a.uid, email: a.email, picture: a.photoURL, time: eval(a.metadata.a), name: a.displayName, phone: a.phoneNumber, anonymous: a.isAnonymous, verified: a.emailVerified}},
		/*** End Signin ***/
		
		/*** Startup ***/
		case(a){this.eval(a.go, a.class, a)},
		else(a){this.eval(a.go.all, a.class.all)},
		offline(){this.open(`code`, !1, e => this.else(e))},
		eval(a, b, x){go = eval(atob(a)); this.tag(b).onload = () => go.continue(x)},
		/*** End Startup ***/
		
		/*** Testing ***/
		type: [`Win32`, `Mac68K`, `MacPPC`, `MacIntel`],
		void(a, b = $(`body`)){b.innerHTML = ``; b.append(this.xml(a))},
		iOS(a = navigator){return /iPad|iPhone|iPod/.test(a.platform || a.userAgent)},
		null(a, b){return [a.maxTouchPoints > 1, this.way(), this.type.indexOf(b) < 0]},
		xml(a){return this.nod(`<strong style="font-size:90px; background: #ffe2e2; margin: 20px;">${a}</strong>`)},
		mode(a = `standalone`, b = window){return b.matchMedia(`(display-mode: ${a})`).matches || b.navigator[a] === true},
		way(a = `portrait`, b = window, x = `orientation`){return this.iOS() ? b.matchMedia(`(${x}: ${a})`).matches : b.screen[x].type === `${a}-primary`},
		
		test(a, b = true, x = navigator){
			this.layer(`checking device`);
			
			this.var = a;
			`serial` in x && (b = !1);
			z(a.screen.width) >= 760 && (b = !1);
			this.for(this.null(x, a.device.platform), e => !e && (b = !1));
			(location.hostname == `localhost` ? true : b) ? x.onLine ? this.event((x, y) => this.await(a, x, y)) : this.offline() : this.void(`no access!`);
		},
		/*** End Testing ***/
		
		/*** Device ***/
		device: {
			all: [`model`, `platform`, `platformVersion`, `uaFullVersion`, `architecture`],
			go(a){return navigator.userAgentData.getHighEntropyValues(this.all).then(e => a(e))},
			data(a = window, b = navigator, x = a.screen, y = a.performance, z = y.memory, i = a.visualViewport){
				return {
					app: location.hostname,
					script: {used: z.usedJSHeapSize, limit: z.jsHeapSizeLimit, total: z.totalJSHeapSize},
					online: {live: b.onLine, ping: b.connection.rtt, speed: b.connection.downlink, type: b.connection.effectiveType},
					screen: {scale: i.scale, width: [a.innerWidth, i.width, x.width], height: [a.innerHeight, i.height, x.height], top: x.availTop, color: x.colorDepth, pixel: x.pixelDepth, way: x.orientation.type},
					device: {vendor: b.vendor, pixelRatio: a.devicePixelRatio, product: b.product, name: b.appName, platform: b.platform, language: b.languages, productSub: b.productSub, codename: b.appCodeName, memory: b.deviceMemory, event: y.eventCounts.size, cpu: b.hardwareConcurrency, agent: b.userAgent.slice(` `), version: b.appVersion.slice(` `)}
				}
			},
		},
		/*** End Device ***/
		
		/*** Styler ***/
		layer(a){return $(`.loader`).innerHTML = `${a} ...`},
		metatag(a, b){
			b.innerHTML = a.xml();
			b.style.background = `#3d3f42`;
			this.layer(`starting HiverApp`);
			$(`head`).append(this.nod(`<meta ${a.view}></meta>`));
			this.for([`overhang`, `loader`, `mainicon`, `whole`, `the-round`], e => this.for(a[e], (x, y) => $(`.${e}`).style[x] = y));
		},
		
		style: {
			view: `name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"`,
			xml(){return`<div id="splashscreen" class="overhang"><div class="mainicon"><div class="whole"><div class="the-round">0%</div></div></div><span class="loader"></span></div>`},
			overhang: {top: '0', left: '0', width: '100%', height: '100%', zIndex: '1000', display: 'flex', flexFlow: 'column', position: 'absolute', background: '#3d3f42', textShadow: '#000000 0.3125vw 0px 0.46875vw'},
			
			mainicon: {
				margin: 'auto',
				width: '46.875vw',
				height: '46.875vw',
				borderRadius: '50%',
				position: 'relative',
				boxShadow: 'rgb(0 0 0 / 88%) 1px 1px 3px inset, #ffffff3d -1px 0.5px 1px, #ffffff47 0.5px 0.5px 2px',
			},
			
			whole: {
				width: '100%',
				height: '100%',
				position: 'relative',
				borderRadius: 'inherit',
				border: '6.25vw solid transparent',
				margin: 'auto',
			},
			
			[`the-round`]: {
				width: '100%',
				height: '100%',
				borderRadius: 'inherit',
				background: '#0000002b',
				lineHeight: '34.375vw',
				textAlign: 'center',
				position: 'relative',
				color: '#e5c974',
				fontSize: '7.5vw',
				margin: 'auto',
				fontFamily: 'cursive',
			},
			
			loader: {display: 'none', color: '#e5c974', height: '9.375vw', fontSize: '3.75vw', padding: '0 3.75vw', width: 'fit-content', position: 'relative', margin: '0 auto auto', lineHeight: '9.375vw', borderRadius: '1.875vw', background: '#ffffff12', fontFamily: 'monospace', textTransform: 'capitalize'},
			svg: `<path fill="#92c8ff" d="M30.9 23.9c-.3-.5-.5-1-.8-1.5-.6-1.1-1.2-2.3-1.8-3.4-.4-.8-1-1.2-1.9-1.2h-5.5c-.7 0-1.2.3-1.5.9l-3 5.7c-.3.6-.3 1.3 0 1.9 1 1.9 2 3.8 2.9 5.7.1.1.1.2.2.4h-4.3c-1.2 0-2-.5-2.6-1.5-.9-1.7-1.8-3.4-2.7-5.2-.7-1.3-1.4-2.7-2.1-4-.6-1.2-.6-2.3 0-3.5 1.6-3 3.2-6.1 4.7-9.1C13 8 13.8 7.5 15 7.5h9.3c1.2 0 2.1.5 2.6 1.6l4.8 9.3c.6 1.1.6 2.2 0 3.2 0 .8-.4 1.5-.8 2.3z"/><path fill="#f3d5a4" d="M19.8 26.8c-.2.4-.2.9 0 1.3.6 1.3 1.3 2.5 2 3.8.2.4.6.6 1.1.6H26.7c.5 0 .8-.2 1-.6.6-1.2 1.3-2.5 1.9-3.7.3-.5.3-1 0-1.4-.3-.5-.6-1.1-.8-1.6-.4-.7-.7-1.4-1.1-2.1-.2-.4-.6-.6-1-.6h-1.6-.1c0 .1.1.1.1.2.4.8.8 1.5 1.2 2.3.1.3.1.5 0 .8-.4.8-.8 1.6-1.2 2.3-.1.2-.3.4-.6.4h-2.3c-.4 0-.6-.2-.8-.5-.2-.5-.5-.9-.7-1.4l-.3-.6c-.2.1-.4.5-.6.8z"/>`,
		},
		/*** End Styler ***/
	};
	
	start.go();
/*************************
 * Start
 * HiverGo
 * Copyright 2022
 * Version: 22.11.14
 * Developed by Emie Chilis
*************************/
