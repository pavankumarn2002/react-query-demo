import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import { ReactQueryDevtools } from 'react-query/devtools'
import DataTransfering from "./components/DataTransfering.page";
import DataUsingHook from "./components/DataUsingHook";
import SuperHeroDetails from "./components/SuperHeroDetails";
import DataById from "./components/DataById";
import ParallelQuery from "./components/ParallelQuery";
import DynamicQuery from "./components/DynamicQuery";
import DependentQuery from "./components/DependentQuery";
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <nav>
                        <ul className="nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/super-heroes">Traditional Super Heroes</Link>
                            </li>
                            <li>
                                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
                            </li>
                            <li>
                                <Link to="/data-transfering">Data Transfering</Link>
                            </li>
                            <li>
                                <Link to="/data-using-hook">Data Using Hook</Link>
                            </li>
                            <li>
                                <Link to="/data-by-id">Data By Id</Link>
                            </li>
                            <li>
                                <Link to="/parallel-query">Parallel Query</Link>
                            </li>
                            <li>
                                <Link to="/dynamic-query">Dynamic Query</Link>
                            </li>
                            <li>
                                <Link to="/dependent-query">Dependent Query</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/super-heroes" element={<SuperHeroesPage />} />
                        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
                        <Route path="/data-transfering" element={<DataTransfering />} />
                        <Route path="/data-using-hook" element={<DataUsingHook />} />
                        <Route path="/data-by-id" element={<DataById />} />
                        <Route path="/data-by-id/:heroId" element={<SuperHeroDetails />} />
                        <Route path="/parallel-query" element={<ParallelQuery />} />
                        <Route path="/dynamic-query" element={<DynamicQuery heroIds={[1,3]}/>} />
                        <Route path="/dependent-query" element={<DependentQuery email={"vishwas@example.com"}/>} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
    );
}

export default App;
