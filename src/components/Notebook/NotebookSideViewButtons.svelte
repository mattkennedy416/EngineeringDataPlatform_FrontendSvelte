
<script>

import { Button } from "carbon-components-svelte";

    function OpenView(name) {

    }


</script>


<div>
    <Button style="
    display:block; position:absolute;
    left:400px; top:20px; width:40px; height:40px; text-align:center;
    padding:10px; background:rgb(81, 112, 81);" 
    on:click={() => OpenView("scrap", {})}>Scrap</Button>
    
    <Button style="
    display:block; position:absolute;
    left:400px; top:70px; width:40px;  height:40px; text-align:center;
    padding:10px; background:forestgreen;" 
    on:click={() => OpenView("plot", {})}>Plot</Button>
    
    <Button style="
    display:block; position:absolute;
    left:400px; top:120px; width:40px; height:40px; text-align:center;
    padding:10px; background:forestgreen;" 
    on:click={() => OpenView("table", {})}>Table</Button>

</div>
