import { Batatinhafrita } from "./StackRoutes";
import { RootTabParamsList } from "./TabsRoutes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Batatinhafrita {}
    interface RootParamList extends RootTabParamsList {}
  }
}
