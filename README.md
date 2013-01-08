skod.it implementation of the Damerau-Levenshtein distance.  This is *not* the Levenshtein distance only, this allows for a look-ahead and substitute at no cost.

Example:
--------
```
Comparing: 'four' and 'fuor'
Levenshtein Distance: 2 - a substitution on the 'o' and the 'u' is required
Damerau-Levenshtein Distance: 1 - in 'fuor' borrowed the 'o' and had to generate the 'o' in the third place again.
```

Using skod_levenshteindamerau
```bash
  $ npm install levenshtein-damerau
```

Within your application
```javascript
var ld = require("./skodld.js");

console.log("four:fuor",ld("four","fuor"));

/* DEBUG */
var showmatrix = 6;
console.log("\nfuor:four,debug custom");
ld("fuor","four",function(matrix){
  showmatrix--;
  if(showmatrix == 0){
    console.log(matrix);
  }
});

console.log("\nfuor:four,default debug");
ld("fuor","four",1);        
```

Outputs:
```
four:fuor 1

fuor:four,debug custom
[ [ 8, 8, 8, 8, 8, 8 ],
  [ 8, 0, 1, 2, 3, 4 ],
  [ 8, 1, 0, 1, 2, 3 ],
  [ 8, 2, 1, 1, 1, 2 ],
  [ 8, 3, 2, 1, 1, 2 ],
  [ 8, 4, 3, 2, 2, 1 ] ]

fuor:four,default debug
		f	u	o	r	
	8	
f	
o	
u	
r	
	
		f	u	o	r	
	8	8	8	8	8	8	
f	8	0	1	2	3	4	
o	8	1	
u	8	2	
r	8	3	
	8	4	
		f	u	o	r	
	8	8	8	8	8	8	
f	8	0	1	2	3	4	
o	8	1	0	1	2	3	
u	8	2	
r	8	3	
	8	4	
		f	u	o	r	
	8	8	8	8	8	8	
f	8	0	1	2	3	4	
o	8	1	0	1	2	3	
u	8	2	1	1	1	2	
r	8	3	
	8	4	
		f	u	o	r	
	8	8	8	8	8	8	
f	8	0	1	2	3	4	
o	8	1	0	1	2	3	
u	8	2	1	1	1	2	
r	8	3	2	1	1	2	
	8	4	
		f	u	o	r	
	8	8	8	8	8	8	
f	8	0	1	2	3	4	
o	8	1	0	1	2	3	
u	8	2	1	1	1	2	
r	8	3	2	1	1	2	
	8	4	3	2	2	1	
```
