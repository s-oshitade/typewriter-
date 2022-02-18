let sentence = "hello there from lighthouse labs";
sentence = sentence + '\n';
function typeWriter(sentence) {
  let period = 50;
  for (let char of sentence){
    setTimeout(() => {
      process.stdout.write(char);
    }, period);
    period += 50;
  }
}
typeWriter(sentence);