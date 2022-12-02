
<script>
    // =======================
    // SVELVET
    // =======================
    import Svelvet from "svelvet";

    let nextNodeID = 0;
    let nodeAddID = null;
    
    

    function getNextNodeID() {
        nextNodeID = nextNodeID + 1;
        return nextNodeID;
    }

    function createNodeAddButton() {
        
        nodeAddID = getNextNodeID();
        let nodeAdd = {
		    id: nodeAddID,
		    position: { x: 0, y: 0 },
		    data: { label: "+" },
		    width: 20,
		    height: 20,
		    bgColor: "green",
		    borderRadius: 50,
            childNodes: [3],
            clickCallback: node => addNode(node.childNodes[0])
		  }

          nodes.push(nodeAdd);
          nodes = nodes;
    }

    function nodeSelected(node) {
        console.log(node.id);

        // find and hook up our NodeAddButton to the newly selected item
        for (var i=0; i < nodes.length; i++) {
            if (nodes[i].id == nodeAddID) {

                // remove whoever was previously claiming it
                if (nodes[i].childNodes.length > 0) {
                    let prevClaimedParent = nodes[i].childNodes[0];
                    for (var ii=0; ii < nodes.length; ii++) {
                        if (nodes[ii].id == prevClaimedParent) {
                            nodes[ii].childNodes = [];
                            break;
                        }
                    }
                }   

                // set to new position and parent
                nodes[i].position = {x: node.position.x+200, y: node.position.y};
                nodes[i].childNodes = [node.id];

                // let new parent claim it
                node.childNodes = [nodeAddID];
                break;
            }
        }

        // we'll also need to put the content of this transform into the text box... need to figure out how to send that trigger to the other component
        
    }

    function getNodeByID(id) {
        for (var i=0; i < nodes.length; i++) {
            if (nodes[i].id == id) {
                return nodes[i];
            }
        }
    }

    function addNode(parentID) {

        let parentNode = getNodeByID(parentID);

        console.log(parentID);
        console.log(parentNode.id);
        console.log("adding node");
        
        let newNode = {
            id: getNextNodeID(),
            position: { x: parentNode.position.x + 250, y: parentNode.position.y },
            data: { label: "new node" },
            width: 175,
            height: 40,
            bgColor: "white",
            clickCallback: node => nodeSelected(node),
            sourcePosition:"right",
            targetPosition: "left",
            };

        // add the node and tell svelte that the nodes array has an update
        nodes.push(newNode);
        nodes = nodes;

        // and then add the connection
        // console.log("node ids:");
        // console.log(parentNode.id);
        // console.log(newNode.id);
        let edgeID = "e" + (parentNode.id).toString() + "-" + (newNode.id).toString();
        edges.push({ id: edgeID, source: parentNode.id, target: newNode.id, arrow: true })
        edges = edges

    }





    let nodes = [
    {
    id: getNextNodeID(),
    position: { x: 50, y: 50 },
    data: { label: "Input Node" },
    width: 175,
    height: 40,
    bgColor: "white",
    clickCallback: node => nodeSelected(node)
    },
    {
    id: getNextNodeID(),
    position: { x: 100, y: 150 },
    data: { label: "Default Node" },
    width: 175,
    height: 40,
    bgColor: "white",
    clickCallback: node => nodeSelected(node)
    },
    {
    id: getNextNodeID(),
    position: { x: 150, y: 250 },
    data: { label: "Output Node" },
    width: 175,
    height: 40,
    bgColor: "white",
    clickCallback: node => nodeSelected(node),
    childNodes: [6]
    },

    ];



    let edges = [
    { id: "e1-2", source: 1, target: 2, label: "edge label", arrow: true },
    { id: "e2-3", source: 2, target: 3, arrow: true }
    ];
    
    createNodeAddButton();
    

</script>

<Svelvet bind:nodes={nodes} bind:edges={edges} background />

