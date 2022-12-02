

<script>

	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';

	import Grid from "./Grid.svelte";

	import Flowchart from "./Flowchart.svelte"
	import TransformEditor from './TransformEditor.svelte';


    function pipelineNodeSelected(nodeID) {
        console.log("I was called in parent!");
        console.log(nodeID);
        transformEditorReference.transformSelectedFromPipelineEditor(nodeID);
    }

    let transformEditorReference;
	
</script>



<div class="w-full">
    <!-- <Svelvet nodes={initialNodes} edges={initialEdges} background /> -->
    <Flowchart pipelineNodeSelected={(nodeID) => pipelineNodeSelected(nodeID)}/>
</div>
<div class="w-full">
    <!-- <SimpleCodeEditor value="let x = 1;\n console.log(x);" /> -->
    <TransformEditor bind:this={transformEditorReference}/>
</div>





