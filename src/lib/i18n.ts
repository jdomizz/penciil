// Based on https://github.com/higsch/quick-svelte-i18n

import { writable, derived } from 'svelte/store';
import messages from "../locale/messages";

const localizedDict = derived([writable(messages), writable('es')], ([$dict, $locale]) => {
  if (!$dict || !$locale) return;
  return($dict[$locale]);
});

export const i18n = derived(localizedDict, ($localizedDict) => {
  return(createMessageFormatter($localizedDict));
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
