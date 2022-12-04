

  <script>

    import NotebookContainerSingle from "./NotebookContainerSingle.svelte"
    import NotebookContainerGroup from "./NotebookContainerGroup.svelte";
    import NotebookCanvas from "./NotebookCanvas.svelte";
  import { Notebook } from "carbon-icons-svelte";

  </script>

<div style="
display:block; position:relative;
width:800px; height:1500px;
margin:20px;
border:solid 1px black;
scale:0.5em
">

<!-- <NotebookCanvas /> -->

  <NotebookContainerGroup />

    

</div>

  
  <p style="line-height:150%">
    For mobile development: please note, that "mapTouchToMouseFor" must be applied
    to the actual handle, not the element which uses the "draggable" action!
  </p>

