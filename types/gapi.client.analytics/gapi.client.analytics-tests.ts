/* This is stub file for gapi.client.analytics definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20190807

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('analytics', 'v3', () => {
        /** now we can use gapi.client.analytics */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your Google Analytics data */
            'https://www.googleapis.com/auth/analytics',
            /** Edit Google Analytics management entities */
            'https://www.googleapis.com/auth/analytics.edit',
            /** Manage Google Analytics Account users by email address */
            'https://www.googleapis.com/auth/analytics.manage.users',
            /** View Google Analytics user permissions */
            'https://www.googleapis.com/auth/analytics.manage.users.readonly',
            /** Create a new Google Analytics account along with its default property and view */
            'https://www.googleapis.com/auth/analytics.provision',
            /** View your Google Analytics data */
            'https://www.googleapis.com/auth/analytics.readonly',
            /** Manage Google Analytics user deletion requests */
            'https://www.googleapis.com/auth/analytics.user.deletion',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /** Creates an account ticket. */
        await gapi.client.analytics.provisioning.createAccountTicket({} , {
            account: {
                childLink: {
                    href: "Test string",
                    type: "Test string",
                },
                created: "Test string",
                id: "Test string",
                kind: "Test string",
                name: "Test string",
                permissions: {
                    effective: [
                        "Test string"                    ],
                },
                selfLink: "Test string",
                starred: true,
                updated: "Test string",
            },
            id: "Test string",
            kind: "Test string",
            profile: {
                accountId: "Test string",
                botFilteringEnabled: true,
                childLink: {
                    href: "Test string",
                    type: "Test string",
                },
                created: "Test string",
                currency: "Test string",
                defaultPage: "Test string",
                eCommerceTracking: true,
                enhancedECommerceTracking: true,
                excludeQueryParameters: "Test string",
                id: "Test string",
                internalWebPropertyId: "Test string",
                kind: "Test string",
                name: "Test string",
                parentLink: {
                    href: "Test string",
                    type: "Test string",
                },
                permissions: {
                    effective: [
                        "Test string"                    ],
                },
                selfLink: "Test string",
                siteSearchCategoryParameters: "Test string",
                siteSearchQueryParameters: "Test string",
                starred: true,
                stripSiteSearchCategoryParameters: true,
                stripSiteSearchQueryParameters: true,
                timezone: "Test string",
                type: "Test string",
                updated: "Test string",
                webPropertyId: "Test string",
                websiteUrl: "Test string",
            },
            redirectUri: "Test string",
            webproperty: {
                accountId: "Test string",
                childLink: {
                    href: "Test string",
                    type: "Test string",
                },
                created: "Test string",
                dataRetentionResetOnNewActivity: true,
                dataRetentionTtl: "Test string",
                defaultProfileId: "Test string",
                id: "Test string",
                industryVertical: "Test string",
                internalWebPropertyId: "Test string",
                kind: "Test string",
                level: "Test string",
                name: "Test string",
                parentLink: {
                    href: "Test string",
                    type: "Test string",
                },
                permissions: {
                    effective: [
                        "Test string"                    ],
                },
                profileCount: 42,
                selfLink: "Test string",
                starred: true,
                updated: "Test string",
                websiteUrl: "Test string",
            },
        });
        /** Provision account. */
        await gapi.client.analytics.provisioning.createAccountTree({} , {
            accountName: "Test string",
            kind: "Test string",
            profileName: "Test string",
            timezone: "Test string",
            webpropertyName: "Test string",
            websiteUrl: "Test string",
        });
    }
});
