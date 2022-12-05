


<script>
  import { draggable } from 'svelte-agnostic-draggable'
import {onMount} from "svelte";
import NotebookContainerSingle from "./NotebookContainerSingle.svelte"

let containersInGroup = [
    {id: 0, type: "code", data: {"parent": -1}, component: NotebookContainerSingle},
    {id: 1, type: "code", data: {"parent": -1}, component: NotebookContainerSingle},
    {id: 2, type: "code", data: {"parent": -1}, component: NotebookContainerSingle},
]

export let visualScale = 1;

// ok but actually do we even need to do this? can we just reference the above?
let loadedObjectBinds = new Map();

let groupXPosition = 0;
let groupYPosition = 0;

let groupTotalHeight = 40; // whatever height of the container group bar

let _nextContainerID = 3; // since we're manually creating a few above



onMount(() => {
  
    // note that this will only get called at the CREATION OF A NEW GROUP
    // not if additional containers are added to the group
  
})

function getNextContainerID() {
    _nextContainerID = _nextContainerID + 1;
    return _nextContainerID;
}

function Container(containerID) {
  return loadedObjectBinds[containerID];
}

function NumContainers() {
  return containersInGroup.length;
}

export function newInlineContainerMounted(containerID, containerType) {
    let h = loadedObjectBinds[containerID].getContainerHeight();
    
    loadedObjectBinds[containerID].setPositionInGroup(groupXPosition, groupYPosition, groupTotalHeight, 0);
    groupTotalHeight = groupTotalHeight + h;
}

export function newSideContainerMounted(containerID, containerType, parentID) {
    console.log("mounting new side container to parent " + parentID.toString());

    // I think we want to set it to same height as parent, right?
    let relY = loadedObjectBinds[parentID].getContainerRelativeYPos();
    let relX = 400;
    Container(containerID).setPositionInGroup(groupXPosition, groupYPosition, relY, relX);
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

  let originatingRelativeX = Container(originatingContainerID).getContainerRelativeXPos();
  let groupXPosition = newLeft - originatingRelativeX; 

  let originatingRelativeY = loadedObjectBinds[originatingContainerID].getContainerRelativeYPos();
  let groupYPosition = newTop - originatingRelativeY;

  // for (let i=0; i<NumContainers(); i++) {
  //     if (i === originatingContainerID)
  //         continue; // the event will move them 

  //     loadedObjectBinds[i].groupIsMoving(groupXPosition, groupYPosition);
  // }

  for (const [key, value] of Object.entries(loadedObjectBinds)) {
    if (key == originatingContainerID)
      continue;
    
    value.groupIsMoving(groupXPosition, groupYPosition);
  }

}

export function groupAddSideContainerToThis(containerID, containerDetails) {
  // container details should have something like: {containerType: str; containerData: whatever/json/etc}
  console.log("adding side container to " + containerID);

  let newID = getNextContainerID();
  containersInGroup.push({id: newID, type: "side", data: {"parent": containerID}, component: NotebookContainerSingle});
  containersInGroup = containersInGroup;

  let relY = containersInGroup

  // containersInGroup[newID].setContainerID(newID);
  // containersInGroup[newID].setYPositionInGroup(groupXPosition, groupYPosition, totalHeight);
}

function onDragStart(event) {
  console.log("drag event start!");
}

function onDragInit(event) {
  console.log("draggable init");
}

function onDragMove(event) {

}

</script>


<style>

.draggable {
      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none;
    }

.ContainerGroup {
      display:block; position:absolute;
      left:00px; top:100px; width:400px; height:40px;
      border:solid 1px lightgray; background-color:green;
      text-align:center;
      cursor:grab;
      scale:1;
    }


</style>




<div class="draggable ContainerGroup" use:draggable={{
  containment:'parent', cursor:'grabbing'
}} style="
  display:block; position:absolute;
  left:20px; top:20px; width:100px; text-align:center;
  padding:10px; background:forestgreen; cursor:grab;
" on:draggable:init={onDragInit}
  on:drag:start={onDragStart} 
  on:drag:move={onDragMove}
>

{#each containersInGroup as obj (obj.id)}
<NotebookContainerSingle object={obj} bind:this={loadedObjectBinds[obj.id]} 
        containerID={obj.id} 
        containerType={obj.type}
        containerData={obj.data}
        groupContainerIsBeingDragged={(id, event) => groupContainerIsBeingDragged(id, event)} 
        groupAddSideContainerToThis={(id, details) => groupAddSideContainerToThis(id, details)}
        newInlineContainerMounted={(id, type) => newInlineContainerMounted(id, type)}
        newSideContainerMounted={(id, type, parent) => newSideContainerMounted(id, type, parent)}
        />
{/each}



</div>




