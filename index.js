var arr = new Array();
  let listen = document.querySelector('.add');
  let input = document.querySelector('.inputArr');
  listen.addEventListener('click',()=>{
    input.value = " ";
    input.focus();
  })
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter'){
      event.preventDefault();
      listen.click();
    }
  })
  // hàm xóa rỗng input
 function clearThis(target){
  if (target.value != "") {
    target.value = " ";
  }
 }
 // hàm thêm vào mảng
function addArr() {
  let a = parseFloat(document.querySelector(".inputArr").value);
  if (isNaN(a)) {
    arr.push(0);
  } else {
    arr.push(a);
  }

  document.querySelector("#resultArr").innerHTML = arr;
  

}

// hàm tính tổng các số dương
function resultSum() {
  let sum = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
      count++;
    }
  }
  document.querySelector("#resultSum").innerHTML = sum;
  return count;
}
// hàm đếm số lượng số dương
function resultCountPS() {
  document.querySelector("#resultCountPS").innerHTML = resultSum();
}
//hàm tìm số nhỏ nhất
function resultMin() {
  let min = arr[0],
    minPs = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] >= 0) {
      if (arr[i] < minPs) {
        minPs = arr[i];
      }
    }
  }
  document.querySelector("#resultMin").innerHTML = min;
  return minPs;
}
// hàm tìm số dương nhỏ nhất
function resultMinPS() {
  document.querySelector("#resultMinPS").innerHTML = resultMin();
}
// hàm tìm số chẵn cuối cùng
function resultEven() {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      document.querySelector("#resultEven").innerHTML = arr[i];
      break;
    }
  }
}

// hàm sắp xếp tăng dần
function resultSort() {
  let ds = '';
  for (let i = 0; i < arr.length-1;i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  for(let i=0;i<arr.length;i++){
    ds +=(arr[i]+" ");
  }
      document.querySelector("#resultSort").innerHTML = ds;

}

function check(n) {
  if (n < 2) {
    return 0;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return 0;
      }
    }
  }
  return 1;
}

function prime(number) {
  let result = '';
  for (let i = 0; i < number.length; i++) {
    if (check(number[i])) {
      result += number[i];
      break;
    }
  }
  return result;
}
// let b = [1,4,6,11,15,3];
// prime(b);

// hàm tìm số nguyên tố đầu tiên
function resultPrime(){
  console.log(arr);
  document.querySelector("#resultPrime").innerHTML = prime(arr);

}

// hàm đếm số nguyên
function resultCountInt(){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }
  document.querySelector("#resultCountInt").innerHTML = `Có ${count} số nguyên`;

}

// hàm so sánh âm và dương
function resultLunisolar(){
  let Luni =0, solar = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>=0) {
      solar++;
    }
    else{
      Luni++;
    }
  }
  if(Luni>solar){
     document.querySelector("#resultLunisolar").innerHTML = `Số dương < số âm. Có ${solar} số dương, có ${Luni} số âm`;

  }else if(Luni<solar){
    document.querySelector("#resultLunisolar").innerHTML = `Số dương > số âm. Có ${solar} số dương, có ${Luni} số âm`;
  }
  else{
    document.querySelector("#resultLunisolar").innerHTML = `Số dương = số âm. Có ${solar} số dương, có ${Luni} số âm`;
  }
}

function search(arr,a,b){
  for(let i=0;i<arr.length;i++){
    if(arr[i]== a){
      let temp = arr[i];
      arr[i] = b;
      b = temp;
    }
  }
  return arr;
}
// let s =  [1,2,3,4,5]  //=> tìm thấy số 3 và thay thế số 3 là số 7
// // [1,2,7,4,5]
// search(s,3,7);

// hàm bắt sự kiện rỗng

let change = document.querySelectorAll('.change');
let changeBtn = document.getElementById('changeBtn');
change.forEach(element => {
  element.addEventListener('input', () => {
   if(element.value.length>0){
    changeBtn.disabled = false;
   }
   else{
    changeBtn.disabled = true;
   }
  })
  
});


// hàm đổi chỗ
function resultChange() {
  let a = parseFloat(document.getElementById('numberChanged').value);
  let b = parseFloat(document.getElementById('numberChange').value);
  if(arr.includes(a)){
    search(arr,a,b);
    document.querySelector("#resultChange").innerHTML = arr;
  }
  else{
    alert("Lỗi! kiểm tra lại dữ liệu");
  }
}