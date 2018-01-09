/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('fitness', 'v1', () => {
        /** now we can use gapi.client.fitness */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View your activity information in Google Fit */
            'https://www.googleapis.com/auth/fitness.activity.read',
            /** View and store your activity information in Google Fit */
            'https://www.googleapis.com/auth/fitness.activity.write',
            /** View blood glucose data in Google Fit */
            'https://www.googleapis.com/auth/fitness.blood_glucose.read',
            /** View and store blood glucose data in Google Fit */
            'https://www.googleapis.com/auth/fitness.blood_glucose.write',
            /** View blood pressure data in Google Fit */
            'https://www.googleapis.com/auth/fitness.blood_pressure.read',
            /** View and store blood pressure data in Google Fit */
            'https://www.googleapis.com/auth/fitness.blood_pressure.write',
            /** View body sensor information in Google Fit */
            'https://www.googleapis.com/auth/fitness.body.read',
            /** View and store body sensor data in Google Fit */
            'https://www.googleapis.com/auth/fitness.body.write',
            /** View body temperature data in Google Fit */
            'https://www.googleapis.com/auth/fitness.body_temperature.read',
            /** View and store body temperature data in Google Fit */
            'https://www.googleapis.com/auth/fitness.body_temperature.write',
            /** View your stored location data in Google Fit */
            'https://www.googleapis.com/auth/fitness.location.read',
            /** View and store your location data in Google Fit */
            'https://www.googleapis.com/auth/fitness.location.write',
            /** View nutrition information in Google Fit */
            'https://www.googleapis.com/auth/fitness.nutrition.read',
            /** View and store nutrition information in Google Fit */
            'https://www.googleapis.com/auth/fitness.nutrition.write',
            /** View oxygen saturation data in Google Fit */
            'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
            /** View and store oxygen saturation data in Google Fit */
            'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
            /** View reproductive health data in Google Fit */
            'https://www.googleapis.com/auth/fitness.reproductive_health.read',
            /** View and store reproductive health data in Google Fit */
            'https://www.googleapis.com/auth/fitness.reproductive_health.write',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
    }
});
