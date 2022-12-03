
<!-- https://svelte.dev/repl/f60141d0fd714f7eac2888c6e5a4bfd4?version=3.53.1 -->

<style>
    .draggable {
      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none;
    }
  
    .Container {
      display:block; position:absolute;
      left:20px; top:20px; width:400px; height:120px;
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

    let dragLocked = false;
    function toggleLock(){
        dragLocked = !dragLocked;
        console.log(dragLocked);
    }

    function dragStart(event){
        console.log("starting drag!");
        if (dragLocked) {event.cancel()}
    }


  </script>
  
  <p style="line-height:150%">
    Drag the note around - dragging should be restricted to the bordered area:
  </p>
  
  <div style="
    display:block; position:relative;
    width:800px; height:1500px;
    margin:20px;
    border:solid 1px black
  ">
    <div class="Container" use:draggable={{handle:'.Container-Titlebar', containment:'parent', cursor:'grabbing', 'drag:start': function(event){console.log(dragLocked); if (dragLocked) {event.cancel()}}}}>
      <div class="draggable Container-Titlebar"></div>
      <!-- <span style="position:relative; left:-5px">Drag from Titlebar only</span> -->
      <Button on:click={() => toggleLock()}>Lock</Button>
      <TextArea value="content" />
    </div>
  </div>
  
  <p style="line-height:150%">
    For mobile development: please note, that "mapTouchToMouseFor" must be applied
    to the actual handle, not the element which uses the "draggable" action!
  </p>





<!-- // https://svelte.dev/repl/cfd1b8c9faf94ad5b7ca035a21f4dbd1?version=3.53.1


<style>
    .draggable {
      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none;
    }
  
    .Note {
      display:block; position:absolute;
      left:20px; top:20px; width:200px; height:120px;
      min-width:200px; max-width:300px;
      min-height:80px; max-height:300px;
      padding:40px 0px 0px 0px;
      border:solid 1px lightgray; background-color:lightyellow;
      text-align:center;
    }
  
    .Note-Titlebar {
      display:block; position:absolute;
      left:0px; top:0px; width:100%; height:20px; background-color:palegoldenrod;
      cursor:grab;
    }
  
    .Note-ResizeHandle {
      display:block; position:absolute;
      right:0px; bottom:0px; width:32px; height:32px;
      background-color:transparent;
      background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAiklEQVRYR+WUwQ3AIAwDm3UzUNZtxQ8hhBpIbGhZIKezsVzkJ4z7ZnaXu6oq/wSorVMMwAHqzNvOQQzQAUY/DWIADjBSXmDSd4AO4FnXb3TAozxlB+gAnsxTDMABVpSH7AAdYEX5mR2IVD5lgA4QmfmUAThApvJXO0AHyFS+ZweQyrsG6ADIzNtbD4OSoCHdTWtaAAAAAElFTkSuQmCC");
      cursor:nwse-resize;
    }
  
    .Note-ResizeHandle:global(.ui-draggable-helper) { visibility:hidden }
  </style>
  
  <script>
    import { draggable } from 'svelte-agnostic-draggable'
    import { TextArea } from "carbon-components-svelte";
    
    // this is the size of the container/note
    let Width    = 200, Height    = 120
    let minWidth = 200, minHeight = 80
    let maxWidth = 300, maxHeight = 300
  
    let resizing = false
    let initialX, initialY, initialWidth, initialHeight
  

  
  /**** Svelte Event Handling ****/
  
    function onDragMove (Event) {
      if (resizing) {
        Width  = Math.max(minWidth,  Math.min(maxWidth, initialWidth  + (Event.detail.position.left-initialX)))
        Height = Math.max(minHeight, Math.min(maxHeight,initialHeight + (Event.detail.position.top -initialY)))
      } else {
        initialX = Event.detail.position.left; initialWidth  = Width
        initialY = Event.detail.position.top;  initialHeight = Height
        resizing = true
      }
    }
    function onDragStop () { resizing = false }


      /**** map all touch events to mouse events ****/
  
      import mapTouchToMouseFor from 'svelte-touch-to-mouse'
    mapTouchToMouseFor('.draggable')
    
  </script>
  
  <p style="line-height:150%">
    Drag the note or change its size using the shown handle:
  </p>
  

  <div style="
    display:block; position:relative;
    width:700px; height:400px;
    margin:20px;
    border:solid 1px black
  ">
    <div class="Note" use:draggable={{
      handle:'.Note-Titlebar', containment:'parent', cursor:'grabbing'
    }} style="
      width:{Width}px; height:{Height}px
    ">
      <div class="draggable Note-Titlebar"></div>
      <span style="position:relative; left:-5px">Drag from Titlebar only</span>
      <TextArea labelText="textbox" value="content" />
      <div class="draggable Note-ResizeHandle" use:draggable={{
        helper:'clone', revert:true
      }}
        on:drag:move={onDragMove} on:drag:stop={onDragStop}
      ></div>
    </div>
  </div>
-->






<!-- <script>
    import Draggable from './Draggable.svelte';
</script>

<Draggable>
<h1>
    Drag Me
</h1>
</Draggable> -->


<!-- <script>
    import { select, drag } from "d3";
    import { onMount } from "svelte";
    let bindSvgHere;
    let svg;
    let circle;
    let data = [
      [50, 50],
      [100, 100],
      [150, 150],
    ];
  
    function started(event) {
      circle = select(this); // set circle to the element that has been dragged.
      circle.attr("cx", event.x).attr("cy", event.y); // move the x/y position
    }
    $: dragHandler = drag().on("drag", started); // setup a simple dragHandler
  
    onMount(() => {
      svg = select(bindSvgHere);
      circle = svg
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", (d) => d[0])
        .attr("cy", (d) => d[1])
        .attr("r", 15);
      dragHandler(circle); // call the dragHandler on circle to enable dragging
    });
  </script>
  
  <svg bind:this={bindSvgHere} height="500" width="500" /> -->



<!-- <script>
    import {flip} from "svelte/animate";
    import {dndzone} from "svelte-dnd-action";

    import { TextArea } from "carbon-components-svelte";

    let items = [
        {id: 1, name: "item1 asdfasdf"},
        {id: 2, name: "item2"},
        {id: 3, name: "item3"},
        {id: 4, name: "item4"}
    ];
    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
    }
</script>

<style>
    section {
        width: 50%;
        padding: 0.3em;
        border: 1px solid black;
        /* this will allow the dragged element to scroll the list */
        overflow: scroll;
        height: 200px;
    }
    div {
        width: 50%;
        padding: 0.2em;
        border: 1px solid blue;
        margin: 0.15em 0;
    }
</style>
<section use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
    {#each items as item(item.id)}
    <div animate:flip="{{duration: flipDurationMs}}">{item.name}</div>
    {/each}
</section> -->