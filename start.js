/*************************
 * Start
 * HiverGo
 * Copyright 2022
 * Version: 22.03.27
 * Developed by Emie Chilis
*************************/
	$ = a => {return document.querySelector(a)};
	__ = a => {return document.createElement(a)};
	_ = (a, b) => {return a.classList.contains(b)};
	
	start = {
		/*** Universal ***/
		key(a){return Object.keys(a)},
		tag(a, b = __(`script`)){b.async = !1; b.src = a; $(`body`).append(b); return b},
		for(a, b){(Array.isArray(a) ? a : this.key(a)).map(e => Array.isArray(a) ? b(e) : b(e, a[e]))},
		/*** End Universal ***/
		
		/*** Firebase ***/
		fire: `8.10.1`,
		var: [`app`, `init`, `auth`, `storage`, `firestore`, `functions`],
		of(a, b){return a == `app` || a == `init` ? window[b] : firebase[b]()},
		if(a){return a == `init` ? `firebaseConfig` : a == `app` ? `firebase` : a},
		200(a){this.of(a, this.if(a)) ? 6 == (this.int += 1) && this.open() : location.reload()},
		go(){this.int = 0; this.for(this.var, e => this.tag(this.link(e, `firebase`)).onload = () => this[2e2](e))},
		link(a, b){return a != `init` ? `/__/${b}/${this.fire}/${b}-${a}.js` : `/__/${b}/${a}.js?useEmulator=true`},
		/*** End Firebase ***/
		
		/*** Begin ***/
		open(){
			console.log(`sign in user`);
		},
		/*** End Begin ***/
	};
	
	start.go();
/*************************
 * Start
 * HiverGo
 * Copyright 2022
 * Version: 22.03.27
 * Developed by Emie Chilis
*************************/