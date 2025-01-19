// backend/interfaces/dietInterfaces/lowCarbDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface LowCarbDietMealPlan extends MealPlan {
  maxCarbIntake: number;   // Maximum allowed carbs (grams per day)
  includesHighFat: boolean; // Whether high-fat foods are allowed
  proteinFocus: boolean;    // Whether the focus is on higher protein
}
