-- CreateTable
CREATE TABLE "KetoDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "targetCarbs" DOUBLE PRECISION NOT NULL,
    "targetFat" DOUBLE PRECISION NOT NULL,
    "targetProtein" DOUBLE PRECISION NOT NULL,
    "isLowCarbFriendly" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KetoDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VeganDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "isPlantBased" BOOLEAN NOT NULL,
    "avoidAnimalProducts" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VeganDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediterraneanDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "includesOliveOil" BOOLEAN NOT NULL,
    "includesFish" BOOLEAN NOT NULL,
    "includesWholeGrains" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MediterraneanDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LowCarbDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "maxCarbIntake" DOUBLE PRECISION NOT NULL,
    "includesHighFat" BOOLEAN NOT NULL,
    "proteinFocus" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LowCarbDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HighProteinDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "targetProteinIntake" DOUBLE PRECISION NOT NULL,
    "isLowFat" BOOLEAN NOT NULL,
    "includesSupplements" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HighProteinDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GlutenFreeDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "avoidsWheat" BOOLEAN NOT NULL,
    "includesGlutenFreeGrains" BOOLEAN NOT NULL,
    "isDairyFree" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlutenFreeDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntermittentFastingMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "fastingWindowStart" TEXT NOT NULL,
    "fastingWindowEnd" TEXT NOT NULL,
    "mealsPerDay" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntermittentFastingMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Whole30DietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "excludesProcessedFoods" BOOLEAN NOT NULL,
    "excludesSugar" BOOLEAN NOT NULL,
    "includesWholeFoods" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Whole30DietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawFoodDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "includesRawVeggies" BOOLEAN NOT NULL,
    "includesRawFruits" BOOLEAN NOT NULL,
    "avoidsCooking" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RawFoodDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CleanEatingDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "avoidsRefinedGrains" BOOLEAN NOT NULL,
    "avoidsAddedSugars" BOOLEAN NOT NULL,
    "includesWholeFoods" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CleanEatingDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PescatarianDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "includesFish" BOOLEAN NOT NULL,
    "avoidsMeat" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PescatarianDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FodmapDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "avoidsHighFODMAPFoods" BOOLEAN NOT NULL,
    "includesLowFODMAPFoods" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FodmapDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiabeticDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "controlsCarbs" BOOLEAN NOT NULL,
    "focusesOnLowGlycemicIndex" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiabeticDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AthleteDietMealPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "highProtein" BOOLEAN NOT NULL,
    "highCalorie" BOOLEAN NOT NULL,
    "includesSupplements" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AthleteDietMealPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KetoDietMealPlan" ADD CONSTRAINT "KetoDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VeganDietMealPlan" ADD CONSTRAINT "VeganDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediterraneanDietMealPlan" ADD CONSTRAINT "MediterraneanDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LowCarbDietMealPlan" ADD CONSTRAINT "LowCarbDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HighProteinDietMealPlan" ADD CONSTRAINT "HighProteinDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GlutenFreeDietMealPlan" ADD CONSTRAINT "GlutenFreeDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntermittentFastingMealPlan" ADD CONSTRAINT "IntermittentFastingMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Whole30DietMealPlan" ADD CONSTRAINT "Whole30DietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawFoodDietMealPlan" ADD CONSTRAINT "RawFoodDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CleanEatingDietMealPlan" ADD CONSTRAINT "CleanEatingDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PescatarianDietMealPlan" ADD CONSTRAINT "PescatarianDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FodmapDietMealPlan" ADD CONSTRAINT "FodmapDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiabeticDietMealPlan" ADD CONSTRAINT "DiabeticDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AthleteDietMealPlan" ADD CONSTRAINT "AthleteDietMealPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
