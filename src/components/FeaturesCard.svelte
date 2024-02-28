<script>
    export let index;
    export let productFeature;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-14 lg:gap-20 relative text-base pb-20">
    <div class={"col-span-1 md:col-span-1 flex flex-col justify-center gap-8 md:gap-10" + (index % 2 === 1 ? ' md:order-2' : ' ')}>
        <h4 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-10 after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900">
        <slot/>
        </h4>
        <p class="text-2xl">{productFeature.description}</p>
    </div>
    <div class={"col-span-2 md:col-span-2 flex flex-col dropShadow overflow-hidden rounded-lg" + (index % 2 === 1 ? ' order-1' : ' ')}>
        <div class="flex flex-col bg-white gap-4 flex-1">
            <img src={productFeature.gif} alt='feature-img'/>
        </div>
    </div>
</div>
