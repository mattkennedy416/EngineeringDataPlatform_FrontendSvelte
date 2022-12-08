

<script>
  import { onMount } from "svelte";


import NotebookCell from "./NotebookCell.svelte";


let cellData = [];
  async function ReadCellsFromBackend(cellIndexes) {
    // cellIndexes should be a list of integers that we want to query
    // if cellIndexes is empty, get everything

    const res = await fetch('http://127.0.0.1:5000/workspace/notebooks', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    });

    const json = await res.json();
    let response = JSON.stringify(json);
    
    // do any validation or error handling here

    cellData = json;
    console.log(cellData);
  }


  onMount( async () => {
    ReadCellsFromBackend([]) // load everything
  })
  

  let loadedObjectBinds = new Map();


</script>


{#each cellData as data}
<NotebookCell bind:this={loadedObjectBinds[data.cellID]} 
        cellData={data}
        />
{/each}

