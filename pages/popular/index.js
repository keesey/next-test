import React, { PureComponent } from "react";
export default class Popular extends PureComponent {
    static async getInitialProps() {
        // :TODO: load popular events 
    }
    render() {
        return (
            <main>
                <header>
                    <h1>Popular Events</h1>
                </header>
                <main>
                    <ul style={{ display: "flex", flexDirection: "column", listStyleType: "none" }}>
                        {/* :TODO: display event items */}
                    </ul>
                </main>
            </main>
        );
    }
}
