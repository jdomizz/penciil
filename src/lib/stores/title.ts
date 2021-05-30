import { derived } from 'svelte/store';
import { page } from '$app/stores';
import { message } from "$lib/stores/i18n";

export const title = derived([page, message], ([$page, $message]) => {
  const i18nKey = getTitleKey($page.path);
  return $message(i18nKey);
});

const getTitleKey = (path: string): string =>  {
  switch (path) {
    case '/sketch': return 'sketch.title';
    case '/about': return 'about.title';
    default: return 'app.name';
  }
}