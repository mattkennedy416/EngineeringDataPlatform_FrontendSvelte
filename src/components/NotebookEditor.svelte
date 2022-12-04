

  <script>

    import NotebookContainerSingle from "./NotebookContainerSingle.svelte"
    import NotebookContainerGroup from "./NotebookContainerGroup.svelte";

  </script>

<div style="
display:block; position:relative;
width:800px; height:1500px;
margin:20px;
border:solid 1px black
">

  <NotebookContainerGroup />


</div>

  
  <p style="line-height:150%">
    For mobile development: please note, that "mapTouchToMouseFor" must be applied
    to the actual handle, not the element which uses the "draggable" action!
  </p>

