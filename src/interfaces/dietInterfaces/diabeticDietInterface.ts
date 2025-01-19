// backend/interfaces/dietInterfaces/diabeticDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface DiabeticDietMealPlan extends MealPlan {
  controlsCarbs: boolean; // Whether the diet includes carb control
  focusesOnLowGlycemicIndex: boolean; // Whether low glycemic index foods are emphasized
}
