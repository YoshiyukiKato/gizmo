/// <reference types="bluebird" />
import * as Promise from "bluebird";
import ViewComponent from "./component";
import Filter from "./filter";
export declare type renderFunc = (userAttrs: any) => any;
export default class View {
    readonly components: ViewComponent[];
    readonly filters: Filter[];
    private userAttrs;
    private state;
    /**
     * build component dynamically and use it
     * @param id unique id of a component
     * @param _render render function of a component
     */
    import(id: string, render: renderFunc): void;
    /**
     * add a view component to the list of them
     * @param component view component
     */
    use(component: ViewComponent): void;
    /**
     * Distribute a filter to target components
     * @param filter has component id and validate function
     */
    useFilter(filter: Filter): void;
    /**
     * Call render method of all view components with user attributes
     * @param userAttrs The latest user attributes
     */
    render(userAttrs: any): Promise<any>;
}