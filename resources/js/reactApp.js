import React from 'react';
import ReactDOM from 'react-dom/client';
import PageRoutes from './routes';

export default function App() {
    return (
        <React.StrictMode>
            <PageRoutes />
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
