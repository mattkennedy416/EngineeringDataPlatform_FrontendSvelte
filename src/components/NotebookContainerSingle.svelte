<!-- https://svelte.dev/repl/f60141d0fd714f7eac2888c6e5a4bfd4?version=3.53.1 -->

<style>
    .draggable {
      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none;
    }
  
    .Container {
      display:block; position:absolute;
      left:20px; top:200px; width:400px; height:120px;
      padding:20px 0px 0px 0px;
      border:solid 1px lightgray; background-color:lightyellow;
      text-align:center;
    }
  
    .Container-Titlebar {
      display:block; position:absolute;
      left:0px; top:0px; width:100%; height:20px; background-color:palegoldenrod;
      cursor:grab;
    }
  </style>
  
  <script>
    import { draggable } from 'svelte-agnostic-draggable'
    import { TextArea } from "carbon-components-svelte";
    import { Button } from "carbon-components-svelte";
  import { onMount } from 'svelte';
  
  /**** map all touch events to mouse events ****/
  
    //import mapTouchToMouseFor from 'svelte-touch-to-mouse'
    //mapTouchToMouseFor('.draggable')

    export let groupContainerIsBeingDragged = () => {}
    export let groupAddSideContainerToThis = () => {}
    export let newInlineContainerMounted = () => {}
    export let newSideContainerMounted = () => {}

    export let containerID;
    export let containerType;

    onMount(() => {
      // let the container group actually handle most of the initialization here
      if (containerType === "side")
          newSideContainerMounted(containerID, containerType, 0);
      else
          newInlineContainerMounted(containerID, containerType);
      
    })

    let dragBarWidth=300;
    let dragBarOpenHeight = 20;
    let dragBarCurrentHeight = 20;

    let containerRelativeXPos = 0;
    let containerRelativeYPos = 300;
    let containerXPos = 0;
    let containerYPos = 300;

    let containerHeight = 200;

    let draggableContainer;
    let draggableContainerDragBar;

    let dragLocked = false;
    function toggleLock(){
        dragLocked = !dragLocked;

        if (dragLocked)
            dragBarCurrentHeight = 0;
        else
            dragBarCurrentHeight = dragBarOpenHeight;
    }

    function addSideContainerToThis() {
      // do whatever we need to figure out the type and details here
      groupAddSideContainerToThis(containerID, "not implemented");
    }

    function onDragStart(event){
        // and this is when a drag event starts
    }

    function onDragInit(event)
    {
        // this is when object is created / mounted
        
    }

    function onDragMove(event) {
      // THIS CONTAINER IS BEING DRAGGED
      groupContainerIsBeingDragged(containerID, event);
    }

    export function setPositionInGroup(groupXPosition, groupYPosition, relativeY, relativeX)
    {
      containerYPos = groupYPosition + relativeY;
      containerXPos = groupXPosition + relativeX;
      containerRelativeYPos = relativeY;
      containerRelativeXPos = relativeX;
    }

    export function getContainerRelativeYPos() {
      return containerRelativeYPos;
    }

    export function getContainerRelativeXPos() {
      return containerRelativeXPos;
    }

    export function setContainerID(id) {
        containerID = id;
    }

    export function getContainerHeight() {
      return containerHeight;
    }

    export function groupIsMoving(groupXPosition, groupYPosition) {
        //containerRelativeXPos = containerRelativeXPos + deltaX;
        //containerRelativeYPos = containerRelativeYPos + deltaY;

        //console.log("moving container " + containerID.toString())

        containerYPos = groupYPosition + containerRelativeYPos;
        containerXPos = groupXPosition + containerRelativeXPos;
    }


  </script>
  

  

    <div bind:this={draggableContainer} class="Container" 
          use:draggable={{handle:'.Container-Titlebar', containment:'parent', cursor:'grabbing'}} 
          on:drag:start={onDragStart} 
          on:draggable:init={onDragInit}
          on:drag:move={onDragMove}
          style="left:{containerXPos}px; top:{containerYPos}px; height:{containerHeight}px">
      <div class="draggable Container-Titlebar" style="width:{dragBarWidth}px; height:{dragBarCurrentHeight}px"></div>
      <Button on:click={() => toggleLock()}>Lock</Button>
      <TextArea value="content" />
      <Button on:click={() => addSideContainerToThis()}>Add Side Container</Button>
    </div>

