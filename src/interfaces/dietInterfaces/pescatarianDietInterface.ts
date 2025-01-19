// backend/interfaces/dietInterfaces/pescatarianDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface PescatarianDietMealPlan extends MealPlan {
  includesFish: boolean;   // Whether fish and seafood are included
  avoidsMeat: boolean;     // Whether other meats (beef, chicken, pork, etc.) are avoided
}
