
/* 
    // next/app;
    // Whatever the pages in page folder we go to,
    //  this "App" page runs first
    // This App page is responsible for rendering other pages.

    // Then, "Component" is a reference
    //   containing the component we are rendering.
    // In short, "Component" holds we are navigating to.

    // [IMPORTANT]
    // In this case, we are not fetching any data in App.js
    // For instance, we cannot execute "getInitialProps" in index.js file.
    // It is because "getInitialProps" is runing only when we navigates to that page.
    // Therefore, we should run the "getInitialProps" separately in this App component first.


    // In this App.js we can wrap additional components and features
    //  for instance, we can wrap footer and header over here


 */

import App from 'next/app';
import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

class MovieApp extends App {

    // [ IMPORTANT ]
    // Thefore, we need to separately execute the fucntions(TODO)
    // TODO: excute here "getInitialProps" and pass this data to each page

    static async getInitialProps(appContext) {
        console.log('appContext: ', appContext)
        // get App-based props here
        const appProps = await App.getInitialProps(appContext);
        // getInitialProps from each page which is rendering...
        // console.log('appProps: ', appProps) // it encloses pageProps
        return{ ...appProps }; // pageProps
    }

    render() {
        console.log(this.props);
        // "pageProps" is a default props in _app.js to get all props from each page 

        // Component here is just having the return value from the each component
        //  we are navigating to.
        // Does not run helper functions and getinitialProps here.
        const { Component, pageProps } =this.props;
        // console.log('pageProps: ---------> ', pageProps)
        // console.log('appProps ======> ', this.props.appProps);
        return(
            // Importing manually <Header>. Then, header will be available at any component
            <div>
                <Head>
                    <title>Home</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                </Head>
                <NavBar />
                <div className="base-page">
                    <Component { ...pageProps }/>
                </div>
                <Footer />
                <style jsx>{`
                    .base-page {
                    padding-top: 80px;
                    }
                `}
                </style>
            </div>
        );
    }
}

export default MovieApp;