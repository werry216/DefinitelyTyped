/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('partners', 'v2', () => {
        /** now we can use gapi.client.partners */

        run();
    });

    async function run() {
        /**
         * Lists analytics data for a user's associated company.
         * Should only be called within the context of an authorized logged in user.
         */
        await gapi.client.analytics.list({
            pageSize: 1,
            pageToken: "pageToken",
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
        });
        /**
         * Logs a generic message from the client, such as
         * `Failed to render component`, `Profile page is running slow`,
         * `More than 500 users have accessed this result.`, etc.
         */
        await gapi.client.clientMessages.log({
        });
        /** Gets a company. */
        await gapi.client.companies.get({
            address: "address",
            companyId: "companyId",
            currencyCode: "currencyCode",
            orderBy: "orderBy",
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
            view: "view",
        });
        /** Lists companies. */
        await gapi.client.companies.list({
            address: "address",
            companyName: "companyName",
            gpsMotivations: "gpsMotivations",
            industries: "industries",
            languageCodes: "languageCodes",
            "maxMonthlyBudget.currencyCode": "maxMonthlyBudget.currencyCode",
            "maxMonthlyBudget.nanos": 7,
            "maxMonthlyBudget.units": "maxMonthlyBudget.units",
            "minMonthlyBudget.currencyCode": "minMonthlyBudget.currencyCode",
            "minMonthlyBudget.nanos": 10,
            "minMonthlyBudget.units": "minMonthlyBudget.units",
            orderBy: "orderBy",
            pageSize: 13,
            pageToken: "pageToken",
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
            services: "services",
            specializations: "specializations",
            view: "view",
            websiteUrl: "websiteUrl",
        });
        /** Gets an Exam Token for a Partner's user to take an exam in the Exams System */
        await gapi.client.exams.getToken({
            examType: "examType",
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
        });
        /**
         * Lists advertiser leads for a user's associated company.
         * Should only be called within the context of an authorized logged in user.
         */
        await gapi.client.leads.list({
            orderBy: "orderBy",
            pageSize: 2,
            pageToken: "pageToken",
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
        });
        /** Lists the Offers available for the current user */
        await gapi.client.offers.list({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
        });
        /** Logs a user event. */
        await gapi.client.userEvents.log({
        });
        /** Lists states for current user. */
        await gapi.client.userStates.list({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
        });
        /** Creates a user's company relation. Affiliates the user to a company. */
        await gapi.client.users.createCompanyRelation({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
            userId: "userId",
        });
        /** Deletes a user's company relation. Unaffiliaites the user from a company. */
        await gapi.client.users.deleteCompanyRelation({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
            userId: "userId",
        });
        /** Gets a user. */
        await gapi.client.users.get({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
            userId: "userId",
            userView: "userView",
        });
        /**
         * Updates a user's profile. A user can only update their own profile and
         * should only be called within the context of a logged in user.
         */
        await gapi.client.users.updateProfile({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
        });
        /**
         * Gets Partners Status of the logged in user's agency.
         * Should only be called if the logged in user is the admin of the agency.
         */
        await gapi.client.v2.getPartnersstatus({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
        });
        /**
         * Update company.
         * Should only be called within the context of an authorized logged in user.
         */
        await gapi.client.v2.updateCompanies({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
            updateMask: "updateMask",
        });
        /** Updates the specified lead. */
        await gapi.client.v2.updateLeads({
            "requestMetadata.experimentIds": "requestMetadata.experimentIds",
            "requestMetadata.locale": "requestMetadata.locale",
            "requestMetadata.partnersSessionId": "requestMetadata.partnersSessionId",
            "requestMetadata.trafficSource.trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
            "requestMetadata.trafficSource.trafficSubId": "requestMetadata.trafficSource.trafficSubId",
            "requestMetadata.userOverrides.ipAddress": "requestMetadata.userOverrides.ipAddress",
            "requestMetadata.userOverrides.userId": "requestMetadata.userOverrides.userId",
            updateMask: "updateMask",
        });
    }
});
