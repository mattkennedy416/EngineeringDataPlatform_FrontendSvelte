

<script>
  import { onMount } from "svelte";


import NotebookCell from "./NotebookCell.svelte";
import NotebookSideViewButtons from "./NotebookSideViewButtons.svelte";
import { Button } from "carbon-components-svelte";

import NotebookTableView from "./NotebookTableView.svelte";

let notebookPath = 'notebooks/testNotebook.edpnb'
let notebookName = "testNotebook";

let cellData = [];
  async function ReadCellsFromBackend(cellIndexes) {
    // cellIndexes should be a list of integers that we want to query
    // if cellIndexes is empty, get everything

    const res = await fetch('http://127.0.0.1:5000/workspace/notebooks?notebookPath='+notebookPath, {
        method: 'GET'
    });

    // const res = await fetch('http://127.0.0.1:5000/workspace/notebooks', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify({notebookFilename})
    // });

    const json = await res.json();
    let response = JSON.stringify(json);
    
    // do any validation or error handling here

    cellData = json.cellContents;
    notebookName = json.notebookName;
    notebookPath = json.notebookPath;
    console.log(json);

  }

  async function SaveNotebook() {
    console.log(cellData);

    // ok so we need to query all the components and update their current text value to what's held at the notebook level
    for (let i=0; i<cellData.length; i++) {
        let id = cellData[i].cellID;
        cellData[i].cellContent = loadedObjectBinds[id].GetCurrentCellContent();
    }

    let content = cellData
    const res = await fetch('http://127.0.0.1:5000/workspace/notebooks', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({notebookPath, notebookName, content})
    });
  }


  onMount( async () => {
    ReadCellsFromBackend([]) // load everything
  })
  

  let loadedObjectBinds = new Map();


</script>


<Button style="background:blue" on:click={() => SaveNotebook()}>Save Notebook</Button>

<NotebookSideViewButtons />

{#each cellData as data}
<NotebookCell bind:this={loadedObjectBinds[data.cellID]} 
        cellData={data}
        />
{/each}



<NotebookTableView />
