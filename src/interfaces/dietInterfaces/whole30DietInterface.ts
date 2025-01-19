// backend/interfaces/dietInterfaces/whole30DietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface Whole30DietMealPlan extends MealPlan {
  excludesProcessedFoods: boolean;  // Whether processed foods are excluded
  excludesSugar: boolean;           // Whether sugar is completely excluded
  includesWholeFoods: boolean;      // Whether the diet focuses on whole, unprocessed foods
}
