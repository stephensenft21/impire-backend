// backend/interfaces/dietInterfaces/ketoDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface KetoDietMealPlan extends MealPlan {
  targetCarbs: number;   // Target number of carbs in grams
  targetFat: number;     // Target number of fat grams
  targetProtein: number; // Target number of protein grams
  isLowCarbFriendly: boolean;  // Whether the plan is low-carb friendly
}
