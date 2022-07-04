import {K768_KeyGen, K768_Encrypt, K768_Decrypt} from 'crystals-kyber';

// To generate a public and private key pair (pk, sk)
console.log("Começando execução:")
let pk_sk = K768_KeyGen();
let pk = pk_sk[0];
let sk = pk_sk[1];

// To generate a random 256 bit symmetric key (ss) and its encapsulation (c)
console.log("Cifrando!")
let c_ss = K768_Encrypt(pk);
console.log({pk});
let c = c_ss[0];
let ss1 = c_ss[1];

// To decapsulate and obtain the same symmetric key
console.log("Decifrando!")
let ss2 = K768_Decrypt(c,sk);
console.log({ss2});