<script>
  import "../app.css";
	import Header from "../components/Header.svelte";
	import SectionWrapper from "../components/SectionWrapper.svelte";
</script>

<!-- <SectionWrapper>
  <Header/>
  <slot></slot>
</SectionWrapper> -->

<main class="flex flex-col">
  <Header/>
  <slot></slot>
</main>

<!-- <slot/> -->

<!-- header
footer
hero
product info -->
