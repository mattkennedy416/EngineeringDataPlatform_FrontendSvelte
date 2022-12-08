


<script>
	import { DataTable } from "carbon-components-svelte";
    import {ComboBox} from "carbon-components-svelte";
  </script>
  


  <ComboBox
  titleText="Contact"
  placeholder="Select contact method"
  selectedId="1"
  items={[
    { id: "0", text: "Slack" },
    { id: "1", text: "Email" },
    { id: "2", text: "Fax" },
  ]}
/>


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









