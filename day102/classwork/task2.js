const object1 = { id: 1, name: "Lasha" };
const object2 = { id: 2, name: "Nino" };
const object3 = { id: 3, name: "Anna" };

const objectMap = new Map();
objectMap.set(object1.id, object1);
objectMap.set(object2.id, object2);
objectMap.set(object3.id, object3);

console.log("Object Map by IDs:", objectMap);