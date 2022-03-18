import { PlopGeneratorConfig } from "node-plop";

const componentGenerator: Partial<PlopGeneratorConfig> = {
  description: "Create a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component displayname",
      default: "NewComponent",
    },
    {
      type: "input",
      name: "path",
      message: "Component path from src/components/",
      default: "",
    },
  ],
  actions: (data) => [
    {
      type: "add",
      path: `src/components/${data?.path || ''}`,
      templateFile: "./template.tsx.hbs",
    },
  ],
};

export default componentGenerator;
