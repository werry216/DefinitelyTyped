import * as React from "react";
import Select from "react-select";
import VirtualizedSelect, { VirtualizedSelectAsync } from "react-virtualized-select";

/*Example TValue.*/
interface Example {
	name: string;
}

/*Example generic class.*/
class ExampleSelectAsync extends VirtualizedSelectAsync<Example> {
}

<div>
	<VirtualizedSelect
	  maxHeight={0}
	  optionHeight={0}
	  optionRenderer={() => <div/>}
	  selectComponent={Select}
	  options={[]}
	/>
	<ExampleSelectAsync async={true}
	  maxHeight={0}
	  optionHeight={0}
	  optionRenderer={() => <div/>}
	  selectComponent={Select}
	  loadOptions={(input: string) => Promise.resolve([{name: 'Hi'}])}
	/>
</div>;
