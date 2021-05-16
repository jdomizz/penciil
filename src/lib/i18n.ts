
import { writable, derived } from 'svelte/store';
import messages from "../locale/messages";

export const dict = writable(messages);
export const locale = writable('es');

const localizedDict = derived([dict, locale], ([$dict, $locale]) => {
  if (!$dict || !$locale) return;
  return($dict[$locale]);
});

const getMessageFromLocalizedDict = (id: string, localizedDict) => {
  const splitId = id.split('.');
  let message = {...localizedDict};
  splitId.forEach((partialId) => {
    message = message[partialId];
  });
  return(message);
};

const createMessageFormatter = (localizedDict) => (id) => getMessageFromLocalizedDict(id, localizedDict);

export const translate = derived(localizedDict, ($localizedDict) => {
  return(createMessageFormatter($localizedDict));
});