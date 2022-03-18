module.exports = {
  description: "Create a container",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Container displayname:",
      default: "NewContainer",
    },
    {
      type: "confirm",
      name: "reducer",
      message: "Using reducer?",
      default: "y",
    },
    {
      type: "input",
      name: "path",
      message: "Container path from src/containers/:",
      default: "",
    },
  ],
  actions: (data) => {
    const defaultPath = `../../src/containers/${
      data?.path ? data?.path + "/" : ""
    }{{properCase name}}/`;

    const reducerPath = defaultPath + "/store/";

    const defaultActions = [
      {
        type: "add",
        path: defaultPath + "index.tsx",
        templateFile: "./container/index.tsx.hbs",
        abortOnFail: true,
      },
    ];

    const reducerActions = [
      {
        type: "add",
        path: reducerPath + "actions.tsx",
        templateFile: "./container/actions.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: reducerPath + "constants.tsx",
        templateFile: "./container/constants.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: reducerPath + "reducer.tsx",
        templateFile: "./container/reducer.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: reducerPath + "types.tsx",
        templateFile: "./container/types.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../../src/shared/redux/root-reducer.ts",
        templateFile: "../container/modify.import-reducer.ts.hbs",
        pattern: new RegExp(/.*\/\/.*\[IMPORT NEW REDUCERS\].+\n/),
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../../src/shared/redux/root-reducer.ts",
        templateFile: "./container/modify.combine-reducer.ts.hbs",
        pattern: new RegExp(/.*\/\/.*\[COMBINE NEW REDUCERS\].+\n/),
        abortOnFail: true,
      },
    ];

    if (data?.reducer) defaultActions.push([...reducerActions]);

    return defaultActions;
  },
};
