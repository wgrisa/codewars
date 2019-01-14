# object-oriented-piracy
// https://www.codewars.com/kata/object-oriented-piracy/solutions/javascript/me/best_practice


```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = () => this.draft - (this.crew*1.5)  > 20;
}
```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = () => this.draft - this.crew * 1.5 > 20;
}
```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = () => (this.draft - this.crew * 1.5) > 20;
}
```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;

 this.isWorthIt = () => (this.draft - (this.crew * 1.5)) > 20;
}
```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;

  this.isWorthIt = ()=>this.draft - this.crew * 1.5 > 20;
}


```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = () => this.draft - this.crew*1.5 > 20;
}
```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = ()=>(this.draft-this.crew*1.5)>20
}
```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = () => this.draft-( this.crew*1.5 ) > 20;
}

//YOUR CODE HERE...
```

```
function Ship(draft, crew) {
  this.isWorthIt = () => this.draft - this.crew * 1.5 > 20;
}
```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = ()=> this.draft-this.crew*1.5 > 20;
}

```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = () => this.draft - (this.crew * 1.5) > 20;
}
```

```
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = () => this.draft - this.crew * 1.5 > 20;
}


```
