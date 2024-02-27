<script>
	import svisualize from '../assets/visualize.png';
</script>

<header class="max-w-[1400px] flex flex-1 flex-col z-20">
	<div
		class="fixed top-0 bg-background/55 backdrop-blur-sm mx-auto w-full flex items-center justify-between p-4 py-4"
	>
		<a href="/">
			<h1 class="font-semibold"><span class="logo text-2xl"><span class="text-logoOrange">S</span>visualize</span></h1>
		</a>
		<!-- //create a button that only displays on smaller size screen for nav -->
		<button class="nav md:hidden grid place-items-center"> </button>
		<nav class="hidden md:flex items-center gap-4 lg:gap-6">
			<a
				href="#product"
				class="duration-200 hover:text-highlight hover:font-semibold cursor-pointer">Product</a
			>
			<a
				href="#feature"
				class="duration-200 hover:text-highlight hover:font-semibold cursor-pointer">Features</a
			>

			<!-- <a href="#FAQ" class="duration-200 hover:text-highlight cursor-pointer">FAQs</a> -->

			<a href="#team" class="duration-200 hover:text-highlight hover:font-semibold cursor-pointer"
				>Team</a
			>
			<a
				href="https://google.com"
				class="duration-200 hover:text-highlight cursor-pointer hover:font-semibold"
				target="_blank">Blog</a
			>
			<a
				href="https://github.com/oslabs-beta/Svisualize"
				class="duration-200 hover:text-highlight cursor-pointer hover:font-semibold"
				target="_blank">Github</a
			>
			<button class="specialBtn">
				<a href="https://marketplace.visualstudio.com/items?itemName=Svisualize-dev.svisualize" target="_blank" class="text-logoOrange hover:text-highlight hover:font-semibold">Download</a>
			</button>
		</nav>
	</div>
</header>
