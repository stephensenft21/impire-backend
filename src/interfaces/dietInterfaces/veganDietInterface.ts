// backend/interfaces/dietInterfaces/veganDietInterface.ts
import { MealPlan } from '../mealPlanInterface';

export interface VeganDietMealPlan extends MealPlan {
  isPlantBased: boolean; // Whether the plan is strictly plant-based
  avoidAnimalProducts: boolean; // Whether the plan avoids animal products like dairy and eggs
}
