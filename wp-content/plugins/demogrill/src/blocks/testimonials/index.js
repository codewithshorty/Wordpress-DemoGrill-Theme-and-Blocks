import { registerBlockType } from '@wordpress/blocks';
import metadata from "./block.json";
import Save from "./save";
import Edit from "./edit";


registerBlockType(metadata.name, {
    ...metadata,
    "attributes": {
        "testimonials": {
            "type": "array",
            "default": [
                { "name": "", "desc": "", "image": "" }
            ]
        }
    },
    save: Save,
    edit: Edit
}
);
