<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import VSCODE_logo from '../assets/VSCODE_logo.svg';
	import D3_logo from '../assets/D3_logo.svg';
	import Svelte_logo from '../assets/Svelte_logo.svg';
</script>

<SectionWrapper id="tech">
	<div class="flex flex-1 flex-col items-center justify-center mx-10">
		<h1 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center mb-10">Tech Stack</h1>
		<div
			class="grid lg:grid-flow-col lg:grid-rows-1 lg:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 gap-10 mx-20 my-10"
		>
			<div class="flex flex-col items-center">
				<div class="logo-container mb-10">
					<img class="logo mb-10" src={VSCODE_logo} alt="" loading="lazy" />
				</div>
					<h3 class="text-3xl mb-10">VS Code</h3>
					<p class="featuresText">
					A highly versatile and speedy code editor with an extensive plugin ecosystem, favored by
					developers for its efficiency and ease of use.
					</p>
			</div>
			<div class="flex flex-col items-center ">
				<div class="logo-container mb-10">
					<img class="logo mb-10" src={Svelte_logo} alt="" loading="lazy" />
				</div>
					<h3 class="text-3xl mb-10">Svelte</h3>
					<p class="featuresText">
					Cutting-edge JavaScript framework known for its minimalistic approach and exceptional
					performance, enabling developers to build powerful web applications with ease.
				</p>
			</div>
			<div class="flex flex-col items-center">
				<div class="logo-container mb-10">
					<img class="logo mb-10" src={D3_logo} alt="" loading="lazy" />
				</div>
				<h3 class="text-3xl mb-10">D3</h3>
				<p class="featuresText">
					Dynamic data visualization library for JavaScript, known for its flexibility and ability
					to create stunning interactive graphics and charts.
				</p>
			</div>
		</div>
	</div>
</SectionWrapper>
