import { derived } from 'svelte/store';
import { page } from '$app/stores';
import { message } from "$lib/i18n";
import { playMode } from "$lib/components/PlayButton/playMode";

export const title = derived([page, playMode, message], ([$page, $playMode, $message]) => {
  const i18nKey = getTitleKey($page.path, $playMode);
  return $message(i18nKey);
});

const getTitleKey = (path: string, playMode: boolean): string =>  {
  switch (path) {
    case '/sketch': return playMode ? 'animation.title' : 'sketch.title';
    case '/about': return 'about.title';
    default: return 'app.name';
  }
}