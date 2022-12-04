


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



onMount(() => {
  
  let totalHeight = 0;

  for (let i=0; i<3; i++) {
      loadedObjectBinds[i].setContainerID(i);

      let h = loadedObjectBinds[i].getContainerHeight();
      totalHeight = totalHeight + h;
      loadedObjectBinds[i].setYPositionInGroup(totalHeight);
  }
  
  
})

export function groupContainerIsBeingDragged(originatingContainerID, moveEvent) {
  // gotta drag the rest of the containers along with them!

  let deltaX = moveEvent.detail.originalEvent.movementX;
  let deltaY = moveEvent.detail.originalEvent.movementY;
  //console.log(moveEvent.detail.originalEvent.movementX);

  for (let i=0; i<3; i++) {
      if (i === originatingContainerID)
          continue; // the event will move them 

      loadedObjectBinds[i].groupIsMoving(deltaX, deltaY);
      
  }

}

</script>




{#each containersInGroup as obj (obj.id)}
  <NotebookContainerSingle object={obj} bind:this={loadedObjectBinds[obj.id]} groupContainerIsBeingDragged={(id, event) => groupContainerIsBeingDragged(id, event)}/>
{/each}

