<script>
	import SectionWrapper from './SectionWrapper.svelte';

	function makeHidden(){

	}
</script>

<!-- //wrap section with section wrapper -->
<SectionWrapper id="intro">
	<div class="flex flex-col gap-10 flex-1 items-center justify-center md:pb-10">
		<h1
			class="text-7xl sm:text-8xl md:text-9xl lg:text-10xl max-w-[1200px] mx-auto w-full text-center font-semibold logo"
		>
			<span class="text-logoOrange">S</span>visualize
		</h1>
		<h3
			class="text-3xl sm:text-4xl md:text-5xl lg:text5-xl max-w-[1200px] mx-auto w-full text-center font-semibold"
		>
			<span class="text-logoOrange">Svelte</span> components
			<span class="line-through decoration-logoOrange">are hard</span>
			<span class="text-logoOrange">made easy</span>
		</h3>
		<p
			class="text-xl sm:text-2xl md:text-3xl text-center max-w-[800px] mx-auto w-full text-paragraph"
		>
			A Visual Studio Code Extension that visualizes your components as you code
		</p>
	</div>
	<div class="arrow-container animate-pulse">
		<!-- <a href="#features"> -->
			<div class="arrow pb-20"></div>
		<!-- </a> -->
	</div>
</SectionWrapper>
