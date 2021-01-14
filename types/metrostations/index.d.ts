// Type definitions for metrostations 4.1
// Project: https://github.com/ungarson/MetroStations#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace stations {
    interface Line {
        id: number;
        color: string;
        intl_name: string;
        lineTransfers: number[];
        local_name: string;
    }

    interface Station {
        id: number;
        geo_lat: string;
        geo_lon: string;
        intl_name: string;
        line: number;
        lineTransfers: number[];
        local_name: string;
        stationTransfers: number[];
    }

    interface MetroStations {
        readonly lines: Line[];
        readonly stations: Station[];
    }
}
declare const stations: {
    Moscow: stations.MetroStations;
    SaintPetersburg: stations.MetroStations;
};

export = stations;
