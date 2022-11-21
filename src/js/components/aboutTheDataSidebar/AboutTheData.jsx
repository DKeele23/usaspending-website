/**
 * AboutTheData.jsx
 * Created by Nick Torres 11/2/22
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import schema from 'dataMapping/aboutTheDataSchema';
import AboutTheDataHeader from "./AboutTheDataHeader";
import AboutTheDataListView from "./AboutTheDataListView";
import AboutTheDataDrilldown from "./AboutTheDataDrilldown";
import AboutTheDataByPage from "./AboutTheDataByPage";
import DownloadButton from "./DownloadButton";

require('components/aboutTheDataSidebar/aboutTheData.scss');

const propTypes = {
    children: PropTypes.element,
    onClose: PropTypes.func
};

const AboutTheData = (props) => {
    const [height, setHeight] = useState(0);
    const [pathname, setPathname] = useState('');
    const [drilldown, setDrilldown] = useState(null);
    const [drilldownItemId, setDrilldownItemId] = useState(null);
    const [drilldownSection, setDrilldownSection] = useState(null);

    const measureAvailableHeight = () => {
        const paddingBottom = 200;
        const wrapperHeight = document.getElementById('usa-atd-wrapper')?.getBoundingClientRect().height || 0;
        const headerHeight = document.getElementById('usa-atd-header')?.getBoundingClientRect().height || 0;

        const sidebarHeight = wrapperHeight - headerHeight - paddingBottom;

        setHeight(sidebarHeight);
    };

    useEffect(() => {
        measureAvailableHeight();
    }, [drilldown]);

    useEffect(() => {
        window.addEventListener('resize', measureAvailableHeight);
        setPathname(window.location.pathname);
        return () => window.removeEventListener('resize', measureAvailableHeight);
    }, []);

    const track = () => <div className="atd-scrollbar-track" />;
    const thumb = () => <div className="atd-scrollbar-thumb" />;

    const selectItem = (index, section) => {
        setDrilldownItemId(index);
        setDrilldownSection(section);
    };

    const clearDrilldown = () => {
        setDrilldownItemId(null);
        setDrilldownSection(null);
        setDrilldown(false);
    };

    useEffect(() => {
        if (drilldownItemId !== null && drilldownItemId >= 0 && drilldownSection) {
            setDrilldown(true);
        }
    }, [drilldownItemId, drilldownSection]);

    return (
        <div id="usa-atd-wrapper" className="usa-atd-wrapper">
            <aside
                role="dialog"
                aria-labelledby="atd-title"
                className="atd-sidebar">
                <AboutTheDataHeader closeAboutTheData={props.onClose} />
                <Scrollbars
                    style={{ height }}
                    renderTrackVertical={track}
                    renderThumbVertical={thumb}>
                    {drilldown ?
                        <div className="atd__body">
                            <AboutTheDataDrilldown section={drilldownSection.heading} name={drilldownSection.fields[drilldownItemId].name} clearDrilldown={clearDrilldown} />
                        </div>
                        :
                        <>
                            <AboutTheDataByPage section={schema["by-page"]} pathname={pathname} />
                            <div className="atd__body">
                                <DownloadButton />
                                <AboutTheDataListView section={schema.descriptions} selectItem={selectItem} />
                                <AboutTheDataListView section={schema.disclosures} selectItem={selectItem} />
                                <AboutTheDataListView section={schema["award-disclosures"]} selectItem={selectItem} />
                                <AboutTheDataListView section={schema["covid-disclosures"]} selectItem={selectItem} />
                            </div>
                        </>}
                </Scrollbars>
            </aside>
        </div>);
};

AboutTheData.propTypes = propTypes;
export default AboutTheData;