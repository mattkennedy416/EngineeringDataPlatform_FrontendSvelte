<!-- https://svelte.dev/repl/f60141d0fd714f7eac2888c6e5a4bfd4?version=3.53.1 -->

<style>
    .draggable {
      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none;
    }
  
    .Canvas {
      display:block; position:absolute;
      /* left:20px; top:200px; width:400px; height:120px; */
      padding:20px 0px 0px 0px;
      border:solid 1px lightgray; background-color:lightblue;
      text-align:center;
      cursor: grab;
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

    export let canvas;

    function onDragStart(event) {

    }

    function onDragInit(event) {

    }

    function onDragMove(event) {
        console.log(event);

    }


  </script>
  

  

    <div bind:this={canvas} class="Canvas" 
          use:draggable={{handle:'.Canvas', containment:'parent', cursor:'grabbing'}} 
          on:drag:start={onDragStart} 
          on:draggable:init={onDragInit}
          on:drag:move={onDragMove}
          style="left:100px; top:100px; height:100px">
      <div class="draggable Canvas" style="width:1000px; height:1000px"></div>

    </div>

