import createID from "./idCreator";

export default function foodReducer(foods, action) {
  switch (action.type) {
    case "added": {
      return [
        {
          id: createID(action.food.type),
          name: action.food.name,
          type: action.food.type,
          quantity: action.food.quantity,
        },
        ...foods,
      ];
    }
    case "changed": {
      return foods.map((food) => {
        if (food.id === action.food.id) return action.food;
        return food;
      });
    }
    case "deleted": {
      return foods.filter((food) => food.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
