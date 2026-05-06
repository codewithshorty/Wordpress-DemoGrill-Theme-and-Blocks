import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Save from "./save";
import Edit from "./edit";
import "./main.css";

registerBlockType(metadata.name, {
    ...metadata,
    edit: Edit,
    save: Save
})