import en from "./en.json";
import es from "./es.json";

export const languages = { es, en } as const;
export type Language = keyof typeof languages;
export type Messages = typeof es;

export function getMessages(language: Language = "es"): Messages {
  return languages[language];
}