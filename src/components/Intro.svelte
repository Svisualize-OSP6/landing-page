<script>
	import Header from './Header.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
</script>

<!-- //wrap section with section wrapper -->
<SectionWrapper id="intro">
	<Header />
	<div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-10">
		<h1
			class="text-7xl sm:text-8xl md:text-9xl lg:text-10xl max-w-[1200px] mx-auto w-full text-center font-semibold logo"
		>
			Svisualize
		</h1>
		<h3
			class="text-3xl sm:text-4xl md:text-5xl lg:text5-xl max-w-[1200px] mx-auto w-full text-center font-semibold"
		>
			<span class="text-important">Svelte</span> components
			<span class="line-through decoration-important">are hard</span>
			<span class="text-important">made easy</span>
		</h3>
		<p
			class="text-xl sm:text-2xl md:text-3xl text-center max-w-[800px] mx-auto w-full text-paragraph"
		>
			A Visual Studio Code Extension that visualizes your components as you code
		</p>
	</div>
	<div class="arrow-container animate-bounce">
		<button class="arrow"></button>
	</div>
</SectionWrapper>
