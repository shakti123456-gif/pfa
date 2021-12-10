import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";

const Layout = ({ children, isCarousel, title }) => {
    return (
        <div>
            <Header />
            <Banner isCarousel={isCarousel} title={title} />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;