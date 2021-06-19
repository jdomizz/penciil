import { writable, derived } from 'svelte/store';
import messagesFile from '../locale/messages';

export const locale = writable('en');

export const messages = writable<Record<string, Record<string, unknown>>>(messagesFile);

const translations = derived([messages, locale], ([$messages, $locale]) => {
  return $messages[$locale];
});

export const message = derived(translations, ($translations) => {
  return (key: string) => getMessage(key, $translations);
});

function getMessage(key: string, translations: Record<string, unknown>) {
  return key
    .split('.')
    .reduce((accumulator, item) => accumulator[item], { ...translations }) as string;
};
