let food = new Map();

food.set('tomato', 'healthy');
food.set('rice', 'healthy');
food.set('burger', 'junk');
food.set('fries', 'junk');

console.log(Array.from(food, ([key,value]) => `Key - ${key}, value - ${value}`))