// Type definitions for @carbon/pictograms-react 11.9
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/pictograms-react
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

/** 769 pictograms in total */

export interface CarbonPictogramProps
  extends Omit<
    React.SVGProps<React.ReactSVGElement>,
    "ref" | "tabIndex" | "aria-hidden"
  > {
  "aria-hidden"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  height?: number;
  preserveAspectRatio?: string;
  tabIndex?: string;
  title?: string;
  viewBox?: string;
  width?: number;
  xmlns?: string;
}

export type CarbonPictogramType = React.ForwardRefExoticComponent<
  CarbonPictogramProps & React.RefAttributes<SVGSVGElement>
>;

export const AcceleratedComputing: CarbonPictogramType;
export const ActiveServer: CarbonPictogramType;
export const AddDevice: CarbonPictogramType;
export const AddDocument: CarbonPictogramType;
export const AdvancedFraudProtection: CarbonPictogramType;
export const AdvancedThreats: CarbonPictogramType;
export const Advocate: CarbonPictogramType;
export const Agriculture: CarbonPictogramType;
export const AiEthics: CarbonPictogramType;
export const AiTrust: CarbonPictogramType;
export const AiPrivacy: CarbonPictogramType;
export const AiTransparency: CarbonPictogramType;
export const AiExplainability: CarbonPictogramType;
export const AiRobustness: CarbonPictogramType;
export const AirConditioner: CarbonPictogramType;
export const Airplane: CarbonPictogramType;
export const Alarm: CarbonPictogramType;
export const AlchemyDataNews: CarbonPictogramType;
export const AlchemyLanguage: CarbonPictogramType;
export const AlchemyVision: CarbonPictogramType;
export const Americas: CarbonPictogramType;
export const AmsterdamCanal: CarbonPictogramType;
export const AmsterdamFarm: CarbonPictogramType;
export const AmsterdamWindmill: CarbonPictogramType;
export const Analyze: CarbonPictogramType;
export const AnalyzesData: CarbonPictogramType;
export const AnonymousUsers: CarbonPictogramType;
export const Apartment: CarbonPictogramType;
export const Api: CarbonPictogramType;
export const AppDeveloper: CarbonPictogramType;
export const Apple: CarbonPictogramType;
export const Application: CarbonPictogramType;
export const ApplicationSecurity: CarbonPictogramType;
export const Archive: CarbonPictogramType;
export const ArgentinaObelisk: CarbonPictogramType;
export const ArtTools_01: CarbonPictogramType;
export const AsiaAustralia: CarbonPictogramType;
export const Assets: CarbonPictogramType;
export const Atlanta: CarbonPictogramType;
export const AugmentedReality: CarbonPictogramType;
export const Austin: CarbonPictogramType;
export const AutomateModularManagement: CarbonPictogramType;
export const AutomationDecision: CarbonPictogramType;
export const Automobile: CarbonPictogramType;
export const BabyBottle: CarbonPictogramType;
export const Backpack: CarbonPictogramType;
export const Badge: CarbonPictogramType;
export const Bag: CarbonPictogramType;
export const Bangalore: CarbonPictogramType;
export const Barcelona: CarbonPictogramType;
export const Bee: CarbonPictogramType;
export const BeijingMunicipal: CarbonPictogramType;
export const BeijingTower: CarbonPictogramType;
export const BerlinBrandenburgGate: CarbonPictogramType;
export const BerlinCathedral: CarbonPictogramType;
export const BerlinTower: CarbonPictogramType;
export const Bicycle: CarbonPictogramType;
export const BirthdayCake: CarbonPictogramType;
export const Blender: CarbonPictogramType;
export const Blockchain: CarbonPictogramType;
export const Bluepages: CarbonPictogramType;
export const BostonZakimBridge: CarbonPictogramType;
export const BoxPlot: CarbonPictogramType;
export const Broom: CarbonPictogramType;
export const Budapest: CarbonPictogramType;
export const BugVirusMalware: CarbonPictogramType;
export const Build: CarbonPictogramType;
export const BuildLeadershipAndCulture: CarbonPictogramType;
export const Building: CarbonPictogramType;
export const Bulldozer: CarbonPictogramType;
export const Bus: CarbonPictogramType;
export const BusinessContinuity: CarbonPictogramType;
export const CPlusPlusLanguage: CarbonPictogramType;
export const CLanguage: CarbonPictogramType;
export const Cafe: CarbonPictogramType;
export const CairoGizaPlateau: CarbonPictogramType;
export const Calendar: CarbonPictogramType;
export const CalendarDate: CarbonPictogramType;
export const CalendarEvent: CarbonPictogramType;
export const Camera: CarbonPictogramType;
export const CanadaMapleLeaf: CarbonPictogramType;
export const Capitol: CarbonPictogramType;
export const Care: CarbonPictogramType;
export const CargoCrane: CarbonPictogramType;
export const CargoShip: CarbonPictogramType;
export const Cell: CarbonPictogramType;
export const Chart_3D: CarbonPictogramType;
export const ChartArea: CarbonPictogramType;
export const ChartBar: CarbonPictogramType;
export const ChartBubble: CarbonPictogramType;
export const ChartBubbleLine: CarbonPictogramType;
export const ChartCandlestick: CarbonPictogramType;
export const ChartCustom: CarbonPictogramType;
export const ChartErrorBar: CarbonPictogramType;
export const ChartEvaluation: CarbonPictogramType;
export const ChartHighLow: CarbonPictogramType;
export const ChartHistogram: CarbonPictogramType;
export const ChartLine: CarbonPictogramType;
export const ChartMultiLine: CarbonPictogramType;
export const ChartMultiType: CarbonPictogramType;
export const ChartParallel: CarbonPictogramType;
export const ChartPie: CarbonPictogramType;
export const ChartRadar: CarbonPictogramType;
export const ChartRiver: CarbonPictogramType;
export const ChartScatterplot: CarbonPictogramType;
export const ChartStepper: CarbonPictogramType;
export const ChartSunburst: CarbonPictogramType;
export const ChartTSne: CarbonPictogramType;
export const Cheese: CarbonPictogramType;
export const Cherries: CarbonPictogramType;
export const Chicago: CarbonPictogramType;
export const ChileEasterIsland: CarbonPictogramType;
export const ChileHandOfTheDesert: CarbonPictogramType;
export const ChipCircuit: CarbonPictogramType;
export const ChipCredit: CarbonPictogramType;
export const ChipDebit: CarbonPictogramType;
export const CirclePacking: CarbonPictogramType;
export const ClientFinancing_01: CarbonPictogramType;
export const ClientFinancing_02: CarbonPictogramType;
export const ClothesRack_01: CarbonPictogramType;
export const ClothesRack_02: CarbonPictogramType;
export const CloudAnalytics: CarbonPictogramType;
export const CloudAssets: CarbonPictogramType;
export const CloudBuilderProfessionalServices: CarbonPictogramType;
export const CloudComputing: CarbonPictogramType;
export const CloudDataServices: CarbonPictogramType;
export const CloudDownload: CarbonPictogramType;
export const CloudEcosystem: CarbonPictogramType;
export const CloudGuidelines: CarbonPictogramType;
export const CloudManagedServices: CarbonPictogramType;
export const CloudOracle: CarbonPictogramType;
export const CloudPartners: CarbonPictogramType;
export const CloudPlanning: CarbonPictogramType;
export const CloudSap: CarbonPictogramType;
export const CloudServices: CarbonPictogramType;
export const CloudServicesPricing: CarbonPictogramType;
export const CloudStorage: CarbonPictogramType;
export const CloudStrategy: CarbonPictogramType;
export const CloudTutorials: CarbonPictogramType;
export const CloudUpload: CarbonPictogramType;
export const CloudVmware: CarbonPictogramType;
export const CloudPakFamily: CarbonPictogramType;
export const CloudPakForApplications: CarbonPictogramType;
export const CloudPakForData: CarbonPictogramType;
export const CloudPakForIntegration: CarbonPictogramType;
export const CloudPakForMulticloudManagement: CarbonPictogramType;
export const CloudPakForNetworkAutomation: CarbonPictogramType;
export const CloudPakForSecurity: CarbonPictogramType;
export const CloudPakSystem: CarbonPictogramType;
export const Cloudy: CarbonPictogramType;
export const CloudyDewy: CarbonPictogramType;
export const CloudyHazy: CarbonPictogramType;
export const CloudyHumid: CarbonPictogramType;
export const CloudyPartial: CarbonPictogramType;
export const CloudyWindy: CarbonPictogramType;
export const CoatHanger: CarbonPictogramType;
export const CobolLanguage: CarbonPictogramType;
export const CodeSyntax: CarbonPictogramType;
export const CognosAnalytics: CarbonPictogramType;
export const Collaboration: CarbonPictogramType;
export const College: CarbonPictogramType;
export const ColorContrast: CarbonPictogramType;
export const ColombiaCathedralOfLasLajas: CarbonPictogramType;
export const CommercialFinancing_01: CarbonPictogramType;
export const CommercialFinancing_02: CarbonPictogramType;
export const CompostBin: CarbonPictogramType;
export const ConceptExpansion: CarbonPictogramType;
export const ConceptInsights: CarbonPictogramType;
export const ConditionBuilder: CarbonPictogramType;
export const Connect: CarbonPictogramType;
export const ConnectedEcosystem: CarbonPictogramType;
export const ConnectedNodesToTheCloud: CarbonPictogramType;
export const Console: CarbonPictogramType;
export const ConsoleWireless: CarbonPictogramType;
export const Construct: CarbonPictogramType;
export const ConsumerEngagementFoodJourney: CarbonPictogramType;
export const ContainersAndCloudNative: CarbonPictogramType;
export const ContentDesign: CarbonPictogramType;
export const ContinuousSecurity: CarbonPictogramType;
export const Contract: CarbonPictogramType;
export const Conversation: CarbonPictogramType;
export const CopenhagenPlanetarium: CarbonPictogramType;
export const CopenhagenSnekkja: CarbonPictogramType;
export const Coronavirus: CarbonPictogramType;
export const CreditCard: CarbonPictogramType;
export const Crop: CarbonPictogramType;
export const Cupcake: CarbonPictogramType;
export const CustomerService: CarbonPictogramType;
export const Dashboard: CarbonPictogramType;
export const DataApis: CarbonPictogramType;
export const DataBackup: CarbonPictogramType;
export const DataInsights: CarbonPictogramType;
export const DataPrivacy: CarbonPictogramType;
export const DataProcessing: CarbonPictogramType;
export const DataSecurity: CarbonPictogramType;
export const DataSet: CarbonPictogramType;
export const DataStorage: CarbonPictogramType;
export const Delete: CarbonPictogramType;
export const DeliverInsights: CarbonPictogramType;
export const DeliveryTruck: CarbonPictogramType;
export const DesignAndDevelopment_01: CarbonPictogramType;
export const DesignAndDevelopment_02: CarbonPictogramType;
export const DesignThinkingTeam: CarbonPictogramType;
export const DesignLeadership: CarbonPictogramType;
export const DesignResearch: CarbonPictogramType;
export const Desktop: CarbonPictogramType;
export const DetectAndStopAdvancingThreats: CarbonPictogramType;
export const DeveloperZOs: CarbonPictogramType;
export const DevicePairing: CarbonPictogramType;
export const Devops: CarbonPictogramType;
export const Dialogue: CarbonPictogramType;
export const Digital: CarbonPictogramType;
export const DigitalId: CarbonPictogramType;
export const DigitalTrust: CarbonPictogramType;
export const Dining: CarbonPictogramType;
export const DistributionLedger: CarbonPictogramType;
export const Dna: CarbonPictogramType;
export const DoNot: CarbonPictogramType;
export const DoNot_02: CarbonPictogramType;
export const Docker: CarbonPictogramType;
export const Doctor: CarbonPictogramType;
export const DoctorPatient: CarbonPictogramType;
export const DocumentConversion: CarbonPictogramType;
export const DocumentSecurity: CarbonPictogramType;
export const DoorHandle: CarbonPictogramType;
export const Download_01: CarbonPictogramType;
export const Download_02: CarbonPictogramType;
export const Dropper: CarbonPictogramType;
export const DubaiPalmIslands: CarbonPictogramType;
export const DubaiSkyscraper: CarbonPictogramType;
export const DublinBrewery: CarbonPictogramType;
export const DublinCastle: CarbonPictogramType;
export const DuplicateFile: CarbonPictogramType;
export const Earth: CarbonPictogramType;
export const EcuadorQuito: CarbonPictogramType;
export const Education: CarbonPictogramType;
export const Electric: CarbonPictogramType;
export const ElectricCar: CarbonPictogramType;
export const ElectricCharge: CarbonPictogramType;
export const Elevator: CarbonPictogramType;
export const Embed: CarbonPictogramType;
export const EmergencyExit: CarbonPictogramType;
export const EmployeeInsights: CarbonPictogramType;
export const EndpointProtection: CarbonPictogramType;
export const Engine: CarbonPictogramType;
export const EnterpriseDesignThinking_01: CarbonPictogramType;
export const EnterpriseDesignThinking_02: CarbonPictogramType;
export const Envelope: CarbonPictogramType;
export const ErlenmeyerFlask: CarbonPictogramType;
export const EscalatorDown: CarbonPictogramType;
export const EscalatorUp: CarbonPictogramType;
export const EuropeAfrica: CarbonPictogramType;
export const ExpandHorz: CarbonPictogramType;
export const ExpandUser: CarbonPictogramType;
export const ExpandVert: CarbonPictogramType;
export const Export_01: CarbonPictogramType;
export const Export_02: CarbonPictogramType;
export const Eye: CarbonPictogramType;
export const EyewashStation: CarbonPictogramType;
export const FaceDissatisfied: CarbonPictogramType;
export const FaceNeutral: CarbonPictogramType;
export const FaceSatisfied: CarbonPictogramType;
export const FaceVeryDissatisfied: CarbonPictogramType;
export const FaceVerySatisfied: CarbonPictogramType;
export const Factory: CarbonPictogramType;
export const Fairness: CarbonPictogramType;
export const Farm_01: CarbonPictogramType;
export const Farm_02: CarbonPictogramType;
export const Farmer_01: CarbonPictogramType;
export const Farmer_02: CarbonPictogramType;
export const Faucet: CarbonPictogramType;
export const Feedback_01: CarbonPictogramType;
export const Feedback_02: CarbonPictogramType;
export const FileBackup: CarbonPictogramType;
export const FileTransfer: CarbonPictogramType;
export const FilterVariable: CarbonPictogramType;
export const FinanceStrategy: CarbonPictogramType;
export const FinancialConsultant: CarbonPictogramType;
export const FinancialGain: CarbonPictogramType;
export const FinancialNetworks: CarbonPictogramType;
export const FinancialNews: CarbonPictogramType;
export const FireAlarm: CarbonPictogramType;
export const FireExtinguisher: CarbonPictogramType;
export const Firewall: CarbonPictogramType;
export const FirstAid: CarbonPictogramType;
export const FlashStorage: CarbonPictogramType;
export const FlashingContent: CarbonPictogramType;
export const FlowChart: CarbonPictogramType;
export const FlowChartDetail: CarbonPictogramType;
export const Flower_01: CarbonPictogramType;
export const Flower_02: CarbonPictogramType;
export const Fog: CarbonPictogramType;
export const Folder: CarbonPictogramType;
export const Forklift: CarbonPictogramType;
export const Fragile: CarbonPictogramType;
export const FreeTrial: CarbonPictogramType;
export const Fuel: CarbonPictogramType;
export const Gear: CarbonPictogramType;
export const GetAheadOfRiskAndCompliance: CarbonPictogramType;
export const Gift: CarbonPictogramType;
export const GlobalAnalytics: CarbonPictogramType;
export const GlobalAssetsAndRecovery_01: CarbonPictogramType;
export const GlobalAssetsAndRecovery_02: CarbonPictogramType;
export const GlobalBusinessServices: CarbonPictogramType;
export const GlobalCurrency: CarbonPictogramType;
export const GlobalExchange: CarbonPictogramType;
export const GlobalFinanceEuro: CarbonPictogramType;
export const GlobalFinanceNetwork: CarbonPictogramType;
export const GlobalFinanceSterling: CarbonPictogramType;
export const GlobalMarkets: CarbonPictogramType;
export const GlobalMarketsBar: CarbonPictogramType;
export const GlobalNetwork: CarbonPictogramType;
export const GlobalPartner: CarbonPictogramType;
export const GlobalSecurity: CarbonPictogramType;
export const GlobalStrategy: CarbonPictogramType;
export const GlobalTechnologyServices: CarbonPictogramType;
export const Globe: CarbonPictogramType;
export const GlobeLocations: CarbonPictogramType;
export const GoLanguage: CarbonPictogramType;
export const Goals: CarbonPictogramType;
export const GovernUsersAndIdentities: CarbonPictogramType;
export const Group: CarbonPictogramType;
export const Growth: CarbonPictogramType;
export const Hail: CarbonPictogramType;
export const HailHeavy: CarbonPictogramType;
export const HailMixed: CarbonPictogramType;
export const HamburgPhilharmone: CarbonPictogramType;
export const Handicap: CarbonPictogramType;
export const HandicapActive: CarbonPictogramType;
export const HardDrive: CarbonPictogramType;
export const HardDriveNetwork: CarbonPictogramType;
export const HardIceCream: CarbonPictogramType;
export const Hazy: CarbonPictogramType;
export const Headphones: CarbonPictogramType;
export const Heart: CarbonPictogramType;
export const HeartHealth: CarbonPictogramType;
export const HeatMap_01: CarbonPictogramType;
export const HeatMap_02: CarbonPictogramType;
export const HighFive: CarbonPictogramType;
export const HighRiskUsers: CarbonPictogramType;
export const Hills: CarbonPictogramType;
export const HomeFront: CarbonPictogramType;
export const HomeGarage: CarbonPictogramType;
export const HomeProfile: CarbonPictogramType;
export const HongKong: CarbonPictogramType;
export const HongKongCityscape: CarbonPictogramType;
export const Hospital: CarbonPictogramType;
export const Hpi: CarbonPictogramType;
export const Humid: CarbonPictogramType;
export const Hurricane: CarbonPictogramType;
export const HybridCloud: CarbonPictogramType;
export const HybridCloud_02: CarbonPictogramType;
export const HybridCloudServices: CarbonPictogramType;
export const IbmAutomationPlatform: CarbonPictogramType;
export const IbmCloud: CarbonPictogramType;
export const IbmIx: CarbonPictogramType;
export const IbmZ: CarbonPictogramType;
export const IbmZAndLinuxoneMultiFrame: CarbonPictogramType;
export const IbmZAndLinuxoneSingleFrame: CarbonPictogramType;
export const IbmZPartition: CarbonPictogramType;
export const IdBadge: CarbonPictogramType;
export const Idea: CarbonPictogramType;
export const Ideate: CarbonPictogramType;
export const IdentityTrustAssessment: CarbonPictogramType;
export const IndiaSouthAsia: CarbonPictogramType;
export const InfrastructureSecurity: CarbonPictogramType;
export const Innovate: CarbonPictogramType;
export const Insights: CarbonPictogramType;
export const InspectData: CarbonPictogramType;
export const Integration: CarbonPictogramType;
export const Intelligence: CarbonPictogramType;
export const Intercom: CarbonPictogramType;
export const Invoice: CarbonPictogramType;
export const IotMunich: CarbonPictogramType;
export const ItInfrastructureSoftware: CarbonPictogramType;
export const Java: CarbonPictogramType;
export const Javascript: CarbonPictogramType;
export const Justice: CarbonPictogramType;
export const KeepDry: CarbonPictogramType;
export const KeyUsers: CarbonPictogramType;
export const Keyboard: CarbonPictogramType;
export const KnowsDarkData: CarbonPictogramType;
export const KualaLumpur: CarbonPictogramType;
export const Language_01: CarbonPictogramType;
export const Language_02: CarbonPictogramType;
export const Language_03: CarbonPictogramType;
export const Language_04: CarbonPictogramType;
export const Language_05: CarbonPictogramType;
export const LanguageTranslation: CarbonPictogramType;
export const Launch: CarbonPictogramType;
export const Lightning: CarbonPictogramType;
export const ListBullet: CarbonPictogramType;
export const ListCheckbox: CarbonPictogramType;
export const Location: CarbonPictogramType;
export const Lock_01: CarbonPictogramType;
export const Lock_02: CarbonPictogramType;
export const LockedNetwork_01: CarbonPictogramType;
export const LockedNetwork_02: CarbonPictogramType;
export const London: CarbonPictogramType;
export const LondonBigBen: CarbonPictogramType;
export const Love: CarbonPictogramType;
export const Luggage: CarbonPictogramType;
export const Lungs: CarbonPictogramType;
export const MachineLearning_01: CarbonPictogramType;
export const MachineLearning_02: CarbonPictogramType;
export const MachineLearning_03: CarbonPictogramType;
export const MachineLearning_04: CarbonPictogramType;
export const MachineLearning_05: CarbonPictogramType;
export const MachineLearning_06: CarbonPictogramType;
export const MadridCathedral: CarbonPictogramType;
export const MadridSkyscrapers: CarbonPictogramType;
export const MadridStatue: CarbonPictogramType;
export const Magnify: CarbonPictogramType;
export const MailVerse: CarbonPictogramType;
export const ManagingContractualFlow: CarbonPictogramType;
export const ManagingItems: CarbonPictogramType;
export const Marketplace: CarbonPictogramType;
export const Mas: CarbonPictogramType;
export const MasterThreatHunting: CarbonPictogramType;
export const MathCurve: CarbonPictogramType;
export const Maximize: CarbonPictogramType;
export const Medical: CarbonPictogramType;
export const MedicalCharts: CarbonPictogramType;
export const MedicalStaff: CarbonPictogramType;
export const Melbourne: CarbonPictogramType;
export const Meter: CarbonPictogramType;
export const MexicoCityAngelOfIndependence: CarbonPictogramType;
export const MexicoCityMuseoSoumaya: CarbonPictogramType;
export const Microorganisms: CarbonPictogramType;
export const Microphone: CarbonPictogramType;
export const Microscope: CarbonPictogramType;
export const MilanDuomoDiMilano: CarbonPictogramType;
export const MilanSkyscrapers: CarbonPictogramType;
export const Minimize: CarbonPictogramType;
export const MobileAdd: CarbonPictogramType;
export const MobileChat: CarbonPictogramType;
export const MobileDevices: CarbonPictogramType;
export const MobilePhone: CarbonPictogramType;
export const MonitoredItemOnConveyor: CarbonPictogramType;
export const MortarAndPestle: CarbonPictogramType;
export const Moscow: CarbonPictogramType;
export const MovementInOverlappingNetworks: CarbonPictogramType;
export const MovementOfGoods_01: CarbonPictogramType;
export const MovementOfGoods_02: CarbonPictogramType;
export const MovementOfGoods_03: CarbonPictogramType;
export const MovementOfItems: CarbonPictogramType;
export const Mqa: CarbonPictogramType;
export const Mri: CarbonPictogramType;
export const MriPatient: CarbonPictogramType;
export const Multitask: CarbonPictogramType;
export const Munich: CarbonPictogramType;
export const NaturalLanguageClassifier: CarbonPictogramType;
export const NaturalLanguageUnderstanding: CarbonPictogramType;
export const Network: CarbonPictogramType;
export const NetworkProtection: CarbonPictogramType;
export const NetworkServices: CarbonPictogramType;
export const Networking_01: CarbonPictogramType;
export const Networking_02: CarbonPictogramType;
export const Networking_03: CarbonPictogramType;
export const Networking_04: CarbonPictogramType;
export const Networking_05: CarbonPictogramType;
export const Networking_06: CarbonPictogramType;
export const Nice: CarbonPictogramType;
export const NightClear: CarbonPictogramType;
export const NoSmoking: CarbonPictogramType;
export const NycBrooklyn: CarbonPictogramType;
export const NycChryslerBuilding: CarbonPictogramType;
export const NycManhattan_01: CarbonPictogramType;
export const NycManhattan_02: CarbonPictogramType;
export const NycStatueOfLiberty: CarbonPictogramType;
export const NycWorldTradeCenter: CarbonPictogramType;
export const Office: CarbonPictogramType;
export const OilPump: CarbonPictogramType;
export const OilRig: CarbonPictogramType;
export const Okinawa: CarbonPictogramType;
export const OptimizeCashFlow_01: CarbonPictogramType;
export const OptimizeCashFlow_02: CarbonPictogramType;
export const Organization: CarbonPictogramType;
export const Overcast: CarbonPictogramType;
export const Overview: CarbonPictogramType;
export const PaperClip: CarbonPictogramType;
export const ParisArcDeTriomphe: CarbonPictogramType;
export const ParisLouvre: CarbonPictogramType;
export const ParisNotreDame: CarbonPictogramType;
export const ParisPompidouCenter: CarbonPictogramType;
export const Parliament: CarbonPictogramType;
export const PartnerRelationship: CarbonPictogramType;
export const Path: CarbonPictogramType;
export const Pattern: CarbonPictogramType;
export const Perfume: CarbonPictogramType;
export const Person_01: CarbonPictogramType;
export const Person_02: CarbonPictogramType;
export const Person_03: CarbonPictogramType;
export const Person_04: CarbonPictogramType;
export const Person_05: CarbonPictogramType;
export const Person_06: CarbonPictogramType;
export const Person_07: CarbonPictogramType;
export const Person_08: CarbonPictogramType;
export const Person_09: CarbonPictogramType;
export const PersonalityInsights: CarbonPictogramType;
export const PeruMachuPicchu: CarbonPictogramType;
export const PetriCulture: CarbonPictogramType;
export const PillBottle_01: CarbonPictogramType;
export const PhpLanguage: CarbonPictogramType;
export const Pills: CarbonPictogramType;
export const PlanningAnalytics: CarbonPictogramType;
export const PlayerFlow: CarbonPictogramType;
export const PliLanguage: CarbonPictogramType;
export const Podcast: CarbonPictogramType;
export const Police: CarbonPictogramType;
export const PopulationDiagram: CarbonPictogramType;
export const Power: CarbonPictogramType;
export const PragueCharlesBridgeTower: CarbonPictogramType;
export const PragueDancingHouse_01: CarbonPictogramType;
export const PragueDancingHouse_02: CarbonPictogramType;
export const Pregnant: CarbonPictogramType;
export const Prescription: CarbonPictogramType;
export const Presentation: CarbonPictogramType;
export const Presenter: CarbonPictogramType;
export const Price: CarbonPictogramType;
export const Printer: CarbonPictogramType;
export const PrivateNetwork_01: CarbonPictogramType;
export const PrivateNetwork_02: CarbonPictogramType;
export const PrivateNetwork_03: CarbonPictogramType;
export const PrivateNetwork_04: CarbonPictogramType;
export const Process: CarbonPictogramType;
export const ProfessionalMarketplace: CarbonPictogramType;
export const Progress: CarbonPictogramType;
export const ProtectCriticalAssets: CarbonPictogramType;
export const Puzzle: CarbonPictogramType;
export const QQPlot: CarbonPictogramType;
export const QrCode: CarbonPictogramType;
export const Question: CarbonPictogramType;
export const QuestionAndAnswer: CarbonPictogramType;
export const RLanguage: CarbonPictogramType;
export const Racetrack: CarbonPictogramType;
export const Rainy: CarbonPictogramType;
export const RainyHeavy: CarbonPictogramType;
export const RaleighNc: CarbonPictogramType;
export const RandomSamples: CarbonPictogramType;
export const Rank: CarbonPictogramType;
export const Receipt: CarbonPictogramType;
export const Recycle: CarbonPictogramType;
export const RecycleBin: CarbonPictogramType;
export const Refinery: CarbonPictogramType;
export const Refresh: CarbonPictogramType;
export const RelationshipDiagram: CarbonPictogramType;
export const RelationshipExtraction: CarbonPictogramType;
export const Renew: CarbonPictogramType;
export const RenewTeam: CarbonPictogramType;
export const Repeat: CarbonPictogramType;
export const Report: CarbonPictogramType;
export const Research: CarbonPictogramType;
export const Reset: CarbonPictogramType;
export const ResetHybridCloud: CarbonPictogramType;
export const ResetSettings: CarbonPictogramType;
export const RetrieveAndRank: CarbonPictogramType;
export const RichTextFormat: CarbonPictogramType;
export const RioDeJaneiro: CarbonPictogramType;
export const Robot: CarbonPictogramType;
export const Robotics: CarbonPictogramType;
export const RockOn: CarbonPictogramType;
export const Rome: CarbonPictogramType;
export const RotateDevice: CarbonPictogramType;
export const SaasEnablement: CarbonPictogramType;
export const SalesConnect: CarbonPictogramType;
export const SampleFile: CarbonPictogramType;
export const SanFrancisco: CarbonPictogramType;
export const SanFranciscoFog: CarbonPictogramType;
export const SaoPaulo: CarbonPictogramType;
export const SapHana: CarbonPictogramType;
export const Satellite: CarbonPictogramType;
export const SatelliteDish: CarbonPictogramType;
export const Scale: CarbonPictogramType;
export const ScatterMatrix: CarbonPictogramType;
export const Seattle: CarbonPictogramType;
export const SecureData: CarbonPictogramType;
export const SecureHybridCloud: CarbonPictogramType;
export const SecureProfile: CarbonPictogramType;
export const SecureSearch: CarbonPictogramType;
export const Security: CarbonPictogramType;
export const SecurityAsAService: CarbonPictogramType;
export const SecurityHygiene: CarbonPictogramType;
export const SecurityIntelligence: CarbonPictogramType;
export const SecurityShield: CarbonPictogramType;
export const SelectProduct: CarbonPictogramType;
export const SelectRange: CarbonPictogramType;
export const ServerOperatingSystems: CarbonPictogramType;
export const ServerRack: CarbonPictogramType;
export const Servers: CarbonPictogramType;
export const Shirt: CarbonPictogramType;
export const Shop: CarbonPictogramType;
export const ShoppingCart: CarbonPictogramType;
export const Shower: CarbonPictogramType;
export const Singapore: CarbonPictogramType;
export const SingleSignOn: CarbonPictogramType;
export const Slack: CarbonPictogramType;
export const Slider: CarbonPictogramType;
export const Sneaker: CarbonPictogramType;
export const Snow: CarbonPictogramType;
export const SocialWork_01: CarbonPictogramType;
export const SocialWork_02: CarbonPictogramType;
export const Socks: CarbonPictogramType;
export const SoftIceCream: CarbonPictogramType;
export const SoftlayerEnablement: CarbonPictogramType;
export const SolarField: CarbonPictogramType;
export const SolarPanel: CarbonPictogramType;
export const Solve: CarbonPictogramType;
export const Spaceship: CarbonPictogramType;
export const Speech: CarbonPictogramType;
export const SpeechToText: CarbonPictogramType;
export const Speedometer: CarbonPictogramType;
export const Sports: CarbonPictogramType;
export const Sprout: CarbonPictogramType;
export const StackLimitation: CarbonPictogramType;
export const Stairs: CarbonPictogramType;
export const StairsDown: CarbonPictogramType;
export const StairsPlanView: CarbonPictogramType;
export const StairsUp: CarbonPictogramType;
export const StationaryBicycle: CarbonPictogramType;
export const Steel: CarbonPictogramType;
export const SteeringWheel: CarbonPictogramType;
export const StemLeafPlot: CarbonPictogramType;
export const Stethoscope: CarbonPictogramType;
export const Stockholm: CarbonPictogramType;
export const StorageAreaNetworks: CarbonPictogramType;
export const StorageProduct: CarbonPictogramType;
export const Strategy: CarbonPictogramType;
export const StrategyAndRisk: CarbonPictogramType;
export const StrategyDirect: CarbonPictogramType;
export const StrategyMove: CarbonPictogramType;
export const StrategyPlay: CarbonPictogramType;
export const Streamline: CarbonPictogramType;
export const Summit: CarbonPictogramType;
export const Sunny: CarbonPictogramType;
export const SunnyHazy: CarbonPictogramType;
export const SupplyChainOptimization_01: CarbonPictogramType;
export const SupplyChainOptimization_02: CarbonPictogramType;
export const SupportServices: CarbonPictogramType;
export const SwipeLeft: CarbonPictogramType;
export const SwipeRight: CarbonPictogramType;
export const SystemsDevopsAnalyze: CarbonPictogramType;
export const SystemsDevopsBuild: CarbonPictogramType;
export const SystemsDevopsCicdPipeline: CarbonPictogramType;
export const SystemsDevopsCode: CarbonPictogramType;
export const SystemsDevopsDeploy: CarbonPictogramType;
export const SystemsDevopsMonitor: CarbonPictogramType;
export const SystemsDevopsPlan: CarbonPictogramType;
export const SystemsDevopsProvision: CarbonPictogramType;
export const SystemsDevopsRelease: CarbonPictogramType;
export const SystemsDevopsTest: CarbonPictogramType;
export const TShirt: CarbonPictogramType;
export const TabletDevice: CarbonPictogramType;
export const TabletDeviceCheck: CarbonPictogramType;
export const Tags: CarbonPictogramType;
export const TaipeiBubbleTea: CarbonPictogramType;
export const TapeStorage: CarbonPictogramType;
export const Target: CarbonPictogramType;
export const TargetArea: CarbonPictogramType;
export const TeamAlignment: CarbonPictogramType;
export const Teammates: CarbonPictogramType;
export const TelAviv: CarbonPictogramType;
export const Telecom: CarbonPictogramType;
export const Telemedicine: CarbonPictogramType;
export const TelemedicineMobile: CarbonPictogramType;
export const Telephone: CarbonPictogramType;
export const Television: CarbonPictogramType;
export const TemperatureHigh: CarbonPictogramType;
export const TemperatureLow: CarbonPictogramType;
export const TemporaryBadge: CarbonPictogramType;
export const Tennis: CarbonPictogramType;
export const TestTubes: CarbonPictogramType;
export const TextToSpeech: CarbonPictogramType;
export const TextEquivalent: CarbonPictogramType;
export const TextInput: CarbonPictogramType;
export const TextLayout: CarbonPictogramType;
export const ThisSideUp: CarbonPictogramType;
export const ThreatManagement: CarbonPictogramType;
export const Time: CarbonPictogramType;
export const TimeLapse: CarbonPictogramType;
export const TimePlot: CarbonPictogramType;
export const Toggle: CarbonPictogramType;
export const TokyoCherryBlossom: CarbonPictogramType;
export const TokyoGates: CarbonPictogramType;
export const TokyoTemple: CarbonPictogramType;
export const TokyoVolcano: CarbonPictogramType;
export const ToneAnalyzer: CarbonPictogramType;
export const ToolOverload: CarbonPictogramType;
export const Tools: CarbonPictogramType;
export const Tornado: CarbonPictogramType;
export const Toronto: CarbonPictogramType;
export const Touch: CarbonPictogramType;
export const TouchGesture: CarbonPictogramType;
export const TouchId: CarbonPictogramType;
export const TouchScreen: CarbonPictogramType;
export const TouchSwipe: CarbonPictogramType;
export const Tractor: CarbonPictogramType;
export const TradeoffAnalytics: CarbonPictogramType;
export const Train: CarbonPictogramType;
export const TransactionalBlockchain: CarbonPictogramType;
export const TransactionalTrust: CarbonPictogramType;
export const Transform_01: CarbonPictogramType;
export const Transform_02: CarbonPictogramType;
export const Transparency_01: CarbonPictogramType;
export const Transparency_02: CarbonPictogramType;
export const Trash: CarbonPictogramType;
export const Tree: CarbonPictogramType;
export const TreeDiagram: CarbonPictogramType;
export const TreeMap: CarbonPictogramType;
export const Trousers: CarbonPictogramType;
export const Trust: CarbonPictogramType;
export const TrustedUser: CarbonPictogramType;
export const TwoPersonLift: CarbonPictogramType;
export const UnauthorizedUserAccess: CarbonPictogramType;
export const UnderUtilizedSecurity: CarbonPictogramType;
export const UnifyEndpointManagement: CarbonPictogramType;
export const University: CarbonPictogramType;
export const Unlock_01: CarbonPictogramType;
export const Unlock_02: CarbonPictogramType;
export const UruguayPalacioSalvo: CarbonPictogramType;
export const Upload_01: CarbonPictogramType;
export const Upload_02: CarbonPictogramType;
export const User: CarbonPictogramType;
export const UserAnalytics: CarbonPictogramType;
export const UserExperienceDesign: CarbonPictogramType;
export const UserInsights: CarbonPictogramType;
export const UserInterface: CarbonPictogramType;
export const UserProfile: CarbonPictogramType;
export const UserSearch: CarbonPictogramType;
export const Vancouver: CarbonPictogramType;
export const VenezuelaNationalPantheonOfVenezuela: CarbonPictogramType;
export const Video_01: CarbonPictogramType;
export const Video_02: CarbonPictogramType;
export const VideoChat: CarbonPictogramType;
export const VideoPlay: CarbonPictogramType;
export const Virus: CarbonPictogramType;
export const Vision: CarbonPictogramType;
export const VisualDesign: CarbonPictogramType;
export const VisualInsights: CarbonPictogramType;
export const VisualRecognition: CarbonPictogramType;
export const Warning_01: CarbonPictogramType;
export const Warning_02: CarbonPictogramType;
export const Washer: CarbonPictogramType;
export const WashingtonDc: CarbonPictogramType;
export const WashingtonDcCapitol: CarbonPictogramType;
export const WashingtonDcMonument: CarbonPictogramType;
export const WatsonLogo: CarbonPictogramType;
export const Weather: CarbonPictogramType;
export const WebDeveloper: CarbonPictogramType;
export const Webcast: CarbonPictogramType;
export const WeddingCake: CarbonPictogramType;
export const Wheat: CarbonPictogramType;
export const Wifi: CarbonPictogramType;
export const WindPower: CarbonPictogramType;
export const Windows: CarbonPictogramType;
export const Windy: CarbonPictogramType;
export const Wine: CarbonPictogramType;
export const WirelessHome: CarbonPictogramType;
export const WirelessModem: CarbonPictogramType;
export const WordCloud: CarbonPictogramType;
export const Workday: CarbonPictogramType;
export const WorldCommunityGrid: CarbonPictogramType;
export const WreckingBall: CarbonPictogramType;
export const XRay_01: CarbonPictogramType;
export const XRay_02: CarbonPictogramType;
export const Yoga_01: CarbonPictogramType;
export const Yoga_02: CarbonPictogramType;
export const Yoga_03: CarbonPictogramType;
export const Yoga_04: CarbonPictogramType;
