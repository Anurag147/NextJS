import MainNavigation from "./main-navigation";

const Layout = (props) => {
    return (
        <>
          <MainNavigation></MainNavigation>
          <main>{props.children}</main>
        </>
    )
}

export default Layout;