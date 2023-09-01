<script lang="ts">
  import { onMount } from 'svelte';
  import AdviceCard from './AdviceCard.svelte';
  import mobileDiv from '../assets/pattern-divider-mobile.svg';
  import DeskDiv from '../assets/pattern-divider-desktop.svg';
  import Randomized from '../assets/icon-dice.svg';
  

  const getAdvices = async () => {
        const res = await fetch(`https://api.adviceslip.com/advice`, {cache: 'no-cache'})
        const data = await res.json()
        const advice = data.slip.advice;
        return data;
      }

    let adviceObject = getAdvices();

  onMount(() => {
    getAdvices();
  });

</script>

<section class="w-4/12 h-auto flex py-6 justify-around my-6 items-center flex-col  rounded-lg bg-n-dark-grayish-blue shadow-lg drop-shadow max-xs:w-screen max-xs:mx-4 max-xs:h-3/6 max-sm:w-screen max-sm:mx-4 max-sm:h-3/6 max-md:w-5/12 max-lg:w-5/12">
  {#await adviceObject}
   <p class="text-center text-primary-light-cyan">Loading</p> 
  {:then data} 
    <p class="text-center uppercase text-primar-neon-green text-xs  ">
    Advice #
    {JSON.stringify(data.slip.id, null, 2)}
  </p>
  <p class="px-3  text-clip text-center text-md text-primary-light-cyan py-4  ">
    {JSON.stringify(data.slip.advice, null, 2)}

  </p>

  {/await}
  

  <picture>
    <source srcset={mobileDiv} media="(max-width: 600px)">
    <img src={DeskDiv} alt="desktop divider icon" class="w-11/12 flex justify-center items-center mx-auto py-4">
  </picture>

  <button class="absolute -bottom-5 w-12 h-12 p-2 bg-primar-neon-green rounded-full flex justify-center items-center" on:click={async() => adviceObject= await getAdvices()}  >
    <img src={Randomized} alt="randomized icon"  class=""/>
  </button>

</section>




<style>
  /* Your styles here */
</style>
