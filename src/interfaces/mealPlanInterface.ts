// backend/interfaces/mealPlanInterface.ts
export interface MealPlan {
    id: number;
    userId: number;
    planName: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }
  