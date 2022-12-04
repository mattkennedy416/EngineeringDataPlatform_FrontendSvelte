


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

let groupXPosition = 0;
let groupYPosition = 0;

let groupTotalHeight = 0;

let _nextContainerID = 3; // since we're manually creating a few above



onMount(() => {
  
    // note that this will only get called at the CREATION OF A NEW GROUP
    // not if additional containers are added to the group
  
})

function getNextContainerID() {
    _nextContainerID = _nextContainerID + 1;
    return _nextContainerID;
}

export function newContainerMounted(containerID) {
    let h = loadedObjectBinds[containerID].getContainerHeight();
    groupTotalHeight = groupTotalHeight + h;
    loadedObjectBinds[containerID].setYPositionInGroup(groupXPosition, groupYPosition, groupTotalHeight);
}

export function groupContainerIsBeingDragged(originatingContainerID, moveEvent) {
  // gotta drag the rest of the containers along with them!

  console.log(moveEvent.detail.position);

  let deltaX = moveEvent.detail.originalEvent.movementX;
  let deltaY = moveEvent.detail.originalEvent.movementY;
  //console.log(moveEvent.detail.originalEvent.movementX);

  let newLeft = moveEvent.detail.position.left;
  let newTop = moveEvent.detail.position.top;
  console.log(newLeft);

  let groupXPosition = newLeft; 

  let originatingRelativeY = loadedObjectBinds[originatingContainerID].getContainerRelativeYPos();
  let groupYPosition = newTop - originatingRelativeY;

  for (let i=0; i<3; i++) {
      if (i === originatingContainerID)
          continue; // the event will move them 

      loadedObjectBinds[i].groupIsMoving(groupXPosition, groupYPosition);
      
  }

}

export function groupAddSideContainerToThis(containerID, containerDetails) {
  // container details should have something like: {containerType: str; containerData: whatever/json/etc}
  console.log("adding side container to " + containerID);

  let newID = getNextContainerID();
  containersInGroup.push({id: newID, component: NotebookContainerSingle});
  containersInGroup = containersInGroup;

  let relY = containersInGroup

  // containersInGroup[newID].setContainerID(newID);
  // containersInGroup[newID].setYPositionInGroup(groupXPosition, groupYPosition, totalHeight);
}

</script>




{#each containersInGroup as obj (obj.id)}
  <NotebookContainerSingle object={obj} bind:this={loadedObjectBinds[obj.id]} 
          containerID={obj.id} 
          groupContainerIsBeingDragged={(id, event) => groupContainerIsBeingDragged(id, event)} 
          groupAddSideContainerToThis={(id, details) => groupAddSideContainerToThis(id, details)}
          newContainerMounted={(id) => newContainerMounted(id)}/>
{/each}

