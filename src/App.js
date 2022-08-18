import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publishRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';
import Home from './pages/Home/Home';

function App() {
    document.title = 'VnExpress';
    return (
        <Router>
            <div className="App">
                {/* <Routes>
                {publishRoutes.map((route, index) => {
                    const Layout = DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes> */}
                <DefaultLayout>
                    <Home />
                </DefaultLayout>
            </div>
        </Router>
    );
}

export default App;
