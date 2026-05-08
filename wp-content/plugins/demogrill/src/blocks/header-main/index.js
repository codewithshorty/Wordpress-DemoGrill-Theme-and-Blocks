import { registerBlockType } from '@wordpress/blocks';
import metadata from "./block.json";
import Save from "./save";
import Edit from "./edit";


registerBlockType(metadata.name, {
    ...metadata,

    save: Save,
    edit: Edit
}
);
