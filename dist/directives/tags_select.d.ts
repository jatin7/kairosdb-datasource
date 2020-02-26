export declare class TagsSelectCtrl {
    private uiSegmentSrv;
    tagValues: string[];
    selectedValues: string[];
    segments: any[];
    constructor(uiSegmentSrv: any);
    onChange(): void;
    remove(segment: any): void;
    private showPlusButtonIfNeeded;
    private updateSelectedValues;
    private isPlusButton;
}
export declare function TagsSelectDirective(): {
    bindToController: boolean;
    controller: typeof TagsSelectCtrl;
    controllerAs: string;
    restrict: string;
    scope: {
        selectedValues: string;
        tagName: string;
        tagValues: string;
    };
    templateUrl: string;
};
