


<script>
	import { DataTable } from "carbon-components-svelte";
    import {Dropdown} from "carbon-components-svelte";

	let dropdownSelectedID = "0";
	let dropdownItems = []

	export let notebookName;

	let headers;
	let rows;
	let headersDefault = [];
	let rowsDefault = [];

	function dropdownSelectionChanged() {

		 // presumably we'll have a default 0 item here that isn't actually a variable
		if (dropdownSelectedID == "0") {
			rows = rowsDefault;
			headers = headersDefault
			return;
		}
			

		for (let i=0; i<dropdownItems.length; i++) {
			if (dropdownItems[i].id == dropdownSelectedID) {
				
				let tableVar = dropdownItems[i].text;
				console.log("selected table var: " + tableVar);

				LoadTableData(tableVar);

				return;
			}
		}
		
	}

	export function SetAvailableTableVars(tableVars) {
		
		dropdownItems = [{id: "0", text: "Select Table"}]; // is there a better way to clear?
		for (let i=0; i<tableVars.length; i++) {
			dropdownItems.push({id: (i+1).toString(), text: tableVars[i]});
		}

	}

	async function LoadTableData(tableVar) {
		
		let type = "tableView";
		let tableView = {"variable": tableVar, "maxRows": 50};

        const res = await fetch('http://127.0.0.1:5000/workspace/notebooks/inspect', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({notebookName, type, tableView})
        });

        const json = await res.json();

        console.log(json);

		headers = json.headers;
		rows = json.rows;


  	}

  </script>
  


  <Dropdown
  type="inline"
  titleText="Select Table"
  bind:selectedId={dropdownSelectedID}
  on:select={dropdownSelectionChanged}
  bind:items={dropdownItems}
/>

<!-- items={[
    { id: "0", text: "Slack" },
    { id: "1", text: "Email" },
    { id: "2", text: "Fax" },
  ]} -->


  <DataTable
	bind:headers={headers}
	bind:rows={rows}
  />


  <!-- headers={[
	{ key: "name", value: "Name" },
	{ key: "protocol", value: "Protocol" },
	{ key: "port", value: "Port" },
	{ key: "rule", value: "Rule" },
  ]}
  rows={[
	{
	  id: "a",
	  name: "Load Balancer 3",
	  protocol: "HTTP",
	  port: 3000,
	  rule: "Round robin",
	},
	{
	  id: "b",
	  name: "Load Balancer 1",
	  protocol: "HTTP",
	  port: 443,
	  rule: "Round robin",
	},
	{
	  id: "c",
	  name: "Load Balancer 2",
	  protocol: "HTTP",
	  port: 80,
	  rule: "DNS delegation",
	},
	{
	  id: "d",
	  name: "Load Balancer 6",
	  protocol: "HTTP",
	  port: 3000,
	  rule: "Round robin",
	},
	{
	  id: "e",
	  name: "Load Balancer 4",
	  protocol: "HTTP",
	  port: 443,
	  rule: "Round robin",
	},
	{
	  id: "f",
	  name: "Load Balancer 5",
	  protocol: "HTTP",
	  port: 80,
	  rule: "DNS delegation",
	},
  ]} -->








