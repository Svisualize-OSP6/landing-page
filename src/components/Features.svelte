<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import FeaturesCard from './FeaturesCard.svelte'
	import props from '../assets/props.GIF'
	import fileOpener from '../assets/fileOpener.GIF'
	import changeRoot from '../assets/changeRoot.GIF'
	import update from '../assets/update.GIF'

	let productFeatures = [
		{
			description: 'Easily locate components by clicking respective nodes and instantly traverse through files',
			gif: fileOpener
		},
		{
			
			description: 'Monitor multi-level prop elements by hovering over each node',
			gif: props
		},
		{
			description: `Switch root node to visualize smaller sections of a project's component structure`,
			gif: changeRoot
		},
		{
			description: 'Effortlessly integrate additional components into the tree by clicking the update button to ensure seamless re-rendering of your changes',
			gif: update
		}
	]
</script>

<SectionWrapper id="features">
	<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center">
		<div class="flex flex-col gap-2">
			<h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">Check Out Our Features</h3>
			<p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
				Start <span class="text-logoOrange">visualizing</span> your Svelte code today
			</p>
		</div>
		{#each productFeatures as productFeature, index}
			<FeaturesCard productFeature={productFeature} index={index}>
				{#if index === 0}
				<span class="text-logoOrange font-semibold">Open files</span> from your tree
				{:else if index === 1}	
				<p class="">See your <span class="text-logoOrange font-semibold">props</span></p>
				{:else if index === 2}	
				Change your tree <span class="text-logoOrange font-semibold">root</span>
				{:else}
				On-Click <span class="text-logoOrange font-semibold">updates</span>
				{/if}
			</FeaturesCard>
		{/each}

	</div>
</SectionWrapper>
