/**
 * columnVisibilityReducerInitialState.js
 * Created by Lizzie Salita 5/23/17
 **/

import { OrderedSet } from 'immutable';

const initialState = {
    contracts: {
        visibleColumns: new OrderedSet(
            [
                'award_id',
                'recipient_name',
                'period_of_performance_start_date',
                'period_of_performance_current_end_date',
                'total_obligation',
                'awarding_agency_name',
                'awarding_subtier_name',
                'type'
            ]
        ),
        hiddenColumns: new OrderedSet(
            [
                'description',
                'date_signed',
                'potential_total_value_of_award',
                'awarding_office_name',
                'funding_agency_name',
                'funding_subtier_name',
                'funding_office_name',
                'recipient_address_line1',
                'recipient_address_line2',
                'recipient_address_line3',
                'recipient_country',
                'recipient_state_code',
                'recipient_province',
                'recipient_county',
                'recipient_city',
                'recipient_zip_postal',
                'recipient_congressional_district',
                'recipient_phone',
                'recipient_fax',
                'recipient_duns',
                'recipient_parent_duns',
                'pop_city',
                'pop_zip',
                'pop_country',
                'pop_state',
                'pop_province',
                'pop_congressional_district',
                'pop_county',
                'type_of_contract_pricing',
                'contract_parent_id',
                'contract_idv_type',
                'contract_idc_type',
                'contract_idv_agency_id',
                'contract_multiple_idv',
                'contract_solicitation_id',
                'contract_solicitation_procedures',
                'contract_number_offers',
                'contract_extent_competed',
                'contract_set_aside_type',
                'contract_commercial_acquisition_procedures',
                'contract_commercial_test_program',
                'contract_evaluated_preference',
                'contract_fed_biz_opps',
                'contract_small_business_competitiveness_demo',
                'contract_psc_code',
                'contract_naics_code',
                'contract_naics_description',
                'contract_dod_claimant_code',
                'contract_program_system_or_equipment_code',
                'contract_it_commercial_category',
                'contract_sea_transport',
                'contract_clinger_cohen_act',
                'contract_davis_bacon_act',
                'contract_service_contract_act',
                'contract_walsh_healey_act',
                'contract_consolidated',
                'contract_cost_or_pricing_data',
                'contract_fair_opportunity_limited_sources',
                'contract_foreign_funding',
                'contract_interagency_contacting_authority',
                'contract_major_program',
                'contract_multi_year_contract',
                'contract_price_evaluation_adjustment_preference',
                'contract_program_acronym',
                'contract_purchase_card_as_payment_method',
                'contract_subcontracting_plan'
            ]
        )
    },
    grants: {
        visibleColumns: new OrderedSet(
            [
                'award_id',
                'recipient_name',
                'period_of_performance_start_date',
                'period_of_performance_current_end_date',
                'total_obligation',
                'awarding_agency_name',
                'awarding_subtier_name',
                'type'
            ]
        ),
        hiddenColumns: new OrderedSet(
            [
                'funding_agency_name',
                'funding_subtier_name'
            ]
        )
    },
    direct_payments: {
        visibleColumns: new OrderedSet(
            [
                'award_id',
                'recipient_name',
                'period_of_performance_start_date',
                'period_of_performance_current_end_date',
                'total_obligation',
                'awarding_agency_name',
                'awarding_subtier_name',
                'type'
            ]
        ),
        hiddenColumns: new OrderedSet(
            [
                'funding_agency_name',
                'funding_subtier_name'
            ]
        )
    },
    loans: {
        visibleColumns: new OrderedSet(
            [
                'award_id',
                'recipient_name',
                'action_date',
                'face_value_loan_guarantee',
                'original_loan_subsidy_cost',
                'awarding_agency_name',
                'awarding_subtier_name'
            ]
        ),
        hiddenColumns: new OrderedSet(
            [
                'funding_agency_name',
                'funding_subtier_name'
            ]
        )
    },
    other: {
        visibleColumns: new OrderedSet(
            [
                'award_id',
                'recipient_name',
                'period_of_performance_start_date',
                'period_of_performance_current_end_date',
                'total_obligation',
                'awarding_agency_name',
                'awarding_subtier_name',
                'type'
            ]
        ),
        hiddenColumns: new OrderedSet(
            [
                'funding_agency_name',
                'funding_subtier_name'
            ]
        )
    }
};

export default initialState;

