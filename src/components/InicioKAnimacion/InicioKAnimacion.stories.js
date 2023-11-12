import { InicioKAnimacion } from ".";

export default {
  title: "Components/InicioKAnimacion",
  component: InicioKAnimacion,
  argTypes: {
    property1: {
      options: ["group-7", "group-9", "group-8", "group-6", "group-5"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "group-7",
    className: {},
  },
};
