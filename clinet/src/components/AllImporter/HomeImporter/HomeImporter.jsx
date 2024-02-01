import LatestArticles from "../../LatestArticles/LatestArticles";
import NewPrivateTours from "../../NewPrivateTours/NewPrivateTours";
import NewTourGuides from "../../NewTourGuides/NewTourGuides";
import PopularArticles from "../../PopularArticles/PopularArticles";
import PopularDestination from "../../PopularDestination/PopularDestination";
import PopularGuide from "../../PopularGuide/PopularGuide";
import PopularPrivateCars from "../../PopularPrivateCars/PopularPrivateCars";
import PopularPrivateTours from "../../PopularPrivateTours/PopularPrivateTours";
import PopularVirtualTours from "../../PopularVirtualTours/PopularVirtualTours";
import HomeContinent from "../../continents/HomeContinent";

const components = [
    <PopularDestination />,
    <HomeContinent />,
    <PopularGuide />,
    <NewTourGuides />,
    <PopularPrivateTours />,
    <NewPrivateTours />,
    <PopularPrivateCars />,
    <PopularVirtualTours />,
    <LatestArticles />,
    <PopularArticles />
]

export default components;