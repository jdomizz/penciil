// Based on https://github.com/higsch/quick-svelte-i18n

import { writable, derived } from 'svelte/store';
import messages from "../locale/messages";

export const locale = writable('es');
export const file = writable<Record<string,Record<string,unknown>>>(messages);

const translations = derived([file, locale], ([$messages, $locale]) => {
  return $messages[$locale];
});

export const i18n = derived(translations, ($translations) => {
  return (key: string) => getMessage(key, $translations);
});

const getMessage = (key: string, localized: Record<string,unknown>) => {
  return key
    .split('.')
    .reduce((accumulator, item) => accumulator[item], {...localized}) as string;
};