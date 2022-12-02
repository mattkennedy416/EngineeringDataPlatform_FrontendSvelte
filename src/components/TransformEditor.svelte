


<script>
    import { TextArea } from "carbon-components-svelte";
    import { Button } from "carbon-components-svelte";
    import Add from "carbon-icons-svelte/lib/Add.svelte";
    import PlayFilledAlt from "carbon-icons-svelte/lib/PlayFilledAlt.svelte"
    import PauseFilled from "carbon-icons-svelte/lib/PauseFilled.svelte"

    // let currentlySelectedTransform = ""; probably use a string UID?

    let selectedTransformName = 'myTransform()'
    let transformContent = 'def myTransform(input1, input2):\n\t'

    export function transformSelectedFromPipelineEditor(nodeID) {
        console.log("I got run in child component!");
        console.log(nodeID);

        transformContent = "node selected: " + nodeID.toString();
    } 


    function buttonClickExecuteTransform() {

        transformContent = "clicked!";
    }

    function buttonClickExecutePipelineToHere() {
        transformContent = "executing pipeline!";
    }

  </script>
  


<div class="w-full">
  <div class="w-full"> 
    <Button on:click={() => buttonClickExecuteTransform()} icon={PlayFilledAlt}>Execute Transform</Button>

    <Button on:click={()=>buttonClickExecutePipelineToHere()} icon={PlayFilledAlt}>Execute Pipeline to Here</Button>

    <Button icon={Add}>Something</Button>
  </div>
  <div class="w-full"> 
    
  </div>
  <div class="w-full"> 
    
  </div>

<!--     
    <Button size="field">Primary</Button>
    <Button size="xl">Primary</Button> -->
</div>

<div class="w-full">
    <TextArea bind:labelText={selectedTransformName} bind:value={transformContent} />
</div>
  




<!-- <script>
	let value = `Some words are *italic*, some are **bold**`;
</script>


<textarea bind:value={value }></textarea>

<style>
	textarea { width: 100%; height: 200px; }
</style> -->



