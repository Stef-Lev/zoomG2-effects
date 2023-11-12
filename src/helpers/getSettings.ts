import { SettingsObject } from "@/types/types";

export const getSettings = (settings: SettingsObject) => {
  return Object.entries(settings).filter(([text, _]) => {
    return text !== "code";
  });
};
