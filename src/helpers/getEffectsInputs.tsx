import validationValues from "./validationValues";
import InputNumber from "@/components/inputs/InputNumber";
import DropdownMenu from "@/components/inputs/DropdownMenu";
import { AllSettings } from "@/types/types";

export const getEffectsInputs = (
  title: string,
  settings: AllSettings["settings"]
) => {
  const iterableSettings = Object.entries(settings);
  // console.log({ settings, iterableSettings });
  // console.log(title, settings);
  if (Object.hasOwn(settings, "code")) {
    const validations =
      validationValues[title as keyof typeof validationValues][settings.code];
    console.log(validations);
    Object.entries(validations).map(([title, settings]) => {
      if (Array.isArray(settings)) {
        return <DropdownMenu key={title} id={title} options={settings} />;
      } else {
        return null;
      }
    });
  } else {
    const validations =
      validationValues[title as keyof typeof validationValues];
    console.log(validations);
    return null;
  }
};
