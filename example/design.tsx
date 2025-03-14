import DesignInterface from "../../components/interfaces/DesignInterface";
import schema from "./schema.json";
import schemaUI from "./schemaUI.json";
import Image from "./Image";

const design: DesignInterface = {
  title: "Beispieldesign",
  menuSchema: schema as Object,
  menuSchemaUI: schemaUI as Object,
  Image: Image,
  fontFamilies: ["OpenSans"],
  advancedOptionsAvailable: true,
  logoActive: true
};
export default design;
