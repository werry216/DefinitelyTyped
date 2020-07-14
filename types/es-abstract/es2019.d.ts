import ES2018 = require('./es2018');

interface ES2019 {
    readonly 'Abstract Equality Comparison': typeof import('./2019/AbstractEqualityComparison');
    readonly 'Abstract Relational Comparison': typeof import('./2019/AbstractRelationalComparison');
    readonly 'Strict Equality Comparison': typeof import('./2019/StrictEqualityComparison');
    readonly AddEntriesFromIterable: typeof import('./2019/AddEntriesFromIterable');
    readonly AdvanceStringIndex: typeof import('./2019/AdvanceStringIndex');
    readonly ArrayCreate: typeof import('./2019/ArrayCreate');
    readonly ArraySetLength: typeof import('./2019/ArraySetLength');
    readonly ArraySpeciesCreate: typeof import('./2019/ArraySpeciesCreate');
    readonly Call: typeof import('./2019/Call');
    readonly CanonicalNumericIndexString: typeof import('./2019/CanonicalNumericIndexString');
    readonly CompletePropertyDescriptor: typeof import('./2019/CompletePropertyDescriptor');
    readonly CopyDataProperties: typeof import('./2019/CopyDataProperties');
    readonly CreateDataProperty: typeof import('./2019/CreateDataProperty');
    readonly CreateDataPropertyOrThrow: typeof import('./2019/CreateDataPropertyOrThrow');
    readonly CreateHTML: typeof import('./2019/CreateHTML');
    readonly CreateIterResultObject: typeof import('./2019/CreateIterResultObject');
    readonly CreateListFromArrayLike: typeof import('./2019/CreateListFromArrayLike');
    readonly CreateMethodProperty: typeof import('./2019/CreateMethodProperty');
    readonly DateFromTime: typeof import('./2019/DateFromTime');
    readonly DateString: typeof import('./2019/DateString');
    readonly Day: typeof import('./2019/Day');
    readonly DayFromYear: typeof import('./2019/DayFromYear');
    readonly DaysInYear: typeof import('./2019/DaysInYear');
    readonly DayWithinYear: typeof import('./2019/DayWithinYear');
    readonly DefinePropertyOrThrow: typeof import('./2019/DefinePropertyOrThrow');
    readonly DeletePropertyOrThrow: typeof import('./2019/DeletePropertyOrThrow');
    readonly EnumerableOwnPropertyNames: typeof import('./2019/EnumerableOwnPropertyNames');
    readonly FlattenIntoArray: typeof import('./2019/FlattenIntoArray');
    readonly FromPropertyDescriptor: typeof import('./2019/FromPropertyDescriptor');
    readonly Get: typeof import('./2019/Get');
    readonly GetIterator: typeof import('./2019/GetIterator');
    readonly GetMethod: typeof import('./2019/GetMethod');
    readonly GetOwnPropertyKeys: typeof import('./2019/GetOwnPropertyKeys');
    readonly GetPrototypeFromConstructor: typeof import('./2019/GetPrototypeFromConstructor');
    readonly GetSubstitution: typeof import('./2019/GetSubstitution');
    readonly GetV: typeof import('./2019/GetV');
    readonly HasOwnProperty: typeof import('./2019/HasOwnProperty');
    readonly HasProperty: typeof import('./2019/HasProperty');
    readonly HourFromTime: typeof import('./2019/HourFromTime');
    readonly InLeapYear: typeof import('./2019/InLeapYear');
    readonly InstanceofOperator: typeof import('./2019/InstanceofOperator');
    readonly Invoke: typeof import('./2019/Invoke');
    readonly IsAccessorDescriptor: typeof import('./2019/IsAccessorDescriptor');
    readonly IsArray: typeof import('./2019/IsArray');
    readonly IsCallable: typeof import('./2019/IsCallable');
    readonly IsConcatSpreadable: typeof import('./2019/IsConcatSpreadable');
    readonly IsConstructor: typeof import('./2019/IsConstructor');
    readonly IsDataDescriptor: typeof import('./2019/IsDataDescriptor');
    readonly IsExtensible: typeof import('./2019/IsExtensible');
    readonly IsGenericDescriptor: typeof import('./2019/IsGenericDescriptor');
    readonly IsInteger: typeof import('./2019/IsInteger');
    readonly IsPromise: typeof import('./2019/IsPromise');
    readonly IsPropertyKey: typeof import('./2019/IsPropertyKey');
    readonly IsRegExp: typeof import('./2019/IsRegExp');
    readonly IsStringPrefix: typeof import('./2019/IsStringPrefix');
    readonly IterableToList: typeof import('./2019/IterableToList');
    readonly IteratorClose: typeof import('./2019/IteratorClose');
    readonly IteratorComplete: typeof import('./2019/IteratorComplete');
    readonly IteratorNext: typeof import('./2019/IteratorNext');
    readonly IteratorStep: typeof import('./2019/IteratorStep');
    readonly IteratorValue: typeof import('./2019/IteratorValue');
    readonly MakeDate: typeof import('./2019/MakeDate');
    readonly MakeDay: typeof import('./2019/MakeDay');
    readonly MakeTime: typeof import('./2019/MakeTime');
    readonly MinFromTime: typeof import('./2019/MinFromTime');
    readonly modulo: typeof import('./2019/modulo');
    readonly MonthFromTime: typeof import('./2019/MonthFromTime');
    readonly msFromTime: typeof import('./2019/msFromTime');
    readonly NumberToString: typeof import('./2019/NumberToString');
    readonly ObjectCreate: typeof import('./2019/ObjectCreate');
    readonly OrdinaryDefineOwnProperty: typeof import('./2019/OrdinaryDefineOwnProperty');
    readonly OrdinaryGetOwnProperty: typeof import('./2019/OrdinaryGetOwnProperty');
    readonly OrdinaryGetPrototypeOf: typeof import('./2019/OrdinaryGetPrototypeOf');
    readonly OrdinaryHasInstance: typeof import('./2019/OrdinaryHasInstance');
    readonly OrdinaryHasProperty: typeof import('./2019/OrdinaryHasProperty');
    readonly OrdinarySetPrototypeOf: typeof import('./2019/OrdinarySetPrototypeOf');
    readonly PromiseResolve: typeof import('./2019/PromiseResolve');
    readonly RegExpExec: typeof import('./2019/RegExpExec');
    readonly RequireObjectCoercible: typeof import('./2019/RequireObjectCoercible');
    readonly SameValue: typeof import('./2019/SameValue');
    readonly SameValueNonNumber: typeof import('./2019/SameValueNonNumber');
    readonly SameValueZero: typeof import('./2019/SameValueZero');
    readonly SecFromTime: typeof import('./2019/SecFromTime');
    readonly Set: typeof import('./2019/Set');
    readonly SetFunctionName: typeof import('./2019/SetFunctionName');
    readonly SetIntegrityLevel: typeof import('./2019/SetIntegrityLevel');
    readonly SpeciesConstructor: typeof import('./2019/SpeciesConstructor');
    readonly SymbolDescriptiveString: typeof import('./2019/SymbolDescriptiveString');
    readonly TestIntegrityLevel: typeof import('./2019/TestIntegrityLevel');
    readonly thisBooleanValue: typeof import('./2019/thisBooleanValue');
    readonly thisNumberValue: typeof import('./2019/thisNumberValue');
    readonly thisStringValue: typeof import('./2019/thisStringValue');
    readonly thisSymbolValue: typeof import('./2019/thisSymbolValue');
    readonly thisTimeValue: typeof import('./2019/thisTimeValue');
    readonly TimeClip: typeof import('./2019/TimeClip');
    readonly TimeFromYear: typeof import('./2019/TimeFromYear');
    readonly TimeString: typeof import('./2019/TimeString');
    readonly TimeWithinDay: typeof import('./2019/TimeWithinDay');
    readonly ToBoolean: typeof import('./2019/ToBoolean');
    readonly ToDateString: typeof import('./2019/ToDateString');
    readonly ToIndex: typeof import('./2019/ToIndex');
    readonly ToInt16: typeof import('./2019/ToInt16');
    readonly ToInt32: typeof import('./2019/ToInt32');
    readonly ToInt8: typeof import('./2019/ToInt8');
    readonly ToInteger: typeof import('./2019/ToInteger');
    readonly ToLength: typeof import('./2019/ToLength');
    readonly ToNumber: typeof import('./2019/ToNumber');
    readonly ToObject: typeof import('./2019/ToObject');
    readonly ToPrimitive: typeof import('./2019/ToPrimitive');
    readonly ToPropertyDescriptor: typeof import('./2019/ToPropertyDescriptor');
    readonly ToPropertyKey: typeof import('./2019/ToPropertyKey');
    readonly ToString: typeof import('./2019/ToString');
    readonly ToUint16: typeof import('./2019/ToUint16');
    readonly ToUint32: typeof import('./2019/ToUint32');
    readonly ToUint8: typeof import('./2019/ToUint8');
    readonly ToUint8Clamp: typeof import('./2019/ToUint8Clamp');
    readonly TrimString: typeof import('./2019/TrimString');
    readonly Type: typeof import('./2019/Type');
    readonly ValidateAndApplyPropertyDescriptor: typeof import('./2019/ValidateAndApplyPropertyDescriptor');
    readonly WeekDay: typeof import('./2019/WeekDay');
    readonly YearFromTime: typeof import('./2019/YearFromTime');
}

declare namespace ES2019 {
    // Re-export types from previous versions
    // - ES2015:
    type PropertyKey = ES2018.PropertyKey;

    // - ES5:
    type GenericDescriptor = ES2018.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES2018.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES2018.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES2018.PropertyDescriptor<T>;
}

declare const ES2019: ES2019;
export = ES2019;
