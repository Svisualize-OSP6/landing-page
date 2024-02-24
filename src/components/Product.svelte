<script>
	import SectionWrapper from './SectionWrapper.svelte';
	//add gifs from asset folder
	import gif from '../assets/svisualize.gif';
</script>

<SectionWrapper id="product">
	<div
		class="flex flex-col gap-5 sm:gap-9 md:gap-14 flex-1 items-center justify-center pb-10 md:pb-14 w-full"
	>
		<div class="flex flex-col items-center w-full">
			<img
				src={gif}
				alt="showing functionality of svisualize"
				class="max-w-[950px] w-full h-auto shadow-lg p-6"
			/>
		</div>
	</div>
</SectionWrapper>
