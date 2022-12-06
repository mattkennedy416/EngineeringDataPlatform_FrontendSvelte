

  <script>

    import NotebookContainerSingle from "./Notebook/NotebookContainerSingle.svelte"
    import NotebookContainerGroup from "./Notebook/NotebookContainerGroup.svelte";
    import NotebookCanvas from "./NotebookCanvas.svelte";
  import Notebook from "./Notebook/Notebook.svelte";
  import NotebookCell from "./Notebook/NotebookCell.svelte";

  </script>

<div style="
display:block; position:relative;
width:900px; height:1500px;
margin:20px;
border:solid 1px black;
scale:0.5em
">

<!-- <NotebookCanvas /> -->

  <!-- <NotebookContainerGroup /> -->

    <!-- <NotebookCell /> -->
    <Notebook />

</div>

  
  <p style="line-height:150%">
    For mobile development: please note, that "mapTouchToMouseFor" must be applied
    to the actual handle, not the element which uses the "draggable" action!
  </p>

