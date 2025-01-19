// backend/interfaces/dietInterfaces/glutenFreeDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface GlutenFreeDietMealPlan extends MealPlan {
  avoidsWheat: boolean;      // Whether wheat is strictly avoided
  includesGlutenFreeGrains: boolean;  // Whether gluten-free grains are used (e.g., quinoa, rice)
  isDairyFree: boolean;      // Whether the diet is also dairy-free
}
