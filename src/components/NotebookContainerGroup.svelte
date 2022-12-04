


<script>
import {onMount} from "svelte";
import NotebookContainerSingle from "./NotebookContainerSingle.svelte"

let containersInGroup = [
    {id: 0, component: NotebookContainerSingle},
    {id: 1, component: NotebookContainerSingle},
    {id: 2, component: NotebookContainerSingle},
]

// ok but actually do we even need to do this? can we just reference the above?
let loadedObjectBinds = new Map();

//containersInGroup[0].setYPositionInGroup(10);
//containersInGroup[1].component.setYPositionInGroup(100);
// containersInGroup[2].component.setYPositionInGroup(300);

//console.log(containersInGroup[0].component.setYPositionInGroup);

onMount(() => {
  
  let totalHeight = 0;

  for (let i=0; i<3; i++) {
      let h = loadedObjectBinds[i].getContainerHeight();
      totalHeight = totalHeight + h;
      loadedObjectBinds[i].setYPositionInGroup(totalHeight);
  }
  
  
})

</script>




{#each containersInGroup as obj (obj.id)}
  <NotebookContainerSingle object={obj} bind:this={loadedObjectBinds[obj.id]}/>
{/each}

