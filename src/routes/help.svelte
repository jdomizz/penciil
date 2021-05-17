<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import InstallButton from "$lib/components/InstallButton/index.svelte";
</script>

<svelte:head>
	<title>Penciil - Help</title>
</svelte:head>

<article>
  <h3>About</h3>
  <p>
    Penciil is a straightforward sketchpad that generates binary ASCII art animations from your drawings.
    You can use it online or install it:
  </p>
  <div>
    <InstallButton />
  </div>
  <h3>Usage</h3>
  <p>
    To draw or erase on the canvas use the mouse (on a computer) or your finger (on a mobile device). When you are done press the play button to generate the animation.
  </p>
  
  <h3>Credits</h3>
  <p>
    Crafted with ♥ in <a href="https://domi.land/">domi.land</a> 
    using <a href="https://www.typescriptlang.org/">TypeScript</a>
    with the <a href="https://kit.svelte.dev/">SvelteKit</a>
    and some <a href="https://feathericons.com/">Feather</a> icons. 
  </p>
  <p>
    This <a href="https://github.com/jdomizz/penciil">software</a> is distributed under the MIT License.
  </p>
</article>

<style>
  article {
    padding-top: 56px;
    height: 100%;
    position: relative;
  }
  div {
    margin: 32px 0;
    display: flex;
    justify-content: center;
  }
  h3, p {
    margin-left: auto;
    margin-right: auto;
    width: 32em;
    text-align: center;
  }
  a {
    text-decoration: underline;
  }
</style>
