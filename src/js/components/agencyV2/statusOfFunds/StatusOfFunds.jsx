/**
 * StatusOfFunds.jsx
 * Created by Lizzie Salita 10/27/21
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FlexGridRow, FlexGridCol } from 'data-transparency-ui';
import { setSelectedSubcomponent } from 'redux/actions/agencyV2/agencyV2Actions';
import BaseStatusOfFundsLevel from 'models/v2/agency/BaseStatusOfFundsLevel';
import Note from 'components/sharedComponents/Note';
import DrilldownSidebar from './DrilldownSidebar';
import VisualizationSection from './VisualizationSection';
import IntroSection from './IntroSection';

const propTypes = {
    fy: PropTypes.string
};

export const levels = ['Sub-Component', 'Federal Account'];

// TODO: Replace mock data with API response once endpoints are available
export const mockChartData = {
    page_metadata: {
        page: 1,
        total: 1,
        limit: 2,
        next: 2,
        previous: null,
        hasNext: true,
        hasPrevious: false
    },
    results: [
        {
            name: "National Oceanic and Atmospheric Administration",
            total_budgetary_resources: 8000000000,
            total_obligations: 6000000000
        },
        {
            name: "Bureau of the Census",
            total_budgetary_resources: 4400000000,
            total_obligations: 2500000000
        },
        {
            name: "U.S. Patent and Trademark Office",
            total_budgetary_resources: 4200000000,
            total_obligations: 2700000000
        },
        {
            name: "Economic Development Administration",
            total_budgetary_resources: 4150000000,
            total_obligations: 1300000000
        },
        {
            name: "National Telecommunications and Information Administration",
            total_budgetary_resources: 2100000000,
            total_obligations: 50000000
        },
        {
            name: "National Institute of Standards and Technology",
            total_budgetary_resources: 1900000000,
            total_obligations: 1560000000
        },
        {
            name: "International Trade Administration",
            total_budgetary_resources: 1010000000,
            total_obligations: 960000000
        },
        {
            name: "Departmental Management",
            total_budgetary_resources: 100500000,
            total_obligations: 905000000
        },
        {
            name: "Bureau of Industry and Security",
            total_budgetary_resources: 10500000,
            total_obligations: 9050000
        },
        {
            name: "Bureau of Economic Analysis",
            total_budgetary_resources: 5000000,
            total_obligations: 4000000
        }
    ]
};

const StatusOfFunds = ({ fy }) => {
    const dispatch = useDispatch();
    const [level, setLevel] = useState(0);
    const { overview, selectedSubcomponent } = useSelector((state) => state.agencyV2);
    // TODO - remove mock data when DEV-8052 is implemented
    const mockData = {
        name: "Bureau of the Census",
        id: "bureau_of_the_census",
        total_budgetary_resources: 5000000,
        total_obligations: 3000000.72
    };
    const onClick = (selectedLevel, data = mockData) => {
        // TODO DEV-8052 move this logic to the visualization
        const subcomponent = Object.create(BaseStatusOfFundsLevel);
        subcomponent.populate(data);
        dispatch(setSelectedSubcomponent(subcomponent));
        setLevel(selectedLevel);
    };
    return (
        <div className="body__content status-of-funds">
            <IntroSection name={overview.name} fy={fy} />
            <FlexGridRow hasGutter>
                <FlexGridCol className="status-of-funds__drilldown-sidebar" desktop={3}>
                    <DrilldownSidebar
                        level={level}
                        setLevel={onClick}
                        agencyName={overview.name}
                        fy={fy}
                        selectedSubcomponent={selectedSubcomponent} />
                </FlexGridCol>
                <FlexGridCol className="status-of-funds__visualization" desktop={9}>
                    <VisualizationSection level={level} agencyId={overview.toptierCode} agencyName={overview.name} fy={fy} data={mockChartData} />
                </FlexGridCol>
            </FlexGridRow>
            <Note message={
                (<>The agency sub-components displayed in this section were
                    added to provide greater transparency into the organization of agencies’
                    account data. These sub-components are based on the Bureau associated
                    with a federal account in OMB’s Master Accounts Title file.
                    Sub-components are identified using Agency Identifier (AID) codes.
                    Department of Defense (DoD) sub-components
                    correspond to the branches of the Armed Forces and accounts for the
                    agency are attributed to the appropriate branch/sub-component based on
                    the Agency Codes found at the bottom of{ ' ' }
                    <a
                        href="https://www.whitehouse.gov/wp-content/uploads/2018/06/app_c.pdf"
                        target="_blank"
                        rel="noopener noreferrer">
                        OMB Circular A-11 Appendix C
                    </a>.</>)} />
        </div>
    );
};

StatusOfFunds.propTypes = propTypes;
export default StatusOfFunds;
