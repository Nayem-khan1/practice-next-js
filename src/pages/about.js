import RootLayouts from "@/components/Layouts/RootLayouts";

const About = () => {
    return (
        <div>
            <h1>This About Page</h1>
        </div>
    );
};

export default About;

About.getLayout = function getLayout (page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    )
}