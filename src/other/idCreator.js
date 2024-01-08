export default function createID(food = "food") {
  const prefix = food.toLocaleLowerCase() === "food" ? "fd-" : "drk-";
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "");
  const milisecondTimestamp = Date.now();
  const ID = `${prefix}${timestamp}-${milisecondTimestamp}`;
  return ID;
}
