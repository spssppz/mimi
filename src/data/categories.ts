import { ClimateIcon } from "@/icons/categories/ClimateIcon";
import { LightingIcon } from "@/icons/categories/LightingIcon";
import { MultimediaIcon } from "@/icons/categories/MultimediaIcon";
import { SafetyIcon } from "@/icons/categories/SafetyIcon";
import type { Category } from "@/types/case";

export const categories: Category[] = [
	{ icon: LightingIcon, label: "Освещение" },
	{ icon: ClimateIcon, label: "Климат" },
	{ icon: MultimediaIcon, label: "Мультимедиа" },
	{ icon: SafetyIcon, label: "Безопасность" },
]