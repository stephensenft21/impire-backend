// backend/interfaces/dietInterfaces/fodmapDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface FodmapDietMealPlan extends MealPlan {
  avoidsHighFODMAPFoods: boolean;  // Whether high-FODMAP foods are avoided
  includesLowFODMAPFoods: boolean; // Whether low-FODMAP foods are emphasized
}
