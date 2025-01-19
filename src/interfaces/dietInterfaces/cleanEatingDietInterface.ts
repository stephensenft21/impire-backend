// backend/interfaces/dietInterfaces/cleanEatingDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface CleanEatingDietMealPlan extends MealPlan {
  avoidsRefinedGrains: boolean; // Whether refined grains are avoided
  avoidsAddedSugars: boolean;   // Whether added sugars are avoided
  includesWholeFoods: boolean;  // Whether the diet emphasizes whole, natural foods
}
