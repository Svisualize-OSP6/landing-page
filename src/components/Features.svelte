<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import VSCODE_logo from '../assets/VSCODE_logo.svg';
	import D3_logo from '../assets/D3_logo.svg';
	import Svelte_logo from '../assets/Svelte_logo.svg';
</script>

<SectionWrapper id="feature">
	<div class="flex flex-1 flex-col items-center justify-center">
		<div class="max-w-[1500px] grid grid-cols-3 gap-20">
			<div class="flex flex-col items-center">
				<img class="logo w-40 h-40 mb-10" src={VSCODE_logo} alt="" loading="lazy" />
				<h3 class="text-3xl mb-10">VSCode</h3>
				<p>
					A highly versatile and speedy code editor with an extensive plugin ecosystem, favored by
					developers for its efficiency and ease of use.
				</p>
			</div>
			<div class="flex flex-col items-center">
				<img class="logo w-40 h-40 mb-10" src={Svelte_logo} alt="" loading="lazy" />
				<h3 class="text-3xl mb-10">Svelte</h3>
				<p>
					Cutting-edge JavaScript framework known for its minimalistic approach and exceptional
					performance, enabling developers to build powerful web applications with ease.
				</p>
			</div>
			<div class="flex flex-col items-center">
				<img class="logo w-40 h-40 mb-10" src={D3_logo} alt="" loading="lazy" />
				<h3 class="text-3xl mb-10">D3</h3>
				<p>
					Dynamic data visualization library for JavaScript, known for its flexibility and ability
					to create stunning interactive graphics and charts.
				</p>
			</div>
		</div>
	</div>
</SectionWrapper>
