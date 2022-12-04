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
  
  /**** map all touch events to mouse events ****/
  
    //import mapTouchToMouseFor from 'svelte-touch-to-mouse'
    //mapTouchToMouseFor('.draggable')

    export let groupContainerIsBeingDragged = () => {}

    let containerID;

    let dragBarWidth=300;
    let dragBarOpenHeight = 20;
    let dragBarCurrentHeight = 20;

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

    export function setYPositionInGroup(y)
    {
      containerYPos = y;
    }

    export function setContainerID(id) {
        containerID = id;
    }

    export function getContainerHeight() {
      return containerHeight;
    }

    export function groupIsMoving(deltaX, deltaY) {
        containerXPos = containerXPos + deltaX;
        containerYPos = containerYPos + deltaY;

        console.log("moving container " + containerID.toString())
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
    </div>

