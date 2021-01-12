// đồng bộ
// console.log(1);

// console.log(2);

// console.log(3);

// setTimeout(function callBack() {
//   console.log("t đã đợi xong 5s tức là 5000ms");
// }, 5000);

// console.log(1);

// setTimeout(function cb() {
//   console.log(2);
// }, 2000);

// console.log(3);

// bất đồng bộ 1 3 2
// đồng bộ lại : 1 2 3

// callBack Function

// promise
// console.log(1);
// const p = new Promise((resolve, reject) => {
//   // pending
//   setTimeout(function cb() {
//     console.log(2);
//     resolve(3); // giải quyết thành công
//   }, 2000);
// });
// p.then((so) => {
//   console.log(so);
// }).catch((err) => {
//   console.log(err);
// });

// async/await
async function main() {
  console.log(1);

  await new Promise(function (resolve) {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 3000);
  });

  console.log(3);
}

main();
