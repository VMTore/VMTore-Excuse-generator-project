
//Arrays

let pronoun = ['the', 'our', 'your',];
let adj = ['great', 'big', 'fantastic', 'amazing'];
let noun = ['jogger', 'racoon', 'cat', 'dog'];
let domain = ['.es', '.com', '.net', '.org', '.net'];

//Bucle e impresión de array 

for (let i = 0; i < pronoun.length; i++){
    for (let x = 0; x < adj.length; x++) {
        for (let y = 0; y < noun.length; y++){
            for (let z = 0; z < domain.length; z++){
                console.log(pronoun[i]+adj[x]+noun[y]+domain[z]);
            }
        }
    }
}