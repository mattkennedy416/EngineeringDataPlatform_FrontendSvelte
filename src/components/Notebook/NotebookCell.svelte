

<script>
import { onMount } from "svelte";
import { TextArea } from "carbon-components-svelte";
import { Button } from "carbon-components-svelte";

export let cellData;

let cellOutputHTML = "<b>hello world html</b>"
let cellContent = "";
let envVariables = "";

function addSideContainerToThis(containerType, containerData) {

}


export function GetCurrentCellContent() {
    return cellContent;
}



let executionResponse = [];
async function executeCell() {
    // we should know what language we are but lets just assume python for now
    let code = cellContent

    const res = await fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({code})
    });

    const json = await res.json();
    //let response = JSON.stringify(json);

    // do any validation or error handling here

    cellOutputHTML = json.output;
    envVariables = json.environment;
    console.log(envVariables);
}

onMount( async () => {
    cellContent = cellData.cellContent;
})

</script>


<Button style="background:orange" on:click={() => executeCell()}>Execute</Button>

<TextArea bind:value={cellContent} />


<Button style="
display:block; position:absolute;
left:400px; top:20px; width:40px; height:40px; text-align:center;
padding:10px; background:forestgreen;" 
on:click={() => addSideContainerToThis("scrap", {})}>Scrap</Button>

<Button style="
display:block; position:absolute;
left:400px; top:70px; width:40px;  height:40px; text-align:center;
padding:10px; background:forestgreen;" 
on:click={() => addSideContainerToThis("plot", {})}>Plot</Button>

<Button style="
display:block; position:absolute;
left:400px; top:120px; width:40px; height:40px; text-align:center;
padding:10px; background:forestgreen;" 
on:click={() => addSideContainerToThis("table", {})}>Table</Button>


<p>{@html cellOutputHTML}</p>



