const a = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];

const timeGap = 3000;


// insert map data push code:





const pp = (s) => console.log(s);

for (let i=0; i<a.length; i++) {
  setTimeout(pp, timeGap * i, a[i]);
}
