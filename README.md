# Teljari

Print arrays with commas and conjunctions for human consumption

`Array.join(',')` might bring you far when printing contents for humans. Yet you often want the last entry not be preceded by comma, but by the word 'and' or maybe 'or'. Teljari does this for you.

### Install

`yarn add teljari`

### Usage


```javascript
const { joinWithConj } = require('teljari');

const languages = ['Finnish', 'Swedish', 'Norwegian', 'Danish']

const withAnd     = joinWithConj(languages, 'and') 
const withOr      = joinWithConj(languages, 'or') 
const withOrWorse = joinWithConj(languages, 'or worse,' ) 

console.log(withAnd) // Finnish, Swedish, Norwegian and Danish
console.log(withOr) // Finnish, Swedish, Norwegian or Danish
console.log(withOrWorse) // Finnish, Swedish, Norwegian or worse, Danish

```

#### What's in the name?

"Teljari" comes from Old Norse verb for "telja" (to count, tell). It has same origins as English verb "tell". Verb + ari structure, which makes it a noun, "someone who tells". Teljari tells what's in your array as a human would want to hear it.
