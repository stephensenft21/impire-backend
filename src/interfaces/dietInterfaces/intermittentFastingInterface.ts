// backend/interfaces/dietInterfaces/intermittentFastingInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface IntermittentFastingMealPlan extends MealPlan {
  fastingWindowStart: string; // Time the fasting window starts
  fastingWindowEnd: string;   // Time the fasting window ends
  mealsPerDay: number;        // Number of meals consumed during the eating window
}
