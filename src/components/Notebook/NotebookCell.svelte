

<script>
import { onMount } from "svelte";
import { TextArea } from "carbon-components-svelte";
import { Button } from "carbon-components-svelte";
import NotebookTableView from "./NotebookTableView.svelte";

export let cellData;
export let cellID;
export let notebookExecuteCell = () => {}

let cellOutputHTML = "<b>hello world html</b>"
let cellContent = "";
let envVariables = "";
let tablesInCell;

let tableView;

function addSideContainerToThis(containerType, containerData) {

}


export function GetCurrentCellContent() {
    return cellContent;
}

export function SetExecutionResults(htmlOutput, envVar, tableVars) {
    cellOutputHTML = htmlOutput;
    envVariables = envVar;
    tablesInCell = tableVars;

    tableView.SetAvailableTableVars(tableVars);
}



let executionResponse = [];
async function executeCell() {
    // we should know what language we are but lets just assume python for now

    notebookExecuteCell(cellData.cellID);

    // let code = cellContent

    // const res = await fetch('http://127.0.0.1:5000/', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify({code})
    // });

    // const json = await res.json();
    // //let response = JSON.stringify(json);

    // // do any validation or error handling here

    // cellOutputHTML = json.output;
    // envVariables = json.environment;
    // console.log(envVariables);
}

onMount( async () => {
    cellContent = cellData.cellContent;
})

</script>


<Button style="background:orange" on:click={() => executeCell()}>Execute</Button>

<TextArea bind:value={cellContent} />





<p>{@html cellOutputHTML}</p>

<NotebookTableView bind:this={tableView}/>

