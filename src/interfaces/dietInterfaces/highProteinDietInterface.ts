// backend/interfaces/dietInterfaces/highProteinDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface HighProteinDietMealPlan extends MealPlan {
  targetProteinIntake: number; // Target protein intake (grams per day)
  isLowFat: boolean;           // Whether the plan is low in fat
  includesSupplements: boolean; // Whether supplements are included in the meal plan
}
