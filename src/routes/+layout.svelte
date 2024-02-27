<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte"
  import { openModal } from '../store'

  let y
  $: outerHeight = 0;

  function reroute(href) {
    $openModal = false;
    window.location.href = href;
  }
</script>



  {#if $openModal}
    <div class=" fixed top-0 left-0 w-screen h-screen border-b bg-background z-50 flex flex-col gap-8 p-5 px-8">
      <div class="flex items-center justify-between gap-4 border-b pb-2 md:hidden">
        <h1 class="font-semibold"><span class="logo text-2xl"><span class="text-logoOrange">S</span>visualize</span></h1>
        <button on:click={() => $openModal = false} class="outline-none border-none"><i class="fa-solid fa-xmark text-2xl"></i></button>
      </div>
      <div class="flex flex-col gap-4">
        <button on:click={() => reroute('#product')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 text-xl font-semibold">Product<i class="fa-solid fa-chevron-right text-lg pl-4"></i></p>
        </button>
        <button on:click={() => reroute('#feature')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 text-xl font-semibold">Features<i class="fa-solid fa-chevron-right text-lg pl-4"></i></p>
        </button>
        <button on:click={() => reroute('#team')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 text-xl font-semibold">Team<i class="fa-solid fa-chevron-right text-lg pl-4"></i></p>
        </button>
        <button on:click={() => reroute('https://medium.com')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 text-xl font-semibold">Blog<i class="fa-solid fa-chevron-right text-lg pl-4"></i></p>
        </button>
        <button on:click={() => reroute('https://github.com/oslabs-beta/Svisualize')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 text-xl font-semibold">Github<i class="fa-solid fa-chevron-right text-lg pl-4"></i></p>
        </button>
        <button on:click={() => reroute('https://marketplace.visualstudio.com/items?itemName=Svisualize-dev.svisualize')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 text-logoOrange text-2xl font-bold">Download<i class="fa-solid fa-chevron-right text-xl pl-4 text-logoOrange "></i></p>
        </button>
      </div>
    </div>
  {/if}
  <slot />
  <Footer />
  <svelte:window bind:scrollY={y} bind:outerHeight/>
