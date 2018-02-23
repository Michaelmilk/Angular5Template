import { TemplateRef } from "@angular/core";

export class BaseChart{
    constructor(
        public view?: Array<number>,
        //public results?: Array<PieChartData>,
        public scheme?: ColorScheme,
        public customColors?: Array<string>,
        public animations?: boolean,
        public gradient?: boolean,
        public tooltipDisabled?: boolean,
        public tooltipTemplate?: TemplateRef<string>,
        public activeEntries?: Array<object>
    )
    {
        this.view = [700, 400];        
        this.gradient = false;
        //this.results = new Array<PieChartData>();
        this.scheme = new ColorScheme();
        this.customColors = new Array<string>();
        this.activeEntries = new Array<object>();
    }
}

// see details here: https://swimlane.gitbooks.io/ngx-charts/content/charts/advanced-pie-chart.html
export class AdvancedPieChart extends BaseChart {
    constructor(
        public label?: string,
        public results?: Array<SingleChartData>
    )
    {
        super();
        this.results = new Array<SingleChartData>();        
    }
}

export class SingleChartData{
    constructor(
        public name?: string,
        public value?: number
    )
    {}
}

export class MultiChartData{
    constructor(
        public name?: string,
        public series?: Array<SingleChartData>
    )
    {
        this.series = new Array<SingleChartData>();
    }
}

export class ColorScheme{
    constructor(
        public domain?: Array<string>
    )
    {
        this.domain = new Array<string>();
    }
}

export class BarChart extends BaseChart {
    constructor(
        public schemeType?: string,
        public legend?: boolean,
        public legendTitle?: string,
        public xAxis?: boolean,
        public yAxis?: boolean,
        public showGridLines?: boolean,
        public roundDomains?: boolean,
        public showXAxisLabel?: boolean,
        public showYAxisLabel?: boolean,
        public xAxisLabel?: string,
        public yAxisLabel?: string,
        public xAxisTickFormatting?: Function,
        public yAxisTickFormatting?: Function,
        public barPadding?: number,
        public yScaleMax?: number
    )
    {
        super();
        this.xAxis = true;
        this.yAxis = true;
        this.gradient = false;
        this.legend = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
    }
}

export class VerticalBarChart extends BarChart{
    constructor(
        public results?: Array<SingleChartData>
    )
    {
        super();
        this.xAxisLabel = 'Day';
        this.yAxisLabel = 'Count';
        this.results = new Array<SingleChartData>();                
        //this.results = 
    }
}

export class GroupedVerticalBarChart extends BarChart{
    constructor(
        public results?: Array<MultiChartData>        
    )
    {
        super();
        this.xAxisLabel = 'Day';
        this.yAxisLabel = 'Count';
        //this.results = 
    }
}

export class BaseLineChart extends BaseChart {
    constructor(
        public schemeType?: string,
        public legend?: boolean,
        public legendTitle?: string,
        public xAxis?: boolean,
        public yAxis?: boolean,
        public showGridLines?: boolean,
        public roundDomains?: boolean,
        public showXAxisLabel?: boolean,
        public showYAxisLabel?: boolean,
        public xAxisLabel?: string,
        public yAxisLabel?: string,
        public xAxisTickFormatting?: Function,
        public yAxisTickFormatting?: Function,
        public seriesTooltipTemplate?: TemplateRef<any>,
        public xScaleMin?: any,
        public xScaleMax?: any,
        public yScaleMin?: number,
        public yScaleMax?: number,
        public rangeFillOpacity?: number,
        public timeline?: boolean,
        public autoScale?: boolean,
        public curve?: Function,
    )
    {
        super();
        this.xAxis = true;
        this.yAxis = true;
        this.gradient = false;
        this.legend = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
    }
}

export class LineChart extends BaseLineChart{
    constructor(
        public results?: Array<MultiChartData>,
        public referenceLines?: Array<object>,
        public showRefLines?: boolean,
        public showRefLabels?: boolean
    )
    {
        super();
        //this.results = 
    }
}