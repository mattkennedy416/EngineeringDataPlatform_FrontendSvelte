


<script>

import NotebookContainerSingle from "./NotebookContainerSingle.svelte"

let containersInGroup = [
    {id: 0, component: NotebookContainerSingle},
    {id: 1, component: NotebookContainerSingle},
    {id: 2, component: NotebookContainerSingle},
]

</script>




{#each containersInGroup as obj (obj.id)}
  <NotebookContainerSingle object={obj} />
{/each}

