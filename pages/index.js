import React, { PureComponent } from "react";
export default class Index extends PureComponent {
    render() {
        return (
            <main>
                <header>
                    <h1>Home Page</h1>
                </header>
                <main>
                    <p>
                        Check out some
                        {/* :TODO: add link */}
                        <a>Popular Events</a>.
                    </p>
                </main>
            </main>
        );
    }
}
