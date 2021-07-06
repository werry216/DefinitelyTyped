import { callback, BraintreeError } from './core';
import { Client } from './client';

export interface ThreeDSecureAccountDetails {
    cardType: string;
    lastTwo: string;
}

export interface ThreeDSecureVerifyPayload {
    nonce: string;
    details: ThreeDSecureAccountDetails;
    description: string;
    liabilityShiftPossible: boolean;
    liabilityShifted: boolean;
}

export interface ThreeDSecureBillingAddress {
    givenName?: string | undefined;
    surname?: string | undefined;
    phoneNumber?: string | undefined;
    streetAddress?: string | undefined;
    extendedAddress?: string | undefined;
    line3?: string | undefined;
    locality?: string | undefined;
    region?: string | undefined;
    postalCode?: string | undefined;
    countryCodeAlpha2?: string | undefined;
}

export interface ThreeDSecureShippingAddress {
    streetAddress: string;
    extendedAddress: string;
    line3: string;
    locality: string;
    region: string;
    postalCode: string;
    countryCodeAlpha2: string;
}

export interface ThreeDSecureAdditionalInformation {
    workPhoneNumber?: string | undefined;
    shippingGivenName?: string | undefined;
    shippingSurname?: string | undefined;
    shippingAddress?: ThreeDSecureShippingAddress | undefined;
    streetAddress?: string | undefined;
    extendedAddress?: string | undefined;
    line3?: string | undefined;
    locality?: string | undefined;
    region?: string | undefined;
    postalCode?: string | undefined;
    countryCodeAlpha2?: string | undefined;
    shippingPhone?: string | undefined;
    shippingMethod?: string | undefined;
    shippingMethodIndicator?: string | undefined;
    productCode?: string | undefined;
    deliveryTimeframe?: string | undefined;
    deliveryEmail?: string | undefined;
    reorderindicator?: string | undefined;
    preorderIndicator?: string | undefined;
    preorderDate?: string | undefined;
    giftCardAmount?: string | undefined;
    giftCardCurrencyCode?: string | undefined;
    giftCardCount?: string | undefined;
    accountAgeIndicator?: string | undefined;
    accountCreateDate?: string | undefined;
    accountChangeIndicator?: string | undefined;
    accountChangeDate?: string | undefined;
    accountPwdChangeIndicator?: string | undefined;
    accountPwdChangeDate?: string | undefined;
    shippingAddressUsageIndicator?: string | undefined;
    shippingAddressUsageDate?: string | undefined;
    transactionCountDay?: string | undefined;
    transactionCountYear?: string | undefined;
    addCardAttempts?: string | undefined;
    accountPurchases?: string | undefined;
    fraudActivity?: string | undefined;
    shippingNameIndicator?: string | undefined;
    paymentAccountIndicator?: string | undefined;
    paymentAccountAge?: string | undefined;
    acsWindowSize?: string | undefined;
    sdkMaxTimeout?: string | undefined;
    addressMatch?: string | undefined;
    accountId?: string | undefined;
    ipAddress?: string | undefined;
    orderDescription?: string | undefined;
    taxAmount?: string | undefined;
    userAgent?: string | undefined;
    authenticationIndicator?: string | undefined;
    installment?: string | undefined;
    purchaseDate?: string | undefined;
    recurringEnd?: string | undefined;
    recurringFrequency?: string | undefined;
}

export interface ThreeDSecureVerifyOptions {
    nonce: string;
    amount: number;
    bin: string;
    challengeRequested?: boolean | undefined;
    exemptionRequested?: boolean | undefined;
    email?: string | undefined;
    mobilePhoneNumber?: string | undefined;
    billingAddress?: ThreeDSecureBillingAddress | undefined;
    additionalInformation?: ThreeDSecureAdditionalInformation | undefined;
    addFrame?: ((err?: BraintreeError, iframe?: HTMLIFrameElement) => void) | undefined;
    removeFrame?: (() => void) | undefined;
}

export interface ThreeDSecure {
    /**
     * braintree.threeDSecure.create({
     *   client: client
     * }, callback);
     */
    create(options: {
        authorization?: string | undefined;
        version?: 1 | '1' | 2 | '2' | '2-bootstrap3-modal' | '2-inline-iframe' | undefined;
        client?: Client | undefined;
    }): Promise<ThreeDSecure>;
    create(
        options: {
            authorization?: string | undefined;
            version?: 1 | '1' | 2 | '2' | '2-bootstrap3-modal' | '2-inline-iframe' | undefined;
            client?: Client | undefined;
        },
        callback: callback,
    ): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     */
    VERSION: string;

    addFrameCallback: (err?: BraintreeError, iframe?: HTMLIFrameElement) => void;

    /**
     * @description The callback used for options.removeFrame in {@link ThreeDSecure#verifyCard|verifyCard}.
     */
    removeFrameCallback: () => void;

    /**
     * Launch the 3D Secure login flow, returning a nonce payload.
     * @example
     * <caption>Verifying an existing nonce with 3DS</caption>
     * var my3DSContainer;
     *
     * threeDSecure.verifyCard({
     *   nonce: existingNonce,
     *   amount: 123.45,
     *   addFrame: function (err, iframe) {
     *     // Set up your UI and add the iframe.
     *     my3DSContainer = document.createElement('div');
     *     my3DSContainer.appendChild(iframe);
     *     document.body.appendChild(my3DSContainer);
     *   },
     *   removeFrame: function () {
     *     // Remove UI that you added in addFrame.
     *     document.body.removeChild(my3DSContainer);
     *   }
     * }, function (err, payload) {
     *   if (err) {
     *     console.error(err);
     *     return;
     *   }
     *
     *   if (payload.liabilityShifted) {
     *     // Liablity has shifted
     *     submitNonceToServer(payload.nonce);
     *   } else if (payload.liabilityShiftPossible) {
     *     // Liablity may still be shifted
     *     // Decide if you want to submit the nonce
     *   } else {
     *     // Liablity has not shifted and will not shift
     *     // Decide if you want to submit the nonce
     *   }
     * });
     */
    verifyCard(options: ThreeDSecureVerifyOptions): Promise<ThreeDSecureVerifyPayload>;
    verifyCard(options: ThreeDSecureVerifyOptions, callback: callback): void;

    /**
     * Cancel the 3DS flow and return the verification payload if available.     * @example
     * threeDSecure.cancelVerifyCard(function (err, verifyPayload) {
     *   if (err) {
     *     // Handle error
     *     console.log(err.message); // No verification payload available
     *     return;
     *   }
     *
     *   verifyPayload.nonce; // The nonce returned from the 3ds lookup call
     *   verifyPayload.liabilityShifted; // boolean
     *   verifyPayload.liabilityShiftPossible; // boolean
     * });
     */
    cancelVerifyCard(callback: callback): void;

    /**
     * Gather the data needed for a 3D Secure lookup call.
     *     * @example
     * <caption>Preparing data for a 3D Secure lookup</caption>
     * threeDSecure.prepareLookup({
     *   nonce: hostedFieldsTokenizationPayload.nonce,
     *   bin: hostedFieldsTokenizationPayload.details.bin
     * }, function (err, payload) {
     *   if (err) {
     *     console.error(err);
     *     return;
     *   }
     *
     *   // send payload to server to do server side lookup
     * });
     */
    prepareLookup(options: { nonce: string; bin: string }): Promise<string>;
    prepareLookup(options: { nonce: string; bin: string }, callback: callback): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/three-d-secure.create|create}
     */
    teardown(callback?: callback): void;
}
