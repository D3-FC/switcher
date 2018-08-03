export declare class Switcher {
    switchers: HTMLElement[];
    switcherDataAttr: string;
    switchableDataAttr: string;
    switchableClassDataAttr: string;
    constructor(switcherDataAttr: string, switchableDataAttr: string, switchableClassDataAttr: string);
    private handleSwitchableClass;
    private clickHandler;
    /**
     * SHOULD BE CALLED ASYNC / AWAIT AFTER CONSTRUCT
     *
     * For example
     * const switcher = Switcher.makeDefault()
     * setTimeout(()=>{
     *  switcher.destroy()
     * }, 0)
     */
    destroy(): void;
    private handleSwitcherClick;
    private addClickListeners;
    camelize(str: string): string;
    static makeDefault(): Switcher;
}
