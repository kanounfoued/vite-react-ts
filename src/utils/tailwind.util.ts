import tailwindConfig from "../../tailwind.config.js";

export class TailwindUtil {
  static getColors() {
    return tailwindConfig.theme.extend.colors;
  }
}
