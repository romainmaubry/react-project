import { Routes, Route } from "react-router-dom";
const Homepage = () => {
    return (
        <header>
            Homepage
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </header>
    )
}

export default Homepage