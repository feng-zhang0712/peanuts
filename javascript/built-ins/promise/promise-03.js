// 下面代码的输出是什么？

async function async1 () {
  await async2();
  console.log('async1');
  return 'async1 success'
}

async function async2 () {
  return new Promise((_, reject) => {
    console.log('async2')
    reject('error')
  })
}

async1().then(res => console.log(res))