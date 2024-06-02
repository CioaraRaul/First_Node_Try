const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8080/hello.html?id=100&status=active"
);

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// host (root domain)
console.log(myUrl.host);

// hostname (does not get port)
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params obj

console.log(myUrl.searchParams);

// add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, param) => {
  console.log(`${param}: ${value}`);
});
