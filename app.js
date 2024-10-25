let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'big', 'amazing' ];
let noun = ['jogger', 'racoon', 'dog', 'cat'];

for(let i = 0; i < pronoun.length; i++) {

  for(let a = 0; a < adj.length; a++) {

    for(let n = 0; n < noun.length; n++) {

      console.log(pronoun[i] + adj[a] + noun[n] +'.com'); 
    }
  }
}
