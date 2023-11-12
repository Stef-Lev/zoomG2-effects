import validationValues from "./validationValues";
import InputNumber from "@/components/inputs/InputNumber";
import DropdownMenu from "@/components/inputs/DropdownMenu";
import { AllSettings } from "@/types/types";

export const getEffectsInputs = (
  title: string,
  settings: AllSettings["settings"]
) => {
  const iterableSettings = Object.entries(settings);
  // console.log(title, settings);
  if (Object.hasOwn(settings, "code")) {
    console.log(validationValues[title][settings.code]);
  } else {
    console.log(validationValues[title]);
  }
};
