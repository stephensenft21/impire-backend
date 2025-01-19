// backend/interfaces/dietInterfaces/mediterraneanDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface MediterraneanDietMealPlan extends MealPlan {
  includesOliveOil: boolean;    // Whether olive oil is a key ingredient
  includesFish: boolean;        // Whether fish is included in the diet
  includesWholeGrains: boolean; // Whether whole grains are emphasized
}
