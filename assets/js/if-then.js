
// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B.

if (A != B) {
    console.log('statement true!');
} 


//opgave 2: skrive en If then statement der vurderer om A er større end B og A er mindre end E.

if (A > B && A < E) { 
console.log('A er større end B og A er mindre end E');
} else {
    console.log("A er ikke større end B");
}



//opgave 3: Skriv en If then statement der vurderer om A er mindre end eller lig med B

if(A < B || A == B) {
    console.log('A er mindre end eller lig med B');
}


//opgave 4: Skriv en If then statement der bliver FALSE når du sammenligner B og C.

if (B === C ) {
    console.log("True");
} else {
    console.log('False');
}



//opgave 5: Skriv en If then statement der bliver TRUE når du sammenligner B og C.

if (B == C ) {
    console.log("True");
} else {
    console.log('False');
}




//opgave 6: Skriv en If then statement der sammenligner B = C og E = A hvis B=C skal den blive TRUE. 

if (B == C || E == A ) {
    console.log('True');    
} else {
    console.log('false');
}
