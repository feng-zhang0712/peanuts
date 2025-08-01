async function async1() {
  console.log("async1 start");
  await async2(); // 1
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2"); // 2
});

console.log('script end')



script start

async1 start
async2
async1 end


promise1
script end

promise2

setTimeout