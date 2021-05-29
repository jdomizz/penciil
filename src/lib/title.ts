import { derived } from 'svelte/store';
import { page } from '$app/stores';
import { message } from "$lib/i18n";
import { sketch } from "$lib/sketch";

export const title = derived([page, sketch, message], ([$page, $sketch, $message]) => {
  const i18nKey = getTitleKey($page.path, $sketch.animationRunning);
  return $message(i18nKey);
});

const getTitleKey = (path: string, animation: boolean): string =>  {
  switch (path) {
    case '/sketch': return animation ? 'animation.title' : 'sketch.title';
    case '/about': return 'about.title';
    default: return 'app.name';
  }
}