<script>
	import { openModal } from '../store'
</script>

<header class="max-w-[1400px] flex flex-1 flex-col z-20">
	<div
		class="fixed top-0 bg-background/55 backdrop-blur-sm mx-auto w-full flex items-center justify-between p-4 py-4"
	>
		<a href="/">
			<h1 class="font-semibold"><span class="logo text-2xl"><span class="text-logoOrange">S</span>visualize</span></h1>
		</a>
		<!-- //create a button that only displays on smaller size screen for nav -->
		<button on:click={() => ($openModal = true)} class="nav md:hidden grid place-items-center"> </button>
		<nav class="hidden md:flex items-center gap-4 lg:gap-6">
			<a
				href="#features"
				class="duration-200 hover:text-highlight hover:font-semibold cursor-pointer text-lg">Features</a
			>
			<a
				href="#tech"
				class="duration-200 hover:text-highlight hover:font-semibold cursor-pointer text-lg">Tech</a
			>

			<!-- <a href="#FAQ" class="duration-200 hover:text-highlight cursor-pointer">FAQs</a> -->

			<a href="#team" class="duration-200 hover:text-highlight hover:font-semibold cursor-pointer text-lg"
				>Team</a
			>
			<a
				href="https://medium.com/@lumeng.li/svisualize-c342e1c23721"
				class="duration-200 hover:text-highlight cursor-pointer hover:font-semibold"
				target="_blank text-lg">Blog</a
			>
			<a
				href="https://github.com/oslabs-beta/Svisualize"
				class="duration-200 hover:text-highlight cursor-pointer hover:font-semibold"
				target="_blank text-lg">Github</a
			>
			<button class="specialBtn">
				<a href="https://marketplace.visualstudio.com/items?itemName=Svisualize-dev.svisualize" target="_blank" class="text-logoOrange hover:text-highlight hover:font-semibold">Download</a>
			</button>
		</nav>
	</div>
</header>
