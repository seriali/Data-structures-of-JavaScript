/*
添加元素：
unshift():向数组的头部添加元素,会改变原数组
push():向数组的最后添加元素,会改变原数组
 */
let arr = [];
arr.unshift(1);//[1]
arr.unshift(2);//[2,1]
arr.push(3);//[2,1,3]
/*
删除元素：
shift():在数组的第一个元素删除，并返回第一个元素的值
pop()：删除数组的最后一个元素，并返回最后一个元素的值
 */
arr.shift();//2
arr.pop();//3
/*
splice(index,count,item1,item2...itemN):在任意位置添加/删除元素。会改变原数组
index:必填，整数，表示添加/删除元素的位置
count：必填，表示要删除的数量，设置为0，则不会删除元素
item1,item2...itemN:可选参数，表示向数组中要添加的元素
 */
arr.splice(0,0,2,3,4);
// console.log(arr);//[2,3,4,1]
/*
slice(start,end):从数组中返回选定的元素，不会改变原数组
start:必填，规定从何处开始选取，如果是负数，那么它规定从数组尾部开始算起位置
      例如-1表示最后一个元素，-2表示倒数第二个元素，依次类推
end:可选，规定从何处结束选取
 */
/*
join():用于连接字符串,不会改变原数组
 */
arr.join('');//2341
arr.join('=');//2=3=4=1
/*
split(s,h):将一个字符串分割成字符串数组
s:必填，表示从指定的地方分割字符串
h：可选，指定返回数组的最大长度
 */
let arr2 = 'How are you?';
arr2.split("");//[ 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?' ]
arr2.split("", 5);//[ 'H', 'o', 'w', ' ', 'a' ]
//arr = [2,3,4,1]
arr.slice(1,2);//表示从索引为1(第二个位置)开始,到索引为2(第三个位置)结束，-> 3
/*
concat():连接多个数组，并返回结果。不会改变原数组
 */
let arr1 = [5,6,7];
arr.concat(arr1);//[ 2, 3, 4, 1, 5, 6, 7 ]
/*
indexOf():返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1
 */
//arr = [2,3,4,1]
arr.indexOf(5);//-1,没有找到
arr.indexOf(3);//1,arr[1] = 3,返回当前元素所在的索引
/*
lastIndexOf():从数组的最后往前查找，元素最后一次出现的位置，没有找到则返回-1
 */
arr.lastIndexOf(4);//2,arr[2] = 4
/*
map():对数组中的每个元素运行给定函数，返回每次函数调用的结果组成的数组.不会改变原数组
 */
//arr = [2,3,4,1]
arr.map(x => x*2);//4,6,8,2
/*
forEach():用法跟map()相同
 */
arr.forEach(x => x);//2,3,4,1
/*
reverse():逆序输出原数组,会改变原数组
 */
arr.reverse();//[1,4,3,2]
/*
filter():方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素.不会改变原数组
 */
arr.filter((value, index, array) => {
    return value > 2; //[4,3]返回数组中大于2的元素组成的数组
});
/*
some():对数组中的每个元素运行给定函数，如果任一元素返回true，则返回true，否则返回false;不会改变原数组
    对一空数组进行测试，在任何情况下都返回false
 */
arr.some((value, index, array) => {
    return value % 2 == 0;//true，由于arr数组中存在满足条件
});
/*
reduce():用来迭代一个数组，并且把它累积到一个值中
 */
// arr = [2,3,4,1]
arr.reduce((pre, curr, index, array) => {
    return pre + curr;//10
});
