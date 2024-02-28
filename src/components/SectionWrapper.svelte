<script>
	export let id;
</script>

<!-- //styling component for sections //code allows to wrap sections in page seamlessly -->
<section {id} class={'min-h-[750px] flex flex-col items-center justify-center px-4'}>
	<!-- //flex-1 allow div to maximize as much space as we can -->
	<div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">
		<!-- //rendering slot renders child component inside wrappers -->
		<slot />
	</div>
</section>
