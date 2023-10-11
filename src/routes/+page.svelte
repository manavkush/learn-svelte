<script lang='ts'>
	import Thing from './Thing.svelte';

	let things: {id: number, name: string}[] = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>


<button on:click={handleClick}>
	Remove first thing
</button>

{#each things as thing} 
	<!-- 
		By default the key passed to each thing is 
	  the index. When we delete the last element of the Array
		the index passed to the thing1 remains the same (i.e. 0)
		Just the element passed gets changed.
		Happens all the way to the last element present. 
		The remaining thing<j> gets removed from the DOM.
		
		The instance of thing1 is not destroyed because the key remains the same (the new array also has an element with index 0)
		Only the prop sent to the Thing1 changes. 
		This doesn't affect the color as the emoji for a thing instance,
		remains constant after initialization. (it's not declared reactive
		i.e. after $: )
	-->
	<Thing name={thing.name} />
{/each}
