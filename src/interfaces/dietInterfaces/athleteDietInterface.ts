// backend/interfaces/dietInterfaces/athleteDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface AthleteDietMealPlan extends MealPlan {
  highProtein: boolean;  // Whether the diet is high in protein for muscle repair
  highCalorie: boolean;  // Whether the diet is designed to be calorie-dense for energy
  includesSupplements: boolean; // Whether supplements (e.g., protein powder) are included
}
