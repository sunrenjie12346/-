// pages/kj/RandomSum/index.js
var rand, sum;//定义全局变量
function createRand() {
  rand = []; //初始化数组变量
  sum = 0; //初始化sum变量
  for (var i = 0; i < 7; i++) {
    var r = (Math.random() * 31).toFixed(0)*1; //产生30以内的随机数并转换为数值类型\
    rand.push(r); //将产生的随机数添加到数组中
    console.log(rand[i]); //在控制台显示数组元素
  }
  console.log(sum);  
};

Page({
  onLoad: function() {
    createRand(); //调用产生随机数函数
    this.setData({
      rand: rand,
      sum: sum
    })
  },
  newRand: function() {
    createRand(); //调用产生随机数函数
    this.setData({
      rand: rand,
      sum: sum
    })
  }
})