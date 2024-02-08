<script>
	import Header from './Header.svelte';
	import Product from './Product.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
</script>

<!-- //wrap section with section wrapper -->
<SectionWrapper id="intro">
	<Header />
	<div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
    <h1 class="text-9xl sm:text-9xl md:text-10xl lg:text-11xl max-w-[1200px] mx-auto w-full text-center font-semibold logo">Svisualize</h1>
		<h3
			class="text-3xl sm:text-4xl md:text-5xl lg:text6-xl max-w-[1200px] mx-auto w-full text-center font-semibold"
		>
			<span class="text-important">Svelte</span> components <span class="line-through decoration-logoOrange">is hard</span> <span class="text-important">made easy</span>
		</h3>
    <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[800px] mx-auto w-full text-paragraph">a Visual Studio Code Extension that visualizes your components as you code</p>
	</div>
  <Product />
</SectionWrapper>
