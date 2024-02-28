<script>
	import SectionWrapper from "../../components/SectionWrapper.svelte";

	function makeHidden(){

	}
</script>

<!-- //wrap section with section wrapper -->
<SectionWrapper id="tomorrow">
	<div class="flex flex-col gap-10 flex-1 items-center justify-center md:pb-10">
		<h1
			class="text-7xl sm:text-8xl md:text-9xl lg:text-10xl max-w-[1200px] mx-auto w-full text-center font-semibold logo"
		>
			Available for <span class="text-logoOrange">Download</span> Tomorrow
		</h1>
		<h3
			class="text-3xl sm:text-4xl md:text-5xl lg:text5-xl max-w-[1200px] mx-auto w-full text-center font-semibold"
		>
			 <span class="text-logoOrange">February 29, 2024 9a.m.</span>
	
			<span class="text-logoOrange">EST</span>
		</h3>
		<p
			class="text-xl sm:text-2xl md:text-3xl text-center max-w-[800px] mx-auto w-full text-paragraph"
		>
			A Visual Studio Code Extension that visualizes your components as you code
		</p>
	</div>
</SectionWrapper>
