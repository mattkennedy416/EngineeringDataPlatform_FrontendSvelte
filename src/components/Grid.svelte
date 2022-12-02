


<script>
	import { DataTable } from "carbon-components-svelte";
  </script>
  
  <DataTable
	headers={[
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
	]}
  />






<!-- <script>
	import {RevoGrid} from '@revolist/svelte-datagrid';
	import {defineCustomElements} from '@revolist/revogrid/loader';
	
	let source;
	let headers;
	
	// define webcomponent element in DOM
	defineCustomElements().then(() => {
	  // then apply data or rerender
	  source = [{
		  prop: "name",
		  name: "First",
		},
		{
		  prop: "details",
		  name: "Second",
	  }];
	  headers = [{
		name: "1",
		details: "Item 1",
	  }];
	});
	</script>
	
	
	<RevoGrid source={source} resize="true" columns={headers} theme="material"/> -->




