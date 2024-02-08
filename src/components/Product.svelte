<script>
	import SectionWrapper from './SectionWrapper.svelte';
  //add product features in an array
  let productFeatures = [];
</script>

<SectionWrapper id="product">
	<div class="flex flex-col gap-6 sm:gap-10 md:gap-15 flex-1 items-center justify-center pb-10 md:pb-14">
    <div class="flex flex-col gap-2">
      <img src="./svisualize00.gif" alt="showing functionality of svisualize" class="w-64 h-auto">
      <!-- <video class="w-full" controls>
        <source src="../assets/svisualize.mov" type="video/mov">
         Provide fallback content for browsers that don't support HTML5 video
        Your browser does not support the video tag.
      </video> -->
    </div>
  </div>
</SectionWrapper>
