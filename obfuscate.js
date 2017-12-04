var password = process.argv[2];

function obfuscate(password){
  var obs = password.replace(/a/g, "4").replace(/e/g, "3").replace(/o/g, "0").replace(/l/g, "1");
  console.log(obs);
}

obfuscate(password);
