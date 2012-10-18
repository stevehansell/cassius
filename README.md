#Cassius

###Usage
Setup Cassius with a cache version and optional param key.

```javascript
var cassius = Cassius.init('clay', 'CASSIUS');
```

Call `cassius.path(filepath)` to automatically retrieve the cached resource.

```javascript
cassius.path('/path/to/some/template.html'); => '/path/to/some/template.html?CASSIUS=clay'
```

After you update a resource, update the cache version key on the `init` call.

```javascript
var cassius = Cassius.init('ali', 'CASSIUS');
cassius.path('/path/to/some/template.html'); => '/path/to/some/template.html?CASSIUS=ali'
```

![Cassius](http://i.telegraph.co.uk/multimedia/archive/01375/cassius-clay_1375357c.jpg)