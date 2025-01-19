// backend/interfaces/dietInterfaces/rawFoodDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface RawFoodDietMealPlan extends MealPlan {
  includesRawVeggies: boolean;   // Whether raw vegetables are included
  includesRawFruits: boolean;    // Whether raw fruits are included
  avoidsCooking: boolean;        // Whether any form of cooking is avoided
}
