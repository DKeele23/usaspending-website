/**
 * mockRecipientApi.js
 * Created by Lizzie Salita 6/25/18
 */

export const mockRecipientOverview = {
    name: 'The ABC Corporation',
    duns: '0123456',
    parent_name: 'The XYZ Corporation',
    parent_duns: '0987654',
    location: {
        address_line1: '123 Sesame St',
        city_name: 'McLean',
        state_code: 'VA',
        zip: '22102',
        country_name: null,
        country_code: 'USA',
        congressional_code: '05'
    },
    business_types: ['Corporate Entity', 'For Profit Organization'],
    total_prime_amount: 30020000000,
    total_prime_awards: 327721,
    total_sub_amount: 20020000000,
    total_sub_awards: 127721
};
