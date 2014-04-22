/// <reference path="noble.d.ts" />

import noble = require("noble");

function test_startScanning(): void {
    "use strict";
    noble.startScanning();
    noble.startScanning(["0x180d"]);
    noble.startScanning(["0x180d"], true);
}
test_startScanning();

function test_stopScanning(): void {
    "use strict";
    noble.stopScanning();
}
test_stopScanning();

noble.on("stateChange", (state: string): void => {});
noble.on("scanStart", (): void => {});
noble.on("scanStop", (): void => {});
noble.on("discover", (peripheral: noble.Peripheral): void => {
    peripheral.connect((error: string): void => {});
    peripheral.disconnect((): void => {});
});

var peripheral: noble.Peripheral = new noble.Peripheral();
peripheral.uuid = "12ad4e81";
peripheral.advertisement = {
    localName:        "device",
    serviceData:      new Buffer(1),
    txPowerLevel:     1,
    manufacturerData: new Buffer(1),
    serviceUuids:     ["0x180a", "0x180d"]
};
peripheral.connect((error: string): void => {});
peripheral.disconnect((): void => {});
peripheral.discoverServices(["180d"], (error: string, services: noble.Service[]): void => {});
peripheral.discoverAllServicesAndCharacteristics((error: string, services: noble.Service[], characteristics: noble.Characteristic[]): void => {});
peripheral.discoverSomeServicesAndCharacteristics(["180d"], ["2a38"], (error: string, services: noble.Service[], characteristics: noble.Characteristic[]): void => {});
peripheral.readHandle(new Buffer(1), (error: string, data: NodeBuffer): void => {});
peripheral.writeHandle(new Buffer(1), new Buffer(1), true, (error: string): void => {});
peripheral.on("connect", (error: string): void => {});
peripheral.on("disconnect", (error: string): void => {});
peripheral.on("rssiUpdate", (rssi: number): void => {});
peripheral.on("servicesDiscover", (services: noble.Service[]): void => {});

var service: noble.Service = new noble.Service();
service.uuid = "180a";
service.name = "";
service.type = "";
service.includedServiceUuids = ["180d"];
service.discoverIncludedServices(["180d"], (error: string, includedServiceUuids: string[]): void => {});
service.discoverCharacteristics(["2a38"], (error: string, characteristics: noble.Characteristic[]): void => {});
service.on("includedServicesDiscover", (includedServiceUuids: string[]): void => {});
service.on("characteristicsDiscover", (characteristics: noble.Characteristic[]): void => {});

var characteristic: noble.Characteristic = new noble.Characteristic();
characteristic.uuid = "2a37";
characteristic.name = "";
characteristic.type = "";
characteristic.properties = ["read", "notify"];
characteristic.read((error: string, data: NodeBuffer): void => {});
characteristic.write(new Buffer(1), true, (error: string): void => {});
characteristic.broadcast(true, (error: string): void => {});
characteristic.notify(true, (error: string): void => {});
characteristic.discoverDescriptors((error: string, descriptors: noble.Descriptor[]): void => {});
characteristic.on("read", (data: NodeBuffer, isNotification: boolean): void => {});
characteristic.on("write", true, (error: string): void => {});
characteristic.on("broadcast", (state: string): void => {});
characteristic.on("notify", (state: string): void => {});
characteristic.on("descriptorsDiscover", (descriptors: noble.Descriptor[]): void => {});

var descriptor: noble.Descriptor = new noble.Descriptor();
descriptor.uuid = "";
descriptor.name = "";
descriptor.type = "";
descriptor.readValue((error: string, data: NodeBuffer): void => {});
descriptor.writeValue(new Buffer(1), (error: string): void => {});
descriptor.on("valueRead", (error: string, data: NodeBuffer): void => {});
descriptor.on("valueWrite", (error: string): void => {});

// vim expandtab shiftwidth=4
