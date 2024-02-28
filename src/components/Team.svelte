<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import linkedinIcon from '../assets/Linkedin.svg';
	import githubIcon from '../assets/github.svg';
	import envelope from '../assets/envelope.svg';
	import '../app.css';
</script>

<SectionWrapper id="team">
	<!-- <div class="bg-backgroundBlue py-20"> -->
	<h1 class="text-6xl font-semibold text-center logo py-6">
		Meet the team behind <span class="text-logoOrange logo">S</span><span class="logo"
			>visualize</span
		>
	</h1>
	<div class="container mx-auto px-100">
		<div
			class="grid lg:grid-flow-col lg:grid-rows-1 lg:grid-cols-4 sm:grid-rows-2 sm:grid-cols-2 gap-10 mx-20 my-10"
		>
			<div class="bg-backgroundBlue/50 xs:flex-row flex flex-col items-center py-7 rounded-xl shadow-lg">
				<img
					class=" rounded-full mb-5 w-3/4 h-auto"
					src="https://github.com/lumengli7.png"
					alt=""
					loading="lazy"
				/>
				<p class="font-semibold mb-2 text-logoOrange text-xl">Lumeng Li</p>
				<div class=" flex gap-4 mt-2 ">
					<a href="https://github.com/lumengli7"><img src={githubIcon} alt="github icon"  /></a>
					<a href="mailto:lumeng.li@gmail.com"><img src={envelope} alt="envelope icon" /></a>
					<a href="https://www.linkedin.com/in/lumengli/"
						><img class="linkedinSvg" src={linkedinIcon} alt="linkedin icon" /></a
					>
				</div>
			</div>
			<div class="bg-backgroundBlue/50 flex flex-col items-center py-7 rounded-xl shadow-lg">
				<img
					class=" rounded-full mb-5 w-3/4 h-auto"
					src="https://github.com/itsdayson.png"
					alt=""
					loading="lazy"
				/>
				<p class="font-semibold mb-2 text-logoOrange text-xl">Jason Huang</p>
				<div class="flex gap-4 mt-2">
					<a href="https://github.com/itsdayson"><img src={githubIcon} alt="github icon" /></a>
					<a href="mailto:itsdayson@gmail.com"><img src={envelope} alt="envelope icon" /></a>
					<a href="https://www.linkedin.com/in/jasonhswe/"
						><img class="linkedinSvg" src={linkedinIcon} alt="linkedin icon" /></a
					>
				</div>
			</div>
			<div class="bg-backgroundBlue/50 flex flex-col items-center py-7 rounded-xl shadow-lg">
				<img
					class=" rounded-full mb-5 w-3/4 h-auto"
					src="https://github.com/krisfragata.png"
					alt=""
					loading="lazy"
				/>
				<p class="font-semibold mb-2 text-logoOrange text-xl">Kris Fragata</p>
				<div class="flex gap-4 mt-2">
					<a href="https://github.com/krisfragata"><img src={githubIcon} alt="github icon" /></a>
					<a href="mailto:kristinnefragata@outook.com"><img src={envelope} alt="envelope icon" /></a
					>
					<a href="https://www.linkedin.com/in/kris-fragata-bb937820a/"
						><img class="linkedinSvg" src={linkedinIcon} alt="linkedin icon" /></a
					>
				</div>
			</div>
			<div class="bg-backgroundBlue/50 flex flex-col items-center py-7 rounded-xl shadow-lg">
				<img
					class=" xs:hidden rounded-full mb-5 w-3/4 h-auto"
					src="https://github.com/calebbelkin.png"
					alt=""
					loading="lazy"
				/>
				<p class="font-semibold mb-2 text-logoOrange text-xl">Caleb Belkin</p>
				<div class="flex gap-4 mt-2">
					<a href="https://github.com/calebbelkin"><img src={githubIcon} alt="github icon" /></a>
					<a href="mailto:calebbelkin@gmail.com"><img src={envelope} alt="envelope icon" /></a>
					<a href="https://www.linkedin.com/in/caleb-belkin/"
						><img class="linkedinSvg" src={linkedinIcon} alt="linkedin icon" /></a
					>
				</div>
			</div>
		</div>
	</div>
	<!-- </div> -->
</SectionWrapper>
