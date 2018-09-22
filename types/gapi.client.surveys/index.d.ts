// Type definitions for Google Surveys API v2 2.0
// Project: undefined
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/surveys/v2/rest

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Surveys API v2 */
    function load(name: "surveys", version: "v2"): PromiseLike<void>;
    function load(name: "surveys", version: "v2", callback: () => any): void;

    const mobileapppanels: surveys.MobileapppanelsResource;

    const results: surveys.ResultsResource;

    const surveys: surveys.SurveysResource;

    namespace surveys {
        interface FieldMask {
            fields?: FieldMask[];
            id?: number;
        }
        interface MobileAppPanel {
            /**
             * Country code for the country of the users that the panel contains. Uses standard ISO 3166-1 2-character language codes. For instance, 'US' for the
             * United States, and 'GB' for the United Kingdom. Any survey created targeting this panel must also target the corresponding country.
             */
            country?: string;
            /** Whether or not the panel is accessible to all API users. */
            isPublicPanel?: boolean;
            /**
             * Language code that the panel can target. For instance, 'en-US'. Uses standard BCP47 language codes. See specification. Any survey created targeting
             * this panel must also target the corresponding language.
             */
            language?: string;
            /** Unique panel ID string. This corresponds to the mobile_app_panel_id used in Survey Insert requests. */
            mobileAppPanelId?: string;
            /** Human readable name of the audience panel. */
            name?: string;
            /**
             * List of email addresses for users who can target members of this panel. Must contain at least the address of the user making the API call for panels
             * that are not public. This field will be empty for public panels.
             */
            owners?: string[];
        }
        interface MobileAppPanelsListResponse {
            pageInfo?: PageInfo;
            /** Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests. */
            requestId?: string;
            /** An individual predefined panel of Opinion Rewards mobile users. */
            resources?: MobileAppPanel[];
            tokenPagination?: TokenPagination;
        }
        interface PageInfo {
            resultPerPage?: number;
            startIndex?: number;
            totalResults?: number;
        }
        interface ResultsGetRequest {
            resultMask?: ResultsMask;
        }
        interface ResultsMask {
            fields?: FieldMask[];
            projection?: string;
        }
        interface Survey {
            /** Targeting-criteria message containing demographic information */
            audience?: SurveyAudience;
            /** Cost to run the survey and collect the necessary number of responses. */
            cost?: SurveyCost;
            /**
             * Additional information to store on behalf of the API consumer and associate with this question. This binary blob is treated as opaque. This field is
             * limited to 64K bytes.
             */
            customerData?: string;
            /** Text description of the survey. */
            description?: string;
            /** List of email addresses for survey owners. Must contain at least the address of the user making the API call. */
            owners?: string[];
            /** List of questions defining the survey. */
            questions?: SurveyQuestion[];
            /** Reason for the survey being rejected. Only present if the survey state is rejected. */
            rejectionReason?: SurveyRejection;
            /** State that the survey is in. */
            state?: string;
            /** Unique survey ID, that is viewable in the URL of the Survey Creator UI */
            surveyUrlId?: string;
            /** Optional name that will be given to the survey. */
            title?: string;
            /** Number of responses desired for the survey. */
            wantedResponseCount?: number;
        }
        interface SurveyAudience {
            /** Optional list of age buckets to target. Supported age buckets are: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'] */
            ages?: string[];
            /**
             * Required country code that surveys should be targeted to. Accepts standard ISO 3166-1 2 character language codes. For instance, 'US' for the United
             * States, and 'GB' for the United Kingdom.
             */
            country?: string;
            /**
             * Country subdivision (states/provinces/etc) that surveys should be targeted to. For all countries except GB, ISO-3166-2 subdivision code is required
             * (eg. 'US-OH' for Ohio, United States). For GB, NUTS 1 statistical region codes for the United Kingdom is required (eg. 'UK-UKC' for North East
             * England).
             */
            countrySubdivision?: string;
            /** Optional gender to target. */
            gender?: string;
            /**
             * Language code that surveys should be targeted to. For instance, 'en-US'. Surveys may target bilingual users by specifying a list of language codes (for
             * example, 'de' and 'en-US'). In that case, all languages will be used for targeting users but the survey content (which is displayed) must match the
             * first language listed. Accepts standard BCP47 language codes. See specification.
             */
            languages?: string[];
            /**
             * Key for predefined panel that causes survey to be sent to a predefined set of Opinion Rewards App users. You must set PopulationSource to
             * ANDROID_APP_PANEL to use this field.
             */
            mobileAppPanelId?: string;
            /** Online population source where the respondents are sampled from. */
            populationSource?: string;
        }
        interface SurveyCost {
            /** Cost per survey response in nano units of the given currency. To get the total cost for a survey, multiply this value by wanted_response_count. */
            costPerResponseNanos?: string;
            /** Currency code that the cost is given in. */
            currencyCode?: string;
            /**
             * Threshold to start a survey automatically if the quoted price is at most this value. When a survey has a Screener (threshold) question, it must go
             * through an incidence pricing test to determine the final cost per response. Typically you will have to make a followup call to start the survey giving
             * the final computed cost per response. If the survey has no threshold_answers, setting this property will return an error. By specifying this property,
             * you indicate the max price per response you are willing to pay in advance of the incidence test. If the price turns out to be lower than the specified
             * value, the survey will begin immediately and you will be charged at the rate determined by the incidence pricing test. If the price turns out to be
             * greater than the specified value the survey will not be started and you will instead be notified what price was determined by the incidence test. At
             * that point, you must raise the value of this property to be greater than or equal to that cost before attempting to start the survey again. This will
             * immediately start the survey as long the incidence test was run within the last 21 days.
             */
            maxCostPerResponseNanos?: string;
            /** Cost of survey in nano units of the given currency. DEPRECATED in favor of cost_per_response_nanos */
            nanos?: string;
        }
        interface SurveyQuestion {
            /** The randomization option for multiple choice and multi-select questions. If not specified, this option defaults to randomize. */
            answerOrder?: string;
            /** Required list of answer options for a question. */
            answers?: string[];
            /**
             * Option to allow open-ended text box for Single Answer and Multiple Answer question types. This can be used with SINGLE_ANSWER,
             * SINGLE_ANSWER_WITH_IMAGE, MULTIPLE_ANSWERS, and MULTIPLE_ANSWERS_WITH_IMAGE question types.
             */
            hasOther?: boolean;
            /**
             * For rating questions, the text for the higher end of the scale, such as 'Best'. For numeric questions, a string representing a floating-point that is
             * the maximum allowed number for a response.
             */
            highValueLabel?: string;
            images?: SurveyQuestionImage[];
            /** Currently only support pinning an answer option to the last position. */
            lastAnswerPositionPinned?: boolean;
            /**
             * For rating questions, the text for the lower end of the scale, such as 'Worst'. For numeric questions, a string representing a floating-point that is
             * the minimum allowed number for a response.
             */
            lowValueLabel?: string;
            /** Option to force the user to pick one of the open text suggestions. This requires that suggestions are provided for this question. */
            mustPickSuggestion?: boolean;
            /** Number of stars to use for ratings questions. */
            numStars?: string;
            /** Placeholder text for an open text question. */
            openTextPlaceholder?: string;
            /** A list of suggested answers for open text question auto-complete. This is only valid if single_line_response is true. */
            openTextSuggestions?: string[];
            /** Required question text shown to the respondent. */
            question?: string;
            /**
             * Used by the Rating Scale with Text question type. This text goes along with the question field that is presented to the respondent, and is the actual
             * text that the respondent is asked to rate.
             */
            sentimentText?: string;
            /**
             * Option to allow multiple line open text responses instead of a single line response. Note that we don't show auto-complete suggestions with multiple
             * line responses.
             */
            singleLineResponse?: boolean;
            /** The threshold/screener answer options, which will screen a user into the rest of the survey. These will be a subset of the answer option strings. */
            thresholdAnswers?: string[];
            /** Required field defining the question type. For details about configuring different type of questions, consult the question configuration guide. */
            type?: string;
            /** Optional unit of measurement for display (for example: hours, people, miles). */
            unitOfMeasurementLabel?: string;
            /** The YouTube video ID to be show in video questions. */
            videoId?: string;
        }
        interface SurveyQuestionImage {
            /** The alt text property used in image tags is required for all images. */
            altText?: string;
            /** Inline jpeg, gif, tiff, bmp, or png image raw bytes for an image question types. */
            data?: string;
            /** The read-only URL for the hosted images. */
            url?: string;
        }
        interface SurveyRejection {
            /** A human-readable explanation of what was wrong with the survey. */
            explanation?: string;
            /** Which category of rejection this was. See the  Google Surveys Help Center for additional details on each category. */
            type?: string;
        }
        interface SurveyResults {
            /** Human readable string describing the status of the request. */
            status?: string;
            /** External survey ID as viewable by survey owners in the editor view. */
            surveyUrlId?: string;
        }
        interface SurveysDeleteResponse {
            /** Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests. */
            requestId?: string;
        }
        interface SurveysListResponse {
            pageInfo?: PageInfo;
            /** Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests. */
            requestId?: string;
            /** An individual survey resource. */
            resources?: Survey[];
            tokenPagination?: TokenPagination;
        }
        interface SurveysStartRequest {
            /** Threshold to start a survey automically if the quoted prices is less than or equal to this value. See Survey.Cost for more details. */
            maxCostPerResponseNanos?: string;
        }
        interface SurveysStartResponse {
            /** Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests. */
            requestId?: string;
        }
        interface SurveysStopResponse {
            /** Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests. */
            requestId?: string;
        }
        interface TokenPagination {
            nextPageToken?: string;
            previousPageToken?: string;
        }
        interface MobileapppanelsResource {
            /** Retrieves a MobileAppPanel that is available to the authenticated user. */
            get(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** External URL ID for the panel. */
                panelId: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<MobileAppPanel>;
            /** Lists the MobileAppPanels available to the authenticated user. */
            list(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                startIndex?: number;
                token?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<MobileAppPanelsListResponse>;
            /** Updates a MobileAppPanel. Currently the only property that can be updated is the owners property. */
            update(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** External URL ID for the panel. */
                panelId: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<MobileAppPanel>;
        }
        interface ResultsResource {
            /**
             * Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an
             * argument to get results.
             */
            get(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** External URL ID for the survey. */
                surveyUrlId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<SurveyResults>;
        }
        interface SurveysResource {
            /** Removes a survey from view in all user GET requests. */
            delete(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** External URL ID for the survey. */
                surveyUrlId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<SurveysDeleteResponse>;
            /** Retrieves information about the specified survey. */
            get(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** External URL ID for the survey. */
                surveyUrlId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Survey>;
            /** Creates a survey. */
            insert(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Survey>;
            /** Lists the surveys owned by the authenticated user. */
            list(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                startIndex?: number;
                token?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<SurveysListResponse>;
            /** Begins running a survey. */
            start(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                resourceId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<SurveysStartResponse>;
            /** Stops a running survey. */
            stop(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                resourceId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<SurveysStopResponse>;
            /** Updates a survey. Currently the only property that can be updated is the owners property. */
            update(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** External URL ID for the survey. */
                surveyUrlId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Survey>;
        }
    }
}
